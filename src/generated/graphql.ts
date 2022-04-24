import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
};

/** the milestone of a grant application */
export type ApplicationMilestone = {
  __typename?: 'ApplicationMilestone';
  /** amount expected by applicant */
  amount: Scalars['BigInt'];
  /** amount paid by DAO */
  amountPaid: Scalars['BigInt'];
  /** Feedback from the grant DAO manager/applicant */
  feedbackDao?: Maybe<Scalars['String']>;
  /** Feedback from the developer */
  feedbackDev?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  state: MilestoneState;
  title: Scalars['String'];
  /** in seconds since epoch */
  updatedAtS?: Maybe<Scalars['Int']>;
};

export type ApplicationMilestone_Filter = {
  amount?: InputMaybe<Scalars['BigInt']>;
  amountPaid?: InputMaybe<Scalars['BigInt']>;
  amountPaid_gt?: InputMaybe<Scalars['BigInt']>;
  amountPaid_gte?: InputMaybe<Scalars['BigInt']>;
  amountPaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaid_lt?: InputMaybe<Scalars['BigInt']>;
  amountPaid_lte?: InputMaybe<Scalars['BigInt']>;
  amountPaid_not?: InputMaybe<Scalars['BigInt']>;
  amountPaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feedbackDao?: InputMaybe<Scalars['String']>;
  feedbackDao_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_gt?: InputMaybe<Scalars['String']>;
  feedbackDao_gte?: InputMaybe<Scalars['String']>;
  feedbackDao_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_lt?: InputMaybe<Scalars['String']>;
  feedbackDao_lte?: InputMaybe<Scalars['String']>;
  feedbackDao_not?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev?: InputMaybe<Scalars['String']>;
  feedbackDev_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_gt?: InputMaybe<Scalars['String']>;
  feedbackDev_gte?: InputMaybe<Scalars['String']>;
  feedbackDev_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_lt?: InputMaybe<Scalars['String']>;
  feedbackDev_lte?: InputMaybe<Scalars['String']>;
  feedbackDev_not?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<MilestoneState>;
  state_in?: InputMaybe<Array<MilestoneState>>;
  state_not?: InputMaybe<MilestoneState>;
  state_not_in?: InputMaybe<Array<MilestoneState>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum ApplicationMilestone_OrderBy {
  Amount = 'amount',
  AmountPaid = 'amountPaid',
  FeedbackDao = 'feedbackDao',
  FeedbackDev = 'feedbackDev',
  Id = 'id',
  State = 'state',
  Title = 'title',
  UpdatedAtS = 'updatedAtS'
}

export enum ApplicationState {
  Approved = 'approved',
  Completed = 'completed',
  Rejected = 'rejected',
  Resubmit = 'resubmit',
  Submitted = 'submitted'
}

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type FundsTransfer = {
  __typename?: 'FundsTransfer';
  /** How much of the funds were allocated */
  amount: Scalars['BigInt'];
  /** Application for which the funds were released */
  application?: Maybe<GrantApplication>;
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Which grant were the funds transferred to/from */
  grant: Grant;
  id: Scalars['ID'];
  /** Milestone for which the funds were released */
  milestone?: Maybe<ApplicationMilestone>;
  /** Address of who released the funds */
  sender: Scalars['Bytes'];
  /** The address to which funds were sent */
  to: Scalars['Bytes'];
  /** What the type of funds transfer is */
  type: FundsTransferType;
};

export enum FundsTransferType {
  FundsDeposited = 'funds_deposited',
  FundsDisbursed = 'funds_disbursed',
  FundsWithdrawn = 'funds_withdrawn'
}

export type FundsTransfer_Filter = {
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  application?: InputMaybe<Scalars['String']>;
  application_contains?: InputMaybe<Scalars['String']>;
  application_contains_nocase?: InputMaybe<Scalars['String']>;
  application_ends_with?: InputMaybe<Scalars['String']>;
  application_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_gt?: InputMaybe<Scalars['String']>;
  application_gte?: InputMaybe<Scalars['String']>;
  application_in?: InputMaybe<Array<Scalars['String']>>;
  application_lt?: InputMaybe<Scalars['String']>;
  application_lte?: InputMaybe<Scalars['String']>;
  application_not?: InputMaybe<Scalars['String']>;
  application_not_contains?: InputMaybe<Scalars['String']>;
  application_not_contains_nocase?: InputMaybe<Scalars['String']>;
  application_not_ends_with?: InputMaybe<Scalars['String']>;
  application_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_not_in?: InputMaybe<Array<Scalars['String']>>;
  application_not_starts_with?: InputMaybe<Scalars['String']>;
  application_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  application_starts_with?: InputMaybe<Scalars['String']>;
  application_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  grant?: InputMaybe<Scalars['String']>;
  grant_contains?: InputMaybe<Scalars['String']>;
  grant_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_ends_with?: InputMaybe<Scalars['String']>;
  grant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_gt?: InputMaybe<Scalars['String']>;
  grant_gte?: InputMaybe<Scalars['String']>;
  grant_in?: InputMaybe<Array<Scalars['String']>>;
  grant_lt?: InputMaybe<Scalars['String']>;
  grant_lte?: InputMaybe<Scalars['String']>;
  grant_not?: InputMaybe<Scalars['String']>;
  grant_not_contains?: InputMaybe<Scalars['String']>;
  grant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_not_ends_with?: InputMaybe<Scalars['String']>;
  grant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_not_in?: InputMaybe<Array<Scalars['String']>>;
  grant_not_starts_with?: InputMaybe<Scalars['String']>;
  grant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  grant_starts_with?: InputMaybe<Scalars['String']>;
  grant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  milestone?: InputMaybe<Scalars['String']>;
  milestone_contains?: InputMaybe<Scalars['String']>;
  milestone_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_ends_with?: InputMaybe<Scalars['String']>;
  milestone_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_gt?: InputMaybe<Scalars['String']>;
  milestone_gte?: InputMaybe<Scalars['String']>;
  milestone_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_lt?: InputMaybe<Scalars['String']>;
  milestone_lte?: InputMaybe<Scalars['String']>;
  milestone_not?: InputMaybe<Scalars['String']>;
  milestone_not_contains?: InputMaybe<Scalars['String']>;
  milestone_not_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_not_starts_with?: InputMaybe<Scalars['String']>;
  milestone_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_starts_with?: InputMaybe<Scalars['String']>;
  milestone_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<FundsTransferType>;
  type_in?: InputMaybe<Array<FundsTransferType>>;
  type_not?: InputMaybe<FundsTransferType>;
  type_not_in?: InputMaybe<Array<FundsTransferType>>;
};

export enum FundsTransfer_OrderBy {
  Amount = 'amount',
  Application = 'application',
  CreatedAtS = 'createdAtS',
  Grant = 'grant',
  Id = 'id',
  Milestone = 'milestone',
  Sender = 'sender',
  To = 'to',
  Type = 'type'
}

export type Grant = {
  __typename?: 'Grant';
  /** Whether the grant is currently accepting applications or not */
  acceptingApplications: Scalars['Boolean'];
  /** List of applications for the grant */
  applications: Array<GrantApplication>;
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Address of who created the grant */
  creatorId: Scalars['Bytes'];
  /** ISO formatted date string */
  deadline?: Maybe<Scalars['String']>;
  /** Expectations & other details of the grant */
  details: Scalars['String'];
  /** Expected fields from the applicants of the grant */
  fields: Array<GrantField>;
  /** Funding currently present in the grant */
  funding: Scalars['BigInt'];
  id: Scalars['ID'];
  /** People who will manage the grant. They can see the PII submitted in an application */
  managers: Array<GrantManager>;
  metadataHash: Scalars['String'];
  /** Number of applications in the grant */
  numberOfApplications: Scalars['Int'];
  /** Proposed reward for the grant */
  reward: Reward;
  /** Rubric for evaulating the grant */
  rubric?: Maybe<Rubric>;
  /** Short description of the grant */
  summary: Scalars['String'];
  title: Scalars['String'];
  /** in seconds since epoch */
  updatedAtS?: Maybe<Scalars['Int']>;
  /** Workspace which created the grant */
  workspace: Workspace;
};


export type GrantApplicationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantApplication_Filter>;
};


export type GrantFieldsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantField_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantField_Filter>;
};


export type GrantManagersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantManager_Filter>;
};

