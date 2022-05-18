import { draftToMarkdown } from "markdown-draft-js";
import fetch from "cross-fetch";
import { SupportedChainId } from "../../configs/chains";
import { GetGrantApplicationsQuery, Workspace } from "../../generated/graphql";
import { getItem, setItem } from "./db";
import { authHeaders, defaultHeaders } from "./headers";
import "dotenv/config";
import getFromIPFS from "./ipfs";
import { CHAIN_INFO } from "../../configs/chainInfo";
import formatAmount from "./formattingUtils";

const Pino = require("pino");

const logger = Pino();

const getKey = (chainId: SupportedChainId, workspaceId: string) => `${chainId}.${workspaceId}`;

const getCategoryFromWorkspace = async (
  chainId: SupportedChainId,
  workspaceId: string,
): Promise<number> => {
  logger.info({ chainId, workspaceId }, "Get category from workspace");
  return 6;
  // const key = getKey(chainId, workspaceId);
  // const value = await getItem(key);
  // return value;
};

const getStringField = (
  fields: GetGrantApplicationsQuery["grantApplications"][number]["fields"],
  fieldName: string,
) => {
  logger.info({ fieldName }, "Get string field");
  const field = fields?.find(({ id }) => id.split(".")[1] === fieldName)?.values[0]?.value
      ?? "";
  logger.info({ field }, "Field");
  return field;
};

const getProjectDetails = async (projectDetails: string) => {
  if (projectDetails.startsWith("Qm")) {
    logger.info({ projectDetails }, "Get project details from IPFS Hash");
    const raw = await getFromIPFS(projectDetails);
    return draftToMarkdown(JSON.parse(raw));
  }
  return projectDetails;
};

const getCurrency = (application: GetGrantApplicationsQuery["grantApplications"][number], chainId: SupportedChainId) => {
  const key = application.grant.reward.asset;
  const currency = application.grant.workspace.tokens.find(
    (
      token: GetGrantApplicationsQuery["grantApplications"][number]["grant"]["workspace"]["tokens"][number],
    ) => token.address === key,
  ) || CHAIN_INFO[chainId].supportedCurrencies[key];
  if (!currency) return { label: "UNDEFINED", decimals: 18 };
  return { label: currency.label, decimals: currency.decimal };
};

const getRawFromApplication = async (application: GetGrantApplicationsQuery["grantApplications"][number], chainId: SupportedChainId): Promise<string> => {
  const details = await getProjectDetails(
    getStringField(application.fields, "projectDetails"),
  );
  const dataOrHash = getStringField(application.fields, "projectDetails");
  logger.info({ dataOrHash }, "Project details");
  logger.info({ details }, "Decoded project details");
  const currency: {label: string, decimals: number} = getCurrency(application, chainId);
  logger.info({ currency }, "Currency");

  const raw = `## Name of Project / DAO / Company\n${getStringField(
    application.fields,
    "projectName",
  )}\n\n`
    + `## Application type\n${"Product Launch"}\n\n`
    + `## Proposal overview\n${details}\n\n`
    + `## Team\n${getStringField(
      application.fields,
      "applicantName",
    )} - ${getStringField(application.fields, "applicantEmail")}\n\n`
    + `## Proposal ask\n${formatAmount(getStringField(application.fields, "fundingAsk"), currency.decimals)} ${currency.label}\n\n`
    + `## Justification\n${getStringField(
      application.fields,
      "fundingBreakdown",
    )}\n\n`
    + `## Metrics for success\n${application.milestones.map(
      (
        milestone: GetGrantApplicationsQuery["grantApplications"][number]["milestones"][number],
      ) => `${milestone.title} - ${formatAmount(milestone.amount, currency.decimals)} ${currency.label}`,
    )}\n\n`
    + `## External links\n${application.externalLinks.length > 0 ? application.externalLinks[0].values[0].value : ""}`;
  logger.info({ raw }, "Raw");
  return raw;
};

async function createPost(
  chainId: SupportedChainId,
  application: GetGrantApplicationsQuery["grantApplications"][number],
) : Promise<boolean> {
  const category = await getCategoryFromWorkspace(
    chainId,
    application.grant.workspace.id,
  );

  if (category === -1) {
    logger.info({}, 'Category not found');
    return false;
  }

  const postIdKey = `${chainId}.${application.id}.post_id`;
  const postId = await getItem(postIdKey);
  if (postId !== -1) {
    logger.info({ postId }, "Post already exists");
    return false;
  }

  const topicIdKey = `${chainId}.${application.id}.topic_id`;
  const topicId = await getItem(postIdKey);
  if (topicId !== -1) {
    logger.info({ topicId }, "Topic already exists");
    return false;
  }

  const raw = JSON.stringify({
    category,
    title: getStringField(application.fields, "projectName"),
    raw: await getRawFromApplication(application, chainId),
  });
  logger.info({ raw }, "Raw Data - Create Post");

  const requestOptions = {
    method: "POST",
    headers: authHeaders,
    body: raw,
  };

  const url = `${process.env.DISCOURSE_HOST}/posts.json`;
  const response = await fetch(url, requestOptions);
  logger.info(response.status, "Create post status");

  const json = await response.json();
  logger.info(json, "Create post json");

  if (response.status === 200) {
    await setItem(`${chainId}.${application.id}.post_id`, json.id);
    await setItem(`${chainId}.${application.id}.topic_id`, json.topic_id);
    return true;
  }
  return false;
}

async function editPost(
  chainId: SupportedChainId,
  application: GetGrantApplicationsQuery["grantApplications"][number],
) : Promise<boolean> {
  const key = `${chainId}.${application.id}.post_id`;
  const postId = await getItem(key);
  if (postId === -1) {
    logger.info({}, 'Post not found');
    return false;
  }

  const raw = JSON.stringify({
    title: `${getStringField(application.fields, "projectName")} - Resubmission`,
    raw: await getRawFromApplication(application, chainId),
    edit_reason: "Application Resubmission",
  });

  logger.info({ raw }, "Raw Data - Edit Post");

  const requestOptions = {
    method: "PUT",
    headers: authHeaders,
    body: raw,
  };

  const response = await fetch(
    `${process.env.DISCOURSE_HOST}/posts/${postId}.json`,
    requestOptions,
  );
  logger.info(response.status, "Edit post status");

  const json = await response.json();
  logger.info(json, "Edit post json");
  return true;
}

async function addReplyToPost(
  chainId: SupportedChainId,
  applicationId: string,
  reply: string,
) : Promise<boolean> {
  const key = `${chainId}.${applicationId}.topic_id`;
  const topicId = await getItem(key);
  if (topicId === -1) {
    logger.info({}, 'Topic not found');
    return false;
  }

  const raw = JSON.stringify({
    topic_id: topicId,
    raw: reply,
  });
  logger.info({ raw }, "Raw Data - Reply to Post");

  const requestOptions = {
    method: "POST",
    headers: authHeaders,
    body: raw,
  };

  const response = await fetch(
    `${process.env.DISCOURSE_HOST}/posts.json`,
    requestOptions,
  );
  logger.info(response.status, "Reply to post status");

  const json = await response.json();
  logger.info(json, "Reply to post json");
  return true;
}

async function createCategory(chainId: SupportedChainId, workspace: Workspace) {
  const key = getKey(chainId, workspace.id);

  // TODO: Create a new category under funding-proposals
}

export {
  createPost, editPost, addReplyToPost, createCategory,
};
