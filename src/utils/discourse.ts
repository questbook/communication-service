import { draftToMarkdown } from "markdown-draft-js";
import { SupportedChainId } from "../configs/chains";
import { GetGrantApplicationsQuery, Workspace } from "../generated/graphql";
import { getItem, setItem } from "./db";
import { authHeaders, defaultHeaders } from "./headers";
import "dotenv/config";
import getFromIPFS from "./ipfs";

const Pino = require("pino");

const logger = Pino();

const getKey = (chainId: SupportedChainId, workspaceId: string) => `${chainId}.${workspaceId}`;

const getCategoryFromWorkspace = async (
  chainId: SupportedChainId,
  workspaceId: string,
): Promise<number> => {
  if (process.env.DISCOURSE_TEST === "true") return 6;
  const key = getKey(chainId, workspaceId);
  const value = await getItem(key);
  return value;
};

const getStringField = (
  fields: GetGrantApplicationsQuery["grantApplications"][number]["fields"],
  fieldName: string,
) => fields?.find(({ id }) => id.split(".")[1] === fieldName)?.values[0]?.value
  ?? "";

const getProjectDetails = async (projectDetails: string) => {
  if (projectDetails.startsWith("Qm")) {
    const raw = await getFromIPFS(projectDetails);
    return draftToMarkdown(JSON.parse(raw));
  }
  return projectDetails;
};

const getRawFromApplication = async (
  application: GetGrantApplicationsQuery["grantApplications"][number],
): Promise<string> => {
  const details = await getProjectDetails(
    getStringField(application.fields, "projectDetails"),
  );
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
    + `## Proposal ask\n${getStringField(application.fields, "fundingAsk")}\n\n`
    + `## Justification\n${getStringField(
      application.fields,
      "fundingBreakdown",
    )}\n\n`
    + `## Metrics for success\n${application.milestones.map(
      (
        milestone: GetGrantApplicationsQuery["grantApplications"][number]["milestones"][number],
      ) => `${milestone.title} - ${milestone.amount}`,
    )}\n\n`
    + `## External links\n${getStringField(application.fields, "customFields")}`;
  return raw;
};

async function createPost(
  chainId: SupportedChainId,
  application: GetGrantApplicationsQuery["grantApplications"][number],
  workspaceId: string,
) {
  const raw = JSON.stringify({
    category: await getCategoryFromWorkspace(chainId, workspaceId),
    title: getStringField(application.fields, "projectName"),
    raw: await getRawFromApplication(application),
  });

  const requestOptions = {
    method: "POST",
    headers: authHeaders,
    body: raw,
  };

  const response = await fetch(
    `${process.env.DISCOURSE_API_URL}/posts.json`,
    requestOptions,
  );
  logger.info(response.status, "Create post status");

  const json = await response.json();
  logger.info(json, "Create post json");

  if (response.status === 200) {
    await setItem(`${chainId}.${application.id}`, json.post.id);
  }
}

async function editPost(
  chainId: SupportedChainId,
  application: GetGrantApplicationsQuery["grantApplications"][number],
  workspaceId: string,
) {
  const key = `${chainId}.${application.id}`;
  const postId = await getItem(key);
  if (postId === -1) return;

  const raw = JSON.stringify({
    title: getStringField(application.fields, "projectName"),
    raw: await getRawFromApplication(application),
    edit_reason: "Application Resubmission",
  });

  const requestOptions = {
    method: "PUT",
    headers: authHeaders,
    body: raw,
  };

  const response = await fetch(
    `${process.env.DISCOURSE_API_URL}/posts/${postId}.json`,
    requestOptions,
  );
  logger.info(response.status, "Edit post status");

  const json = await response.json();
  logger.info(json, "Edit post json");
}

async function addReplyToPost(
  chainId: SupportedChainId,
  applicationId: string,
  reply: string,
) {
  const key = `${chainId}.${applicationId}`;
  const postId = await getItem(key);

  const raw = JSON.stringify({
    parent_post_id: postId,
    raw: reply,
  });

  const requestOptions = {
    method: "POST",
    headers: authHeaders,
    body: raw,
  };

  const response = await fetch(
    `${process.env.DISCOURSE_API_URL}/posts.json`,
    requestOptions,
  );
  logger.info(response.status, "Reply to post status");

  const json = await response.json();
  logger.info(json, "Reply to post json");
}

async function createCategory(chainId: SupportedChainId, workspace: Workspace) {
  const key = getKey(chainId, workspace.id);

  // TODO: Create a new category under funding-proposals
}

export {
  createPost, editPost, addReplyToPost, createCategory,
};