export type GrantApplication = {
  __typename?: 'GrantApplication';
  /** Address of the applicant */
  applicantId: Scalars['Bytes'];
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Feedback from the grant DAO manager/applicant */
  feedbackDao?: Maybe<Scalars['String']>;
  /** Feedback from the developer */
  feedbackDev?: Maybe<Scalars['String']>;
  /** Answers to the fields requested in the grant */
  fields: Array<GrantFieldAnswer>;
  /** The grant for which the application is for */
  grant: Grant;
  id: Scalars['ID'];
  /** Milestones of the application */
  milestones: Array<ApplicationMilestone>;
  /** PII Data */
  pii: Array<PiiAnswer>;
  /** People who will review the grant applications */
  reviewers: Array<WorkspaceMember>;
  /** Reviews of the application */
  reviews: Array<Review>;
  /** Current state of the application */
  state: ApplicationState;
  /** in seconds since epoch */
  updatedAtS: Scalars['Int'];
};


export type GrantApplicationFieldsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


export type GrantApplicationMilestonesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};


export type GrantApplicationPiiArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PiiAnswer_Filter>;
};


export type GrantApplicationReviewersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


export type GrantApplicationReviewsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Review_Filter>;
};

/** A revision after an update */
export type GrantApplicationRevision = {
  __typename?: 'GrantApplicationRevision';
  /** Who caused the update to create the revision */
  actorId: Scalars['Bytes'];
  application: GrantApplication;
  /** in seconds since epoch, when was this revision created */
  createdAtS: Scalars['Int'];
  /** Feedback from the grant DAO manager/applicant */
  feedbackDao?: Maybe<Scalars['String']>;
  /** Feedback from the developer */
  feedbackDev?: Maybe<Scalars['String']>;
  /** Answers to the fields requested in the grant */
  fields: Array<GrantFieldAnswer>;
  id: Scalars['ID'];
  /** Milestones of the application */
  milestones: Array<ApplicationMilestone>;
  /** The state that was set in the revision */
  state: ApplicationState;
};


/** A revision after an update */
export type GrantApplicationRevisionFieldsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


/** A revision after an update */
export type GrantApplicationRevisionMilestonesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};

export type GrantApplicationRevision_Filter = {
  actorId?: InputMaybe<Scalars['Bytes']>;
  actorId_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actorId_not?: InputMaybe<Scalars['Bytes']>;
  actorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  application?: InputMaybe<Scalars['String']>;
  application_contains?: InputMaybe<Scalars['String']>;
  application_contains_nocase?: InputMaybe<Scalars['String']>;
  application_ends_with?: InputMaybe<Scalars['String']>;
  application_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_gt?: InputMaybe<Scalars['String']>;
  application_gte?: InputMaybe<Scalars['String']>;
  application_in?: InputMaybe<Array<Scalars['String']>>;
  application_lt?: InputMaybe<Scalars['String']>;
  application_lte?: InputMaybe<Scalars['String']>;
  application_not?: InputMaybe<Scalars['String']>;
  application_not_contains?: InputMaybe<Scalars['String']>;
  application_not_contains_nocase?: InputMaybe<Scalars['String']>;
  application_not_ends_with?: InputMaybe<Scalars['String']>;
  application_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_not_in?: InputMaybe<Array<Scalars['String']>>;
  application_not_starts_with?: InputMaybe<Scalars['String']>;
  application_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  application_starts_with?: InputMaybe<Scalars['String']>;
  application_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  feedbackDao?: InputMaybe<Scalars['String']>;
  feedbackDao_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_gt?: InputMaybe<Scalars['String']>;
  feedbackDao_gte?: InputMaybe<Scalars['String']>;
  feedbackDao_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_lt?: InputMaybe<Scalars['String']>;
  feedbackDao_lte?: InputMaybe<Scalars['String']>;
  feedbackDao_not?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev?: InputMaybe<Scalars['String']>;
  feedbackDev_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_gt?: InputMaybe<Scalars['String']>;
  feedbackDev_gte?: InputMaybe<Scalars['String']>;
  feedbackDev_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_lt?: InputMaybe<Scalars['String']>;
  feedbackDev_lte?: InputMaybe<Scalars['String']>;
  feedbackDev_not?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  milestones?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_not?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<ApplicationState>;
  state_in?: InputMaybe<Array<ApplicationState>>;
  state_not?: InputMaybe<ApplicationState>;
  state_not_in?: InputMaybe<Array<ApplicationState>>;
};

export enum GrantApplicationRevision_OrderBy {
  ActorId = 'actorId',
  Application = 'application',
  CreatedAtS = 'createdAtS',
  FeedbackDao = 'feedbackDao',
  FeedbackDev = 'feedbackDev',
  Fields = 'fields',
  Id = 'id',
  Milestones = 'milestones',
  State = 'state'
}

export type GrantApplication_Filter = {
  applicantId?: InputMaybe<Scalars['Bytes']>;
  applicantId_contains?: InputMaybe<Scalars['Bytes']>;
  applicantId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  applicantId_not?: InputMaybe<Scalars['Bytes']>;
  applicantId_not_contains?: InputMaybe<Scalars['Bytes']>;
  applicantId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  feedbackDao?: InputMaybe<Scalars['String']>;
  feedbackDao_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_gt?: InputMaybe<Scalars['String']>;
  feedbackDao_gte?: InputMaybe<Scalars['String']>;
  feedbackDao_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_lt?: InputMaybe<Scalars['String']>;
  feedbackDao_lte?: InputMaybe<Scalars['String']>;
  feedbackDao_not?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev?: InputMaybe<Scalars['String']>;
  feedbackDev_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_gt?: InputMaybe<Scalars['String']>;
  feedbackDev_gte?: InputMaybe<Scalars['String']>;
  feedbackDev_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_lt?: InputMaybe<Scalars['String']>;
  feedbackDev_lte?: InputMaybe<Scalars['String']>;
  feedbackDev_not?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  grant?: InputMaybe<Scalars['String']>;
  grant_contains?: InputMaybe<Scalars['String']>;
  grant_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_ends_with?: InputMaybe<Scalars['String']>;
  grant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_gt?: InputMaybe<Scalars['String']>;
  grant_gte?: InputMaybe<Scalars['String']>;
  grant_in?: InputMaybe<Array<Scalars['String']>>;
  grant_lt?: InputMaybe<Scalars['String']>;
  grant_lte?: InputMaybe<Scalars['String']>;
  grant_not?: InputMaybe<Scalars['String']>;
  grant_not_contains?: InputMaybe<Scalars['String']>;
  grant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_not_ends_with?: InputMaybe<Scalars['String']>;
  grant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_not_in?: InputMaybe<Array<Scalars['String']>>;
  grant_not_starts_with?: InputMaybe<Scalars['String']>;
  grant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  grant_starts_with?: InputMaybe<Scalars['String']>;
  grant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  milestones?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_not?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pii?: InputMaybe<Array<Scalars['String']>>;
  pii_contains?: InputMaybe<Array<Scalars['String']>>;
  pii_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pii_not?: InputMaybe<Array<Scalars['String']>>;
  pii_not_contains?: InputMaybe<Array<Scalars['String']>>;
  pii_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reviewers?: InputMaybe<Array<Scalars['String']>>;
  reviewers_contains?: InputMaybe<Array<Scalars['String']>>;
  reviewers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<ApplicationState>;
  state_in?: InputMaybe<Array<ApplicationState>>;
  state_not?: InputMaybe<ApplicationState>;
  state_not_in?: InputMaybe<Array<ApplicationState>>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum GrantApplication_OrderBy {
  ApplicantId = 'applicantId',
  CreatedAtS = 'createdAtS',
  FeedbackDao = 'feedbackDao',
  FeedbackDev = 'feedbackDev',
  Fields = 'fields',
  Grant = 'grant',
  Id = 'id',
  Milestones = 'milestones',
  Pii = 'pii',
  Reviewers = 'reviewers',
  Reviews = 'reviews',
  State = 'state',
  UpdatedAtS = 'updatedAtS'
}

export type GrantField = {
  __typename?: 'GrantField';
  id: Scalars['ID'];
  inputType: GrantFieldInputType;
  isPii: Scalars['Boolean'];
  possibleValues?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type GrantFieldAnswer = {
  __typename?: 'GrantFieldAnswer';
  field: GrantField;
  id: Scalars['ID'];
  values: Array<GrantFieldAnswerItem>;
};


export type GrantFieldAnswerValuesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswerItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantFieldAnswerItem_Filter>;
};

export type GrantFieldAnswerItem = {
  __typename?: 'GrantFieldAnswerItem';
  answer: GrantFieldAnswer;
  id: Scalars['ID'];
  value: Scalars['String'];
  walletId?: Maybe<Scalars['Bytes']>;
};

export type GrantFieldAnswerItem_Filter = {
  answer?: InputMaybe<Scalars['String']>;
  answer_contains?: InputMaybe<Scalars['String']>;
  answer_contains_nocase?: InputMaybe<Scalars['String']>;
  answer_ends_with?: InputMaybe<Scalars['String']>;
  answer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  answer_gt?: InputMaybe<Scalars['String']>;
  answer_gte?: InputMaybe<Scalars['String']>;
  answer_in?: InputMaybe<Array<Scalars['String']>>;
  answer_lt?: InputMaybe<Scalars['String']>;
  answer_lte?: InputMaybe<Scalars['String']>;
  answer_not?: InputMaybe<Scalars['String']>;
  answer_not_contains?: InputMaybe<Scalars['String']>;
  answer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  answer_not_ends_with?: InputMaybe<Scalars['String']>;
  answer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  answer_not_in?: InputMaybe<Array<Scalars['String']>>;
  answer_not_starts_with?: InputMaybe<Scalars['String']>;
  answer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  answer_starts_with?: InputMaybe<Scalars['String']>;
  answer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
  walletId?: InputMaybe<Scalars['Bytes']>;
  walletId_contains?: InputMaybe<Scalars['Bytes']>;
  walletId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  walletId_not?: InputMaybe<Scalars['Bytes']>;
  walletId_not_contains?: InputMaybe<Scalars['Bytes']>;
  walletId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GrantFieldAnswerItem_OrderBy {
  Answer = 'answer',
  Id = 'id',
  Value = 'value',
  WalletId = 'walletId'
}

export type GrantFieldAnswer_Filter = {
  field?: InputMaybe<Scalars['String']>;
  field_contains?: InputMaybe<Scalars['String']>;
  field_contains_nocase?: InputMaybe<Scalars['String']>;
  field_ends_with?: InputMaybe<Scalars['String']>;
  field_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_gt?: InputMaybe<Scalars['String']>;
  field_gte?: InputMaybe<Scalars['String']>;
  field_in?: InputMaybe<Array<Scalars['String']>>;
  field_lt?: InputMaybe<Scalars['String']>;
  field_lte?: InputMaybe<Scalars['String']>;
  field_not?: InputMaybe<Scalars['String']>;
  field_not_contains?: InputMaybe<Scalars['String']>;
  field_not_contains_nocase?: InputMaybe<Scalars['String']>;
  field_not_ends_with?: InputMaybe<Scalars['String']>;
  field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_not_in?: InputMaybe<Array<Scalars['String']>>;
  field_not_starts_with?: InputMaybe<Scalars['String']>;
  field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  field_starts_with?: InputMaybe<Scalars['String']>;
  field_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum GrantFieldAnswer_OrderBy {
  Field = 'field',
  Id = 'id',
  Values = 'values'
}

export enum GrantFieldInputType {
  Array = 'array',
  LongForm = 'long_form',
  Numeric = 'numeric',
  ShortForm = 'short_form'
}

export type GrantField_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  inputType?: InputMaybe<GrantFieldInputType>;
  inputType_in?: InputMaybe<Array<GrantFieldInputType>>;
  inputType_not?: InputMaybe<GrantFieldInputType>;
  inputType_not_in?: InputMaybe<Array<GrantFieldInputType>>;
  isPii?: InputMaybe<Scalars['Boolean']>;
  isPii_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPii_not?: InputMaybe<Scalars['Boolean']>;
  isPii_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  possibleValues?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_contains?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_not?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_not_contains?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GrantField_OrderBy {
  Id = 'id',
  InputType = 'inputType',
  IsPii = 'isPii',
  PossibleValues = 'possibleValues',
  Title = 'title'
}

export type GrantManager = {
  __typename?: 'GrantManager';
  /** Grant for which this entity is the manager */
  grant: Grant;
  /** Globally unique ID of the member */
  id: Scalars['ID'];
  /** Workspace member */
  member?: Maybe<WorkspaceMember>;
};

export type GrantManager_Filter = {
  grant?: InputMaybe<Scalars['String']>;
  grant_contains?: InputMaybe<Scalars['String']>;
  grant_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_ends_with?: InputMaybe<Scalars['String']>;
  grant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_gt?: InputMaybe<Scalars['String']>;
  grant_gte?: InputMaybe<Scalars['String']>;
  grant_in?: InputMaybe<Array<Scalars['String']>>;
  grant_lt?: InputMaybe<Scalars['String']>;
  grant_lte?: InputMaybe<Scalars['String']>;
  grant_not?: InputMaybe<Scalars['String']>;
  grant_not_contains?: InputMaybe<Scalars['String']>;
  grant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_not_ends_with?: InputMaybe<Scalars['String']>;
  grant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_not_in?: InputMaybe<Array<Scalars['String']>>;
  grant_not_starts_with?: InputMaybe<Scalars['String']>;
  grant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  grant_starts_with?: InputMaybe<Scalars['String']>;
  grant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  member?: InputMaybe<Scalars['String']>;
  member_contains?: InputMaybe<Scalars['String']>;
  member_contains_nocase?: InputMaybe<Scalars['String']>;
  member_ends_with?: InputMaybe<Scalars['String']>;
  member_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_gt?: InputMaybe<Scalars['String']>;
  member_gte?: InputMaybe<Scalars['String']>;
  member_in?: InputMaybe<Array<Scalars['String']>>;
  member_lt?: InputMaybe<Scalars['String']>;
  member_lte?: InputMaybe<Scalars['String']>;
  member_not?: InputMaybe<Scalars['String']>;
  member_not_contains?: InputMaybe<Scalars['String']>;
  member_not_contains_nocase?: InputMaybe<Scalars['String']>;
  member_not_ends_with?: InputMaybe<Scalars['String']>;
  member_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_not_in?: InputMaybe<Array<Scalars['String']>>;
  member_not_starts_with?: InputMaybe<Scalars['String']>;
  member_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  member_starts_with?: InputMaybe<Scalars['String']>;
  member_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GrantManager_OrderBy {
  Grant = 'grant',
  Id = 'id',
  Member = 'member'
}

export type Grant_Filter = {
  acceptingApplications?: InputMaybe<Scalars['Boolean']>;
  acceptingApplications_in?: InputMaybe<Array<Scalars['Boolean']>>;
  acceptingApplications_not?: InputMaybe<Scalars['Boolean']>;
  acceptingApplications_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creatorId?: InputMaybe<Scalars['Bytes']>;
  creatorId_contains?: InputMaybe<Scalars['Bytes']>;
  creatorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creatorId_not?: InputMaybe<Scalars['Bytes']>;
  creatorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  creatorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  deadline?: InputMaybe<Scalars['String']>;
  deadline_contains?: InputMaybe<Scalars['String']>;
  deadline_contains_nocase?: InputMaybe<Scalars['String']>;
  deadline_ends_with?: InputMaybe<Scalars['String']>;
  deadline_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deadline_gt?: InputMaybe<Scalars['String']>;
  deadline_gte?: InputMaybe<Scalars['String']>;
  deadline_in?: InputMaybe<Array<Scalars['String']>>;
  deadline_lt?: InputMaybe<Scalars['String']>;
  deadline_lte?: InputMaybe<Scalars['String']>;
  deadline_not?: InputMaybe<Scalars['String']>;
  deadline_not_contains?: InputMaybe<Scalars['String']>;
  deadline_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deadline_not_ends_with?: InputMaybe<Scalars['String']>;
  deadline_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deadline_not_in?: InputMaybe<Array<Scalars['String']>>;
  deadline_not_starts_with?: InputMaybe<Scalars['String']>;
  deadline_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deadline_starts_with?: InputMaybe<Scalars['String']>;
  deadline_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  details_contains?: InputMaybe<Scalars['String']>;
  details_contains_nocase?: InputMaybe<Scalars['String']>;
  details_ends_with?: InputMaybe<Scalars['String']>;
  details_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_gt?: InputMaybe<Scalars['String']>;
  details_gte?: InputMaybe<Scalars['String']>;
  details_in?: InputMaybe<Array<Scalars['String']>>;
  details_lt?: InputMaybe<Scalars['String']>;
  details_lte?: InputMaybe<Scalars['String']>;
  details_not?: InputMaybe<Scalars['String']>;
  details_not_contains?: InputMaybe<Scalars['String']>;
  details_not_contains_nocase?: InputMaybe<Scalars['String']>;
  details_not_ends_with?: InputMaybe<Scalars['String']>;
  details_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_not_in?: InputMaybe<Array<Scalars['String']>>;
  details_not_starts_with?: InputMaybe<Scalars['String']>;
  details_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details_starts_with?: InputMaybe<Scalars['String']>;
  details_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  funding?: InputMaybe<Scalars['BigInt']>;
  funding_gt?: InputMaybe<Scalars['BigInt']>;
  funding_gte?: InputMaybe<Scalars['BigInt']>;
  funding_in?: InputMaybe<Array<Scalars['BigInt']>>;
  funding_lt?: InputMaybe<Scalars['BigInt']>;
  funding_lte?: InputMaybe<Scalars['BigInt']>;
  funding_not?: InputMaybe<Scalars['BigInt']>;
  funding_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  managers?: InputMaybe<Array<Scalars['String']>>;
  managers_contains?: InputMaybe<Array<Scalars['String']>>;
  managers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  managers_not?: InputMaybe<Array<Scalars['String']>>;
  managers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  managers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  metadataHash?: InputMaybe<Scalars['String']>;
  metadataHash_contains?: InputMaybe<Scalars['String']>;
  metadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_gt?: InputMaybe<Scalars['String']>;
  metadataHash_gte?: InputMaybe<Scalars['String']>;
  metadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_lt?: InputMaybe<Scalars['String']>;
  metadataHash_lte?: InputMaybe<Scalars['String']>;
  metadataHash_not?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfApplications?: InputMaybe<Scalars['Int']>;
  numberOfApplications_gt?: InputMaybe<Scalars['Int']>;
  numberOfApplications_gte?: InputMaybe<Scalars['Int']>;
  numberOfApplications_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfApplications_lt?: InputMaybe<Scalars['Int']>;
  numberOfApplications_lte?: InputMaybe<Scalars['Int']>;
  numberOfApplications_not?: InputMaybe<Scalars['Int']>;
  numberOfApplications_not_in?: InputMaybe<Array<Scalars['Int']>>;
  reward?: InputMaybe<Scalars['String']>;
  reward_contains?: InputMaybe<Scalars['String']>;
  reward_contains_nocase?: InputMaybe<Scalars['String']>;
  reward_ends_with?: InputMaybe<Scalars['String']>;
  reward_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reward_gt?: InputMaybe<Scalars['String']>;
  reward_gte?: InputMaybe<Scalars['String']>;
  reward_in?: InputMaybe<Array<Scalars['String']>>;
  reward_lt?: InputMaybe<Scalars['String']>;
  reward_lte?: InputMaybe<Scalars['String']>;
  reward_not?: InputMaybe<Scalars['String']>;
  reward_not_contains?: InputMaybe<Scalars['String']>;
  reward_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reward_not_ends_with?: InputMaybe<Scalars['String']>;
  reward_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reward_not_in?: InputMaybe<Array<Scalars['String']>>;
  reward_not_starts_with?: InputMaybe<Scalars['String']>;
  reward_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reward_starts_with?: InputMaybe<Scalars['String']>;
  reward_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rubric?: InputMaybe<Scalars['String']>;
  rubric_contains?: InputMaybe<Scalars['String']>;
  rubric_contains_nocase?: InputMaybe<Scalars['String']>;
  rubric_ends_with?: InputMaybe<Scalars['String']>;
  rubric_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rubric_gt?: InputMaybe<Scalars['String']>;
  rubric_gte?: InputMaybe<Scalars['String']>;
  rubric_in?: InputMaybe<Array<Scalars['String']>>;
  rubric_lt?: InputMaybe<Scalars['String']>;
  rubric_lte?: InputMaybe<Scalars['String']>;
  rubric_not?: InputMaybe<Scalars['String']>;
  rubric_not_contains?: InputMaybe<Scalars['String']>;
  rubric_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rubric_not_ends_with?: InputMaybe<Scalars['String']>;
  rubric_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rubric_not_in?: InputMaybe<Array<Scalars['String']>>;
  rubric_not_starts_with?: InputMaybe<Scalars['String']>;
  rubric_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rubric_starts_with?: InputMaybe<Scalars['String']>;
  rubric_starts_with_nocase?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  summary_contains?: InputMaybe<Scalars['String']>;
  summary_contains_nocase?: InputMaybe<Scalars['String']>;
  summary_ends_with?: InputMaybe<Scalars['String']>;
  summary_ends_with_nocase?: InputMaybe<Scalars['String']>;
  summary_gt?: InputMaybe<Scalars['String']>;
  summary_gte?: InputMaybe<Scalars['String']>;
  summary_in?: InputMaybe<Array<Scalars['String']>>;
  summary_lt?: InputMaybe<Scalars['String']>;
  summary_lte?: InputMaybe<Scalars['String']>;
  summary_not?: InputMaybe<Scalars['String']>;
  summary_not_contains?: InputMaybe<Scalars['String']>;
  summary_not_contains_nocase?: InputMaybe<Scalars['String']>;
  summary_not_ends_with?: InputMaybe<Scalars['String']>;
  summary_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  summary_not_in?: InputMaybe<Array<Scalars['String']>>;
  summary_not_starts_with?: InputMaybe<Scalars['String']>;
  summary_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  summary_starts_with?: InputMaybe<Scalars['String']>;
  summary_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_contains?: InputMaybe<Scalars['String']>;
  workspace_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_ends_with?: InputMaybe<Scalars['String']>;
  workspace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_gt?: InputMaybe<Scalars['String']>;
  workspace_gte?: InputMaybe<Scalars['String']>;
  workspace_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_lt?: InputMaybe<Scalars['String']>;
  workspace_lte?: InputMaybe<Scalars['String']>;
  workspace_not?: InputMaybe<Scalars['String']>;
  workspace_not_contains?: InputMaybe<Scalars['String']>;
  workspace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_not_starts_with?: InputMaybe<Scalars['String']>;
  workspace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_starts_with?: InputMaybe<Scalars['String']>;
  workspace_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Grant_OrderBy {
  AcceptingApplications = 'acceptingApplications',
  Applications = 'applications',
  CreatedAtS = 'createdAtS',
  CreatorId = 'creatorId',
  Deadline = 'deadline',
  Details = 'details',
  Fields = 'fields',
  Funding = 'funding',
  Id = 'id',
  Managers = 'managers',
  MetadataHash = 'metadataHash',
  NumberOfApplications = 'numberOfApplications',
  Reward = 'reward',
  Rubric = 'rubric',
  Summary = 'summary',
  Title = 'title',
  UpdatedAtS = 'updatedAtS',
  Workspace = 'workspace'
}

export enum MilestoneState {
  Approved = 'approved',
  Requested = 'requested',
  Submitted = 'submitted'
}

export type Notification = {
  __typename?: 'Notification';
  /** Who caused the notification to be sent */
  actorId?: Maybe<Scalars['Bytes']>;
  /** rich content of the notification */
  content: Scalars['String'];
  /** Descending order of cursor */
  cursor: Scalars['String'];
  /** The ID of the entity being affected */
  entityId: Scalars['String'];
  id: Scalars['ID'];
  /** Who all should recv the notification */
  recipientIds: Array<Scalars['Bytes']>;
  /** title of the notification */
  title: Scalars['String'];
  type: NotificationType;
};

export enum NotificationType {
  ApplicationAccepted = 'application_accepted',
  ApplicationCompleted = 'application_completed',
  ApplicationRejected = 'application_rejected',
  ApplicationResubmitted = 'application_resubmitted',
  ApplicationSubmitted = 'application_submitted',
  FundsDeposited = 'funds_deposited',
  FundsDisbursed = 'funds_disbursed',
  FundsWithdrawn = 'funds_withdrawn',
  MilestoneAccepted = 'milestone_accepted',
  MilestoneRejected = 'milestone_rejected',
  MilestoneRequested = 'milestone_requested'
}

export type Notification_Filter = {
  actorId?: InputMaybe<Scalars['Bytes']>;
  actorId_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actorId_not?: InputMaybe<Scalars['Bytes']>;
  actorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  cursor_contains?: InputMaybe<Scalars['String']>;
  cursor_contains_nocase?: InputMaybe<Scalars['String']>;
  cursor_ends_with?: InputMaybe<Scalars['String']>;
  cursor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cursor_gt?: InputMaybe<Scalars['String']>;
  cursor_gte?: InputMaybe<Scalars['String']>;
  cursor_in?: InputMaybe<Array<Scalars['String']>>;
  cursor_lt?: InputMaybe<Scalars['String']>;
  cursor_lte?: InputMaybe<Scalars['String']>;
  cursor_not?: InputMaybe<Scalars['String']>;
  cursor_not_contains?: InputMaybe<Scalars['String']>;
  cursor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cursor_not_ends_with?: InputMaybe<Scalars['String']>;
  cursor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cursor_not_in?: InputMaybe<Array<Scalars['String']>>;
  cursor_not_starts_with?: InputMaybe<Scalars['String']>;
  cursor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cursor_starts_with?: InputMaybe<Scalars['String']>;
  cursor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityId?: InputMaybe<Scalars['String']>;
  entityId_contains?: InputMaybe<Scalars['String']>;
  entityId_contains_nocase?: InputMaybe<Scalars['String']>;
  entityId_ends_with?: InputMaybe<Scalars['String']>;
  entityId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entityId_gt?: InputMaybe<Scalars['String']>;
  entityId_gte?: InputMaybe<Scalars['String']>;
  entityId_in?: InputMaybe<Array<Scalars['String']>>;
  entityId_lt?: InputMaybe<Scalars['String']>;
  entityId_lte?: InputMaybe<Scalars['String']>;
  entityId_not?: InputMaybe<Scalars['String']>;
  entityId_not_contains?: InputMaybe<Scalars['String']>;
  entityId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  entityId_not_ends_with?: InputMaybe<Scalars['String']>;
  entityId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entityId_not_in?: InputMaybe<Array<Scalars['String']>>;
  entityId_not_starts_with?: InputMaybe<Scalars['String']>;
  entityId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityId_starts_with?: InputMaybe<Scalars['String']>;
  entityId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  recipientIds?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_not?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<NotificationType>>;
  type_not?: InputMaybe<NotificationType>;
  type_not_in?: InputMaybe<Array<NotificationType>>;
};

export enum Notification_OrderBy {
  ActorId = 'actorId',
  Content = 'content',
  Cursor = 'cursor',
  EntityId = 'entityId',
  Id = 'id',
  RecipientIds = 'recipientIds',
  Title = 'title',
  Type = 'type'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PiiAnswer = {
  __typename?: 'PIIAnswer';
  /** The encrypted data */
  data: Scalars['String'];
  id: Scalars['ID'];
  /** Grant manager who can access this encrypted info */
  manager?: Maybe<GrantManager>;
};

export type PiiAnswer_Filter = {
  data?: InputMaybe<Scalars['String']>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  manager?: InputMaybe<Scalars['String']>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PiiAnswer_OrderBy {
  Data = 'data',
  Id = 'id',
  Manager = 'manager'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  applicationMilestone?: Maybe<ApplicationMilestone>;
  applicationMilestones: Array<ApplicationMilestone>;
  fundsTransfer?: Maybe<FundsTransfer>;
  fundsTransfers: Array<FundsTransfer>;
  grant?: Maybe<Grant>;
  grantApplication?: Maybe<GrantApplication>;
  grantApplicationRevision?: Maybe<GrantApplicationRevision>;
  grantApplicationRevisions: Array<GrantApplicationRevision>;
  grantApplications: Array<GrantApplication>;
  grantField?: Maybe<GrantField>;
  grantFieldAnswer?: Maybe<GrantFieldAnswer>;
  grantFieldAnswerItem?: Maybe<GrantFieldAnswerItem>;
  grantFieldAnswerItems: Array<GrantFieldAnswerItem>;
  grantFieldAnswers: Array<GrantFieldAnswer>;
  grantFields: Array<GrantField>;
  grantManager?: Maybe<GrantManager>;
  grantManagers: Array<GrantManager>;
  grants: Array<Grant>;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  piianswer?: Maybe<PiiAnswer>;
  piianswers: Array<PiiAnswer>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  rubric?: Maybe<Rubric>;
  rubricItem?: Maybe<RubricItem>;
  rubricItems: Array<RubricItem>;
  rubrics: Array<Rubric>;
  social?: Maybe<Social>;
  socials: Array<Social>;
  workspace?: Maybe<Workspace>;
  workspaceMember?: Maybe<WorkspaceMember>;
  workspaceMembers: Array<WorkspaceMember>;
  workspaces: Array<Workspace>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryApplicationMilestoneArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApplicationMilestonesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};


export type QueryFundsTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFundsTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundsTransfer_Filter>;
};


export type QueryGrantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationRevision_Filter>;
};


export type QueryGrantApplicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplication_Filter>;
};


export type QueryGrantFieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantFieldAnswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantFieldAnswerItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantFieldAnswerItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswerItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswerItem_Filter>;
};


export type QueryGrantFieldAnswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


export type QueryGrantFieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantField_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantField_Filter>;
};


export type QueryGrantManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantManager_Filter>;
};


export type QueryGrantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Grant_Filter>;
};


export type QueryNotificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNotificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Notification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Notification_Filter>;
};


export type QueryPiianswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPiianswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PiiAnswer_Filter>;
};


export type QueryReviewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReviewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Review_Filter>;
};


export type QueryRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type QueryRubricArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRubricItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRubricItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RubricItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RubricItem_Filter>;
};


export type QueryRubricsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rubric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rubric_Filter>;
};


export type QuerySocialArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySocialsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Social_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Social_Filter>;
};


export type QueryWorkspaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkspaceMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkspaceMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


export type QueryWorkspacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Workspace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workspace_Filter>;
};

export type Review = {
  __typename?: 'Review';
  /** Application for which the review is */
  application: GrantApplication;
  /** created at S */
  createdAtS: Scalars['Int'];
  /** The encrypted data of the review */
  data: Array<PiiAnswer>;
  id: Scalars['ID'];
  /** IPFS Hash to the publicly accessible review */
  publicReviewDataHash?: Maybe<Scalars['String']>;
  /** Workspace member that reviewed the app */
  reviewer?: Maybe<WorkspaceMember>;
  /** ID of the reviewer */
  reviewerId: Scalars['String'];
};


export type ReviewDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PiiAnswer_Filter>;
};

export type Review_Filter = {
  application?: InputMaybe<Scalars['String']>;
  application_contains?: InputMaybe<Scalars['String']>;
  application_contains_nocase?: InputMaybe<Scalars['String']>;
  application_ends_with?: InputMaybe<Scalars['String']>;
  application_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_gt?: InputMaybe<Scalars['String']>;
  application_gte?: InputMaybe<Scalars['String']>;
  application_in?: InputMaybe<Array<Scalars['String']>>;
  application_lt?: InputMaybe<Scalars['String']>;
  application_lte?: InputMaybe<Scalars['String']>;
  application_not?: InputMaybe<Scalars['String']>;
  application_not_contains?: InputMaybe<Scalars['String']>;
  application_not_contains_nocase?: InputMaybe<Scalars['String']>;
  application_not_ends_with?: InputMaybe<Scalars['String']>;
  application_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_not_in?: InputMaybe<Array<Scalars['String']>>;
  application_not_starts_with?: InputMaybe<Scalars['String']>;
  application_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  application_starts_with?: InputMaybe<Scalars['String']>;
  application_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  data?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Array<Scalars['String']>>;
  data_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  data_not?: InputMaybe<Array<Scalars['String']>>;
  data_not_contains?: InputMaybe<Array<Scalars['String']>>;
  data_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  publicReviewDataHash?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_contains?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_ends_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_gt?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_gte?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_in?: InputMaybe<Array<Scalars['String']>>;
  publicReviewDataHash_lt?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_lte?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_contains?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  publicReviewDataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_starts_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  reviewerId?: InputMaybe<Scalars['String']>;
  reviewerId_contains?: InputMaybe<Scalars['String']>;
  reviewerId_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_ends_with?: InputMaybe<Scalars['String']>;
  reviewerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_gt?: InputMaybe<Scalars['String']>;
  reviewerId_gte?: InputMaybe<Scalars['String']>;
  reviewerId_in?: InputMaybe<Array<Scalars['String']>>;
  reviewerId_lt?: InputMaybe<Scalars['String']>;
  reviewerId_lte?: InputMaybe<Scalars['String']>;
  reviewerId_not?: InputMaybe<Scalars['String']>;
  reviewerId_not_contains?: InputMaybe<Scalars['String']>;
  reviewerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_not_ends_with?: InputMaybe<Scalars['String']>;
  reviewerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  reviewerId_not_starts_with?: InputMaybe<Scalars['String']>;
  reviewerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_starts_with?: InputMaybe<Scalars['String']>;
  reviewerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_contains?: InputMaybe<Scalars['String']>;
  reviewer_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewer_ends_with?: InputMaybe<Scalars['String']>;
  reviewer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_gt?: InputMaybe<Scalars['String']>;
  reviewer_gte?: InputMaybe<Scalars['String']>;
  reviewer_in?: InputMaybe<Array<Scalars['String']>>;
  reviewer_lt?: InputMaybe<Scalars['String']>;
  reviewer_lte?: InputMaybe<Scalars['String']>;
  reviewer_not?: InputMaybe<Scalars['String']>;
  reviewer_not_contains?: InputMaybe<Scalars['String']>;
  reviewer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewer_not_ends_with?: InputMaybe<Scalars['String']>;
  reviewer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_not_in?: InputMaybe<Array<Scalars['String']>>;
  reviewer_not_starts_with?: InputMaybe<Scalars['String']>;
  reviewer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_starts_with?: InputMaybe<Scalars['String']>;
  reviewer_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Review_OrderBy {
  Application = 'application',
  CreatedAtS = 'createdAtS',
  Data = 'data',
  Id = 'id',
  PublicReviewDataHash = 'publicReviewDataHash',
  Reviewer = 'reviewer',
  ReviewerId = 'reviewerId'
}

export type Reward = {
  __typename?: 'Reward';
  asset: Scalars['Bytes'];
  committed: Scalars['BigInt'];
  id: Scalars['ID'];
};

export type Reward_Filter = {
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  committed?: InputMaybe<Scalars['BigInt']>;
  committed_gt?: InputMaybe<Scalars['BigInt']>;
  committed_gte?: InputMaybe<Scalars['BigInt']>;
  committed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  committed_lt?: InputMaybe<Scalars['BigInt']>;
  committed_lte?: InputMaybe<Scalars['BigInt']>;
  committed_not?: InputMaybe<Scalars['BigInt']>;
  committed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Reward_OrderBy {
  Asset = 'asset',
  Committed = 'committed',
  Id = 'id'
}

export type Rubric = {
  __typename?: 'Rubric';
  /** Who added this rubric */
  addedBy?: Maybe<WorkspaceMember>;
  /** Unix timestamp of when the rubric was created */
  createdAtS: Scalars['Int'];
  id: Scalars['ID'];
  /** Is private evaluation */
  isPrivate: Scalars['Boolean'];
  items: Array<RubricItem>;
  /** Unix timestamp of when the rubric was updated */
  updatedAtS: Scalars['Int'];
};


export type RubricItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RubricItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RubricItem_Filter>;
};

export type RubricItem = {
  __typename?: 'RubricItem';
  details: Scalars['String'];
  id: Scalars['ID'];
  maximumPoints: Scalars['Int'];
  title: Scalars['String'];
};

export type RubricItem_Filter = {
  details?: InputMaybe<Scalars['String']>;
  details_contains?: InputMaybe<Scalars['String']>;
  details_contains_nocase?: InputMaybe<Scalars['String']>;
  details_ends_with?: InputMaybe<Scalars['String']>;
  details_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_gt?: InputMaybe<Scalars['String']>;
  details_gte?: InputMaybe<Scalars['String']>;
  details_in?: InputMaybe<Array<Scalars['String']>>;
  details_lt?: InputMaybe<Scalars['String']>;
  details_lte?: InputMaybe<Scalars['String']>;
  details_not?: InputMaybe<Scalars['String']>;
  details_not_contains?: InputMaybe<Scalars['String']>;
  details_not_contains_nocase?: InputMaybe<Scalars['String']>;
  details_not_ends_with?: InputMaybe<Scalars['String']>;
  details_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_not_in?: InputMaybe<Array<Scalars['String']>>;
  details_not_starts_with?: InputMaybe<Scalars['String']>;
  details_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details_starts_with?: InputMaybe<Scalars['String']>;
  details_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maximumPoints?: InputMaybe<Scalars['Int']>;
  maximumPoints_gt?: InputMaybe<Scalars['Int']>;
  maximumPoints_gte?: InputMaybe<Scalars['Int']>;
  maximumPoints_in?: InputMaybe<Array<Scalars['Int']>>;
  maximumPoints_lt?: InputMaybe<Scalars['Int']>;
  maximumPoints_lte?: InputMaybe<Scalars['Int']>;
  maximumPoints_not?: InputMaybe<Scalars['Int']>;
  maximumPoints_not_in?: InputMaybe<Array<Scalars['Int']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum RubricItem_OrderBy {
  Details = 'details',
  Id = 'id',
  MaximumPoints = 'maximumPoints',
  Title = 'title'
}

export type Rubric_Filter = {
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_contains?: InputMaybe<Scalars['String']>;
  addedBy_contains_nocase?: InputMaybe<Scalars['String']>;
  addedBy_ends_with?: InputMaybe<Scalars['String']>;
  addedBy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_gt?: InputMaybe<Scalars['String']>;
  addedBy_gte?: InputMaybe<Scalars['String']>;
  addedBy_in?: InputMaybe<Array<Scalars['String']>>;
  addedBy_lt?: InputMaybe<Scalars['String']>;
  addedBy_lte?: InputMaybe<Scalars['String']>;
  addedBy_not?: InputMaybe<Scalars['String']>;
  addedBy_not_contains?: InputMaybe<Scalars['String']>;
  addedBy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addedBy_not_ends_with?: InputMaybe<Scalars['String']>;
  addedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_not_in?: InputMaybe<Array<Scalars['String']>>;
  addedBy_not_starts_with?: InputMaybe<Scalars['String']>;
  addedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_starts_with?: InputMaybe<Scalars['String']>;
  addedBy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  isPrivate_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPrivate_not?: InputMaybe<Scalars['Boolean']>;
  isPrivate_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  items?: InputMaybe<Array<Scalars['String']>>;
  items_contains?: InputMaybe<Array<Scalars['String']>>;
  items_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  items_not?: InputMaybe<Array<Scalars['String']>>;
  items_not_contains?: InputMaybe<Array<Scalars['String']>>;
  items_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Rubric_OrderBy {
  AddedBy = 'addedBy',
  CreatedAtS = 'createdAtS',
  Id = 'id',
  IsPrivate = 'isPrivate',
  Items = 'items',
  UpdatedAtS = 'updatedAtS'
}

export type Social = {
  __typename?: 'Social';
  id: Scalars['ID'];
  /** Name of the network. Eg. twitter, discord */
  name: Scalars['String'];
  /** Handle or URL */
  value: Scalars['String'];
};

export type Social_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Social_OrderBy {
  Id = 'id',
  Name = 'name',
  Value = 'value'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  applicationMilestone?: Maybe<ApplicationMilestone>;
  applicationMilestones: Array<ApplicationMilestone>;
  fundsTransfer?: Maybe<FundsTransfer>;
  fundsTransfers: Array<FundsTransfer>;
  grant?: Maybe<Grant>;
  grantApplication?: Maybe<GrantApplication>;
  grantApplicationRevision?: Maybe<GrantApplicationRevision>;
  grantApplicationRevisions: Array<GrantApplicationRevision>;
  grantApplications: Array<GrantApplication>;
  grantField?: Maybe<GrantField>;
  grantFieldAnswer?: Maybe<GrantFieldAnswer>;
  grantFieldAnswerItem?: Maybe<GrantFieldAnswerItem>;
  grantFieldAnswerItems: Array<GrantFieldAnswerItem>;
  grantFieldAnswers: Array<GrantFieldAnswer>;
  grantFields: Array<GrantField>;
  grantManager?: Maybe<GrantManager>;
  grantManagers: Array<GrantManager>;
  grants: Array<Grant>;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  piianswer?: Maybe<PiiAnswer>;
  piianswers: Array<PiiAnswer>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  rubric?: Maybe<Rubric>;
  rubricItem?: Maybe<RubricItem>;
  rubricItems: Array<RubricItem>;
  rubrics: Array<Rubric>;
  social?: Maybe<Social>;
  socials: Array<Social>;
  workspace?: Maybe<Workspace>;
  workspaceMember?: Maybe<WorkspaceMember>;
  workspaceMembers: Array<WorkspaceMember>;
  workspaces: Array<Workspace>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionApplicationMilestoneArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApplicationMilestonesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};


export type SubscriptionFundsTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFundsTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundsTransfer_Filter>;
};


export type SubscriptionGrantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationRevision_Filter>;
};


export type SubscriptionGrantApplicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplication_Filter>;
};


export type SubscriptionGrantFieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantFieldAnswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantFieldAnswerItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantFieldAnswerItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswerItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswerItem_Filter>;
};


export type SubscriptionGrantFieldAnswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


export type SubscriptionGrantFieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantField_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantField_Filter>;
};


export type SubscriptionGrantManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantManager_Filter>;
};


export type SubscriptionGrantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Grant_Filter>;
};


export type SubscriptionNotificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNotificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Notification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Notification_Filter>;
};


export type SubscriptionPiianswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPiianswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PiiAnswer_Filter>;
};


export type SubscriptionReviewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReviewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Review_Filter>;
};


export type SubscriptionRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type SubscriptionRubricArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRubricItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRubricItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RubricItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RubricItem_Filter>;
};


export type SubscriptionRubricsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rubric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rubric_Filter>;
};


export type SubscriptionSocialArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSocialsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Social_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Social_Filter>;
};


export type SubscriptionWorkspaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkspaceMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkspaceMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


export type SubscriptionWorkspacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Workspace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workspace_Filter>;
};

export enum SupportedNetwork {
  Chain_1 = 'chain_1',
  Chain_4 = 'chain_4',
  Chain_10 = 'chain_10',
  Chain_137 = 'chain_137',
  Chain_80001 = 'chain_80001',
  Chain_1666600000 = 'chain_1666600000',
  Chain_1666700000 = 'chain_1666700000'
}

/** Schema for a Workspace or DAO */
export type Workspace = {
  __typename?: 'Workspace';
  /** General info about the workspace */
  about: Scalars['String'];
  /** Cover image for the workspace */
  coverImageIpfsHash?: Maybe<Scalars['String']>;
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  id: Scalars['ID'];
  /** Hash to fetch the logo */
  logoIpfsHash: Scalars['String'];
  /** Members of the workspace */
  members: Array<WorkspaceMember>;
  /** Hash of the IPFS file from which the details about the workspace were pulled */
  metadataHash: Scalars['String'];
  /** Address of the owner of the workspace */
  ownerId: Scalars['Bytes'];
  /** List of social media handles of the workspace */
  socials: Array<Social>;
  /** List of supported networks of the workspace */
  supportedNetworks: Array<SupportedNetwork>;
  /** Title of the workspace */
  title: Scalars['String'];
  /** in seconds since epoch */
  updatedAtS: Scalars['Int'];
};


/** Schema for a Workspace or DAO */
export type WorkspaceMembersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


/** Schema for a Workspace or DAO */
export type WorkspaceSocialsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Social_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Social_Filter>;
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  /** What permissions the member has on the workspace */
  accessLevel: WorkspaceMemberAccessLevel;
  /** the ID of the member itself */
  actorId: Scalars['Bytes'];
  /** When the member was added */
  addedAt: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  /** Globally unique ID of the member */
  id: Scalars['ID'];
  /** Public key of the workspace member */
  publicKey?: Maybe<Scalars['String']>;
  /** Last update on member */
  updatedAt: Scalars['Int'];
  workspace: Workspace;
};

export enum WorkspaceMemberAccessLevel {
  Admin = 'admin',
  Member = 'member',
  Owner = 'owner',
  Reviewer = 'reviewer'
}

export type WorkspaceMember_Filter = {
  accessLevel?: InputMaybe<WorkspaceMemberAccessLevel>;
  accessLevel_in?: InputMaybe<Array<WorkspaceMemberAccessLevel>>;
  accessLevel_not?: InputMaybe<WorkspaceMemberAccessLevel>;
  accessLevel_not_in?: InputMaybe<Array<WorkspaceMemberAccessLevel>>;
  actorId?: InputMaybe<Scalars['Bytes']>;
  actorId_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actorId_not?: InputMaybe<Scalars['Bytes']>;
  actorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addedAt?: InputMaybe<Scalars['Int']>;
  addedAt_gt?: InputMaybe<Scalars['Int']>;
  addedAt_gte?: InputMaybe<Scalars['Int']>;
  addedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  addedAt_lt?: InputMaybe<Scalars['Int']>;
  addedAt_lte?: InputMaybe<Scalars['Int']>;
  addedAt_not?: InputMaybe<Scalars['Int']>;
  addedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_nocase?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_nocase?: InputMaybe<Scalars['String']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<Scalars['String']>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_nocase?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_contains?: InputMaybe<Scalars['String']>;
  publicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  publicKey_ends_with?: InputMaybe<Scalars['String']>;
  publicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<Scalars['String']>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_not?: InputMaybe<Scalars['String']>;
  publicKey_not_contains?: InputMaybe<Scalars['String']>;
  publicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  publicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  publicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  publicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publicKey_starts_with?: InputMaybe<Scalars['String']>;
  publicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_contains?: InputMaybe<Scalars['String']>;
  workspace_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_ends_with?: InputMaybe<Scalars['String']>;
  workspace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_gt?: InputMaybe<Scalars['String']>;
  workspace_gte?: InputMaybe<Scalars['String']>;
  workspace_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_lt?: InputMaybe<Scalars['String']>;
  workspace_lte?: InputMaybe<Scalars['String']>;
  workspace_not?: InputMaybe<Scalars['String']>;
  workspace_not_contains?: InputMaybe<Scalars['String']>;
  workspace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_not_starts_with?: InputMaybe<Scalars['String']>;
  workspace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_starts_with?: InputMaybe<Scalars['String']>;
  workspace_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum WorkspaceMember_OrderBy {
  AccessLevel = 'accessLevel',
  ActorId = 'actorId',
  AddedAt = 'addedAt',
  Email = 'email',
  Id = 'id',
  PublicKey = 'publicKey',
  UpdatedAt = 'updatedAt',
  Workspace = 'workspace'
}

export type Workspace_Filter = {
  about?: InputMaybe<Scalars['String']>;
  about_contains?: InputMaybe<Scalars['String']>;
  about_contains_nocase?: InputMaybe<Scalars['String']>;
  about_ends_with?: InputMaybe<Scalars['String']>;
  about_ends_with_nocase?: InputMaybe<Scalars['String']>;
  about_gt?: InputMaybe<Scalars['String']>;
  about_gte?: InputMaybe<Scalars['String']>;
  about_in?: InputMaybe<Array<Scalars['String']>>;
  about_lt?: InputMaybe<Scalars['String']>;
  about_lte?: InputMaybe<Scalars['String']>;
  about_not?: InputMaybe<Scalars['String']>;
  about_not_contains?: InputMaybe<Scalars['String']>;
  about_not_contains_nocase?: InputMaybe<Scalars['String']>;
  about_not_ends_with?: InputMaybe<Scalars['String']>;
  about_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  about_not_in?: InputMaybe<Array<Scalars['String']>>;
  about_not_starts_with?: InputMaybe<Scalars['String']>;
  about_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  about_starts_with?: InputMaybe<Scalars['String']>;
  about_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_contains?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_gt?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_gte?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  coverImageIpfsHash_lt?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_lte?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  coverImageIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logoIpfsHash?: InputMaybe<Scalars['String']>;
  logoIpfsHash_contains?: InputMaybe<Scalars['String']>;
  logoIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_gt?: InputMaybe<Scalars['String']>;
  logoIpfsHash_gte?: InputMaybe<Scalars['String']>;
  logoIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  logoIpfsHash_lt?: InputMaybe<Scalars['String']>;
  logoIpfsHash_lte?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  logoIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['String']>;
  metadataHash_contains?: InputMaybe<Scalars['String']>;
  metadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_gt?: InputMaybe<Scalars['String']>;
  metadataHash_gte?: InputMaybe<Scalars['String']>;
  metadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_lt?: InputMaybe<Scalars['String']>;
  metadataHash_lte?: InputMaybe<Scalars['String']>;
  metadataHash_not?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['Bytes']>;
  ownerId_contains?: InputMaybe<Scalars['Bytes']>;
  ownerId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ownerId_not?: InputMaybe<Scalars['Bytes']>;
  ownerId_not_contains?: InputMaybe<Scalars['Bytes']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  socials?: InputMaybe<Array<Scalars['String']>>;
  socials_contains?: InputMaybe<Array<Scalars['String']>>;
  socials_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  socials_not?: InputMaybe<Array<Scalars['String']>>;
  socials_not_contains?: InputMaybe<Array<Scalars['String']>>;
  socials_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  supportedNetworks?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_contains?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_contains_nocase?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_not?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_not_contains?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_not_contains_nocase?: InputMaybe<Array<SupportedNetwork>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Workspace_OrderBy {
  About = 'about',
  CoverImageIpfsHash = 'coverImageIpfsHash',
  CreatedAtS = 'createdAtS',
  Id = 'id',
  LogoIpfsHash = 'logoIpfsHash',
  Members = 'members',
  MetadataHash = 'metadataHash',
  OwnerId = 'ownerId',
  Socials = 'socials',
  SupportedNetworks = 'supportedNetworks',
  Title = 'title',
  UpdatedAtS = 'updatedAtS'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetGrantAmountsReceivedQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type GetGrantAmountsReceivedQuery = { __typename?: 'Query', fundsTransfers: Array<{ __typename?: 'FundsTransfer', amount: string, createdAtS: number, application?: { __typename?: 'GrantApplication', id: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', title: string }, reward: { __typename?: 'Reward', asset: string }, managers: Array<{ __typename?: 'GrantManager', member?: { __typename?: 'WorkspaceMember', email?: string | null } | null }> } } | null, milestone?: { __typename?: 'ApplicationMilestone', id: string, amount: string, amountPaid: string } | null }> };

export type GetInvitedMembersQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type GetInvitedMembersQuery = { __typename?: 'Query', workspaceMembers: Array<{ __typename?: 'WorkspaceMember', email?: string | null, accessLevel: WorkspaceMemberAccessLevel, updatedAt: number, workspace: { __typename?: 'Workspace', title: string } }> };

export type GetReceivedApplicationsQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type GetReceivedApplicationsQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', workspace: { __typename?: 'Workspace', title: string }, managers: Array<{ __typename?: 'GrantManager', member?: { __typename?: 'WorkspaceMember', email?: string | null } | null }> } }> };

export type GetRejectedApplicationsQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type GetRejectedApplicationsQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', workspace: { __typename?: 'Workspace', title: string }, managers: Array<{ __typename?: 'GrantManager', member?: { __typename?: 'WorkspaceMember', email?: string | null } | null }> } }> };

export type GetSubmittedApplicationsQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type GetSubmittedApplicationsQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', title: string }, managers: Array<{ __typename?: 'GrantManager', member?: { __typename?: 'WorkspaceMember', email?: string | null } | null }> } }> };


export const GetGrantAmountsReceivedDocument = gql`
    query getGrantAmountsReceived($lowerLimit: Int!, $upperLimit: Int!) {
  fundsTransfers(
    where: {createdAtS_gt: $lowerLimit, createdAtS_lte: $upperLimit, type: funds_disbursed}
  ) {
    application {
      id
      projectName: fields(where: {field_ends_with: "projectName"}) {
        values {
          value
        }
      }
      applicantName: fields(where: {field_ends_with: "applicantName"}) {
        values {
          value
        }
      }
      applicantEmail: fields(where: {field_ends_with: "applicantEmail"}) {
        values {
          value
        }
      }
      grant {
        title
        workspace {
          title
        }
        reward {
          asset
        }
        managers {
          member {
            email
          }
        }
      }
    }
    amount
    createdAtS
    milestone {
      id
      amount
      amountPaid
    }
  }
}
    `;

/**
 * __useGetGrantAmountsReceivedQuery__
 *
 * To run a query within a React component, call `useGetGrantAmountsReceivedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGrantAmountsReceivedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGrantAmountsReceivedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useGetGrantAmountsReceivedQuery(baseOptions: Apollo.QueryHookOptions<GetGrantAmountsReceivedQuery, GetGrantAmountsReceivedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGrantAmountsReceivedQuery, GetGrantAmountsReceivedQueryVariables>(GetGrantAmountsReceivedDocument, options);
      }
export function useGetGrantAmountsReceivedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGrantAmountsReceivedQuery, GetGrantAmountsReceivedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGrantAmountsReceivedQuery, GetGrantAmountsReceivedQueryVariables>(GetGrantAmountsReceivedDocument, options);
        }
export type GetGrantAmountsReceivedQueryHookResult = ReturnType<typeof useGetGrantAmountsReceivedQuery>;
export type GetGrantAmountsReceivedLazyQueryHookResult = ReturnType<typeof useGetGrantAmountsReceivedLazyQuery>;
export type GetGrantAmountsReceivedQueryResult = Apollo.QueryResult<GetGrantAmountsReceivedQuery, GetGrantAmountsReceivedQueryVariables>;
export const GetInvitedMembersDocument = gql`
    query getInvitedMembers($lowerLimit: Int!, $upperLimit: Int!) {
  workspaceMembers(
    subgraphError: allow
    where: {updatedAt_gt: $lowerLimit, updatedAt_lte: $upperLimit, email_not: null}
  ) {
    email
    workspace {
      title
    }
    accessLevel
    updatedAt
  }
}
    `;

/**
 * __useGetInvitedMembersQuery__
 *
 * To run a query within a React component, call `useGetInvitedMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvitedMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvitedMembersQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useGetInvitedMembersQuery(baseOptions: Apollo.QueryHookOptions<GetInvitedMembersQuery, GetInvitedMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInvitedMembersQuery, GetInvitedMembersQueryVariables>(GetInvitedMembersDocument, options);
      }
export function useGetInvitedMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvitedMembersQuery, GetInvitedMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInvitedMembersQuery, GetInvitedMembersQueryVariables>(GetInvitedMembersDocument, options);
        }
export type GetInvitedMembersQueryHookResult = ReturnType<typeof useGetInvitedMembersQuery>;
export type GetInvitedMembersLazyQueryHookResult = ReturnType<typeof useGetInvitedMembersLazyQuery>;
export type GetInvitedMembersQueryResult = Apollo.QueryResult<GetInvitedMembersQuery, GetInvitedMembersQueryVariables>;
export const GetReceivedApplicationsDocument = gql`
    query getReceivedApplications($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: submitted}
  ) {
    projectName: fields(where: {field_ends_with: "projectName"}) {
      values {
        value
      }
    }
    applicantName: fields(where: {field_ends_with: "applicantName"}) {
      values {
        value
      }
    }
    applicantEmail: fields(where: {field_ends_with: "applicantEmail"}) {
      values {
        value
      }
    }
    grant {
      workspace {
        title
      }
      managers {
        member {
          email
        }
      }
    }
  }
}
    `;

/**
 * __useGetReceivedApplicationsQuery__
 *
 * To run a query within a React component, call `useGetReceivedApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReceivedApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReceivedApplicationsQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useGetReceivedApplicationsQuery(baseOptions: Apollo.QueryHookOptions<GetReceivedApplicationsQuery, GetReceivedApplicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReceivedApplicationsQuery, GetReceivedApplicationsQueryVariables>(GetReceivedApplicationsDocument, options);
      }
export function useGetReceivedApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReceivedApplicationsQuery, GetReceivedApplicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReceivedApplicationsQuery, GetReceivedApplicationsQueryVariables>(GetReceivedApplicationsDocument, options);
        }
export type GetReceivedApplicationsQueryHookResult = ReturnType<typeof useGetReceivedApplicationsQuery>;
export type GetReceivedApplicationsLazyQueryHookResult = ReturnType<typeof useGetReceivedApplicationsLazyQuery>;
export type GetReceivedApplicationsQueryResult = Apollo.QueryResult<GetReceivedApplicationsQuery, GetReceivedApplicationsQueryVariables>;
export const GetRejectedApplicationsDocument = gql`
    query getRejectedApplications($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: rejected}
  ) {
    projectName: fields(where: {field_ends_with: "projectName"}) {
      values {
        value
      }
    }
    applicantName: fields(where: {field_ends_with: "applicantName"}) {
      values {
        value
      }
    }
    applicantEmail: fields(where: {field_ends_with: "applicantEmail"}) {
      values {
        value
      }
    }
    grant {
      workspace {
        title
      }
      managers {
        member {
          email
        }
      }
    }
  }
}
    `;

/**
 * __useGetRejectedApplicationsQuery__
 *
 * To run a query within a React component, call `useGetRejectedApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRejectedApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRejectedApplicationsQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useGetRejectedApplicationsQuery(baseOptions: Apollo.QueryHookOptions<GetRejectedApplicationsQuery, GetRejectedApplicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRejectedApplicationsQuery, GetRejectedApplicationsQueryVariables>(GetRejectedApplicationsDocument, options);
      }
export function useGetRejectedApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRejectedApplicationsQuery, GetRejectedApplicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRejectedApplicationsQuery, GetRejectedApplicationsQueryVariables>(GetRejectedApplicationsDocument, options);
        }
export type GetRejectedApplicationsQueryHookResult = ReturnType<typeof useGetRejectedApplicationsQuery>;
export type GetRejectedApplicationsLazyQueryHookResult = ReturnType<typeof useGetRejectedApplicationsLazyQuery>;
export type GetRejectedApplicationsQueryResult = Apollo.QueryResult<GetRejectedApplicationsQuery, GetRejectedApplicationsQueryVariables>;
export const GetSubmittedApplicationsDocument = gql`
    query getSubmittedApplications($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: submitted}
  ) {
    projectName: fields(where: {field_ends_with: "projectName"}) {
      values {
        value
      }
    }
    applicantName: fields(where: {field_ends_with: "applicantName"}) {
      values {
        value
      }
    }
    grant {
      title
      workspace {
        title
      }
      managers {
        member {
          email
        }
      }
    }
  }
}
    `;

/**
 * __useGetSubmittedApplicationsQuery__
 *
 * To run a query within a React component, call `useGetSubmittedApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubmittedApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubmittedApplicationsQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useGetSubmittedApplicationsQuery(baseOptions: Apollo.QueryHookOptions<GetSubmittedApplicationsQuery, GetSubmittedApplicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubmittedApplicationsQuery, GetSubmittedApplicationsQueryVariables>(GetSubmittedApplicationsDocument, options);
      }
export function useGetSubmittedApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubmittedApplicationsQuery, GetSubmittedApplicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubmittedApplicationsQuery, GetSubmittedApplicationsQueryVariables>(GetSubmittedApplicationsDocument, options);
        }
export type GetSubmittedApplicationsQueryHookResult = ReturnType<typeof useGetSubmittedApplicationsQuery>;
export type GetSubmittedApplicationsLazyQueryHookResult = ReturnType<typeof useGetSubmittedApplicationsLazyQuery>;
export type GetSubmittedApplicationsQueryResult = Apollo.QueryResult<GetSubmittedApplicationsQuery, GetSubmittedApplicationsQueryVariables>;