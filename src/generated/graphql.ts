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
  /** The grant application this milestone belongs to */
  application: GrantApplication;
  /** Feedback from the grant DAO manager/applicant */
  feedbackDao?: Maybe<Scalars['String']>;
  /** Feedback from the developer */
  feedbackDev?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Current state of the milestone */
  state: MilestoneState;
  title: Scalars['String'];
  /** in seconds since epoch */
  updatedAtS?: Maybe<Scalars['Int']>;
};

export type ApplicationMilestone_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  application?: InputMaybe<Scalars['String']>;
  application_?: InputMaybe<GrantApplication_Filter>;
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
  Application = 'application',
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

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type FundsTransfer = {
  __typename?: 'FundsTransfer';
  /** How much of the funds were allocated */
  amount: Scalars['BigInt'];
  /** Application for which the funds were released */
  application?: Maybe<GrantApplication>;
  /** Asset that was used in the funds transfer */
  asset: Scalars['Bytes'];
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Which grant were the funds transferred to/from */
  grant: Grant;
  id: Scalars['ID'];
  /** Milestone for which the funds were released */
  milestone?: Maybe<ApplicationMilestone>;
  /** Hash/signature of the transaction */
  nonEvmAsset?: Maybe<Scalars['String']>;
  /** Reviw for which the payment was done */
  review?: Maybe<Review>;
  /** Address of who released the funds */
  sender: Scalars['Bytes'];
  /** The address to which funds were sent */
  to: Scalars['Bytes'];
  transactionHash?: Maybe<Scalars['String']>;
  /** What the type of funds transfer is */
  type: FundsTransferType;
};

export enum FundsTransferType {
  FundsDeposited = 'funds_deposited',
  FundsDisbursed = 'funds_disbursed',
  FundsDisbursedFromSafe = 'funds_disbursed_from_safe',
  FundsWithdrawn = 'funds_withdrawn',
  ReviewPaymentDone = 'review_payment_done'
}

export type FundsTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  application?: InputMaybe<Scalars['String']>;
  application_?: InputMaybe<GrantApplication_Filter>;
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
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  grant?: InputMaybe<Scalars['String']>;
  grant_?: InputMaybe<Grant_Filter>;
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
  milestone_?: InputMaybe<ApplicationMilestone_Filter>;
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
  nonEvmAsset?: InputMaybe<Scalars['String']>;
  nonEvmAsset_contains?: InputMaybe<Scalars['String']>;
  nonEvmAsset_contains_nocase?: InputMaybe<Scalars['String']>;
  nonEvmAsset_ends_with?: InputMaybe<Scalars['String']>;
  nonEvmAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nonEvmAsset_gt?: InputMaybe<Scalars['String']>;
  nonEvmAsset_gte?: InputMaybe<Scalars['String']>;
  nonEvmAsset_in?: InputMaybe<Array<Scalars['String']>>;
  nonEvmAsset_lt?: InputMaybe<Scalars['String']>;
  nonEvmAsset_lte?: InputMaybe<Scalars['String']>;
  nonEvmAsset_not?: InputMaybe<Scalars['String']>;
  nonEvmAsset_not_contains?: InputMaybe<Scalars['String']>;
  nonEvmAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nonEvmAsset_not_ends_with?: InputMaybe<Scalars['String']>;
  nonEvmAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nonEvmAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  nonEvmAsset_not_starts_with?: InputMaybe<Scalars['String']>;
  nonEvmAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nonEvmAsset_starts_with?: InputMaybe<Scalars['String']>;
  nonEvmAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  review_?: InputMaybe<Review_Filter>;
  review_contains?: InputMaybe<Scalars['String']>;
  review_contains_nocase?: InputMaybe<Scalars['String']>;
  review_ends_with?: InputMaybe<Scalars['String']>;
  review_ends_with_nocase?: InputMaybe<Scalars['String']>;
  review_gt?: InputMaybe<Scalars['String']>;
  review_gte?: InputMaybe<Scalars['String']>;
  review_in?: InputMaybe<Array<Scalars['String']>>;
  review_lt?: InputMaybe<Scalars['String']>;
  review_lte?: InputMaybe<Scalars['String']>;
  review_not?: InputMaybe<Scalars['String']>;
  review_not_contains?: InputMaybe<Scalars['String']>;
  review_not_contains_nocase?: InputMaybe<Scalars['String']>;
  review_not_ends_with?: InputMaybe<Scalars['String']>;
  review_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  review_not_in?: InputMaybe<Array<Scalars['String']>>;
  review_not_starts_with?: InputMaybe<Scalars['String']>;
  review_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  review_starts_with?: InputMaybe<Scalars['String']>;
  review_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  transactionHash?: InputMaybe<Scalars['String']>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<FundsTransferType>;
  type_in?: InputMaybe<Array<FundsTransferType>>;
  type_not?: InputMaybe<FundsTransferType>;
  type_not_in?: InputMaybe<Array<FundsTransferType>>;
};

export enum FundsTransfer_OrderBy {
  Amount = 'amount',
  Application = 'application',
  Asset = 'asset',
  CreatedAtS = 'createdAtS',
  Grant = 'grant',
  Id = 'id',
  Milestone = 'milestone',
  NonEvmAsset = 'nonEvmAsset',
  Review = 'review',
  Sender = 'sender',
  To = 'to',
  TransactionHash = 'transactionHash',
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
  /** Deadlint for the grant, in seconds since epoch */
  deadlineS: Scalars['Int'];
  /** Expectations & other details of the grant */
  details: Scalars['String'];
  /** Expected fields from the applicants of the grant */
  fields: Array<GrantField>;
  /** List of fund transfer records for the grant */
  fundTransfers: Array<FundsTransfer>;
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


export type GrantFundTransfersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FundsTransfer_Filter>;
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
  /** People who will review this grant application */
  applicationReviewers: Array<GrantApplicationReviewer>;
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Addresses of the assigned reviewers who have reviewed */
  doneReviewerAddresses: Array<Scalars['Bytes']>;
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
  /** Addresses of the assigned reviewers who are yet to review */
  pendingReviewerAddresses: Array<Scalars['Bytes']>;
  /** PII Data */
  pii: Array<PiiAnswer>;
  /** @deprecated (use 'applicationReviewers') People who will review the grant application */
  reviewers: Array<WorkspaceMember>;
  /** Reviews of the application */
  reviews: Array<Review>;
  /** Current state of the application */
  state: ApplicationState;
  /** in seconds since epoch */
  updatedAtS: Scalars['Int'];
  /** Version of the application, incremented on resubmission */
  version: Scalars['Int'];
};


export type GrantApplicationApplicationReviewersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationReviewer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantApplicationReviewer_Filter>;
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

export type GrantApplicationReviewer = {
  __typename?: 'GrantApplicationReviewer';
  /** Unix timestamp of when the user was assigned */
  assignedAtS: Scalars['Int'];
  id: Scalars['ID'];
  /** The member who was assigned */
  member: WorkspaceMember;
};

export type GrantApplicationReviewer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  assignedAtS?: InputMaybe<Scalars['Int']>;
  assignedAtS_gt?: InputMaybe<Scalars['Int']>;
  assignedAtS_gte?: InputMaybe<Scalars['Int']>;
  assignedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  assignedAtS_lt?: InputMaybe<Scalars['Int']>;
  assignedAtS_lte?: InputMaybe<Scalars['Int']>;
  assignedAtS_not?: InputMaybe<Scalars['Int']>;
  assignedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  member?: InputMaybe<Scalars['String']>;
  member_?: InputMaybe<WorkspaceMember_Filter>;
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

export enum GrantApplicationReviewer_OrderBy {
  AssignedAtS = 'assignedAtS',
  Id = 'id',
  Member = 'member'
}

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
  /** Version number of the grant application */
  version: Scalars['Int'];
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actorId?: InputMaybe<Scalars['Bytes']>;
  actorId_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actorId_not?: InputMaybe<Scalars['Bytes']>;
  actorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  application?: InputMaybe<Scalars['String']>;
  application_?: InputMaybe<GrantApplication_Filter>;
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
  fields_?: InputMaybe<GrantFieldAnswer_Filter>;
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
  milestones_?: InputMaybe<ApplicationMilestone_Filter>;
  milestones_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_not?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<ApplicationState>;
  state_in?: InputMaybe<Array<ApplicationState>>;
  state_not?: InputMaybe<ApplicationState>;
  state_not_in?: InputMaybe<Array<ApplicationState>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  State = 'state',
  Version = 'version'
}

export type GrantApplication_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  applicantId?: InputMaybe<Scalars['Bytes']>;
  applicantId_contains?: InputMaybe<Scalars['Bytes']>;
  applicantId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  applicantId_not?: InputMaybe<Scalars['Bytes']>;
  applicantId_not_contains?: InputMaybe<Scalars['Bytes']>;
  applicantId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  applicationReviewers?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_?: InputMaybe<GrantApplicationReviewer_Filter>;
  applicationReviewers_contains?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_not?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  doneReviewerAddresses?: InputMaybe<Array<Scalars['Bytes']>>;
  doneReviewerAddresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  doneReviewerAddresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  doneReviewerAddresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  doneReviewerAddresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  doneReviewerAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
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
  fields_?: InputMaybe<GrantFieldAnswer_Filter>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  grant?: InputMaybe<Scalars['String']>;
  grant_?: InputMaybe<Grant_Filter>;
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
  milestones_?: InputMaybe<ApplicationMilestone_Filter>;
  milestones_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_not?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pendingReviewerAddresses?: InputMaybe<Array<Scalars['Bytes']>>;
  pendingReviewerAddresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  pendingReviewerAddresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  pendingReviewerAddresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  pendingReviewerAddresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  pendingReviewerAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  pii?: InputMaybe<Array<Scalars['String']>>;
  pii_?: InputMaybe<PiiAnswer_Filter>;
  pii_contains?: InputMaybe<Array<Scalars['String']>>;
  pii_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pii_not?: InputMaybe<Array<Scalars['String']>>;
  pii_not_contains?: InputMaybe<Array<Scalars['String']>>;
  pii_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reviewers?: InputMaybe<Array<Scalars['String']>>;
  reviewers_?: InputMaybe<WorkspaceMember_Filter>;
  reviewers_contains?: InputMaybe<Array<Scalars['String']>>;
  reviewers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reviews_?: InputMaybe<Review_Filter>;
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
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum GrantApplication_OrderBy {
  ApplicantId = 'applicantId',
  ApplicationReviewers = 'applicationReviewers',
  CreatedAtS = 'createdAtS',
  DoneReviewerAddresses = 'doneReviewerAddresses',
  FeedbackDao = 'feedbackDao',
  FeedbackDev = 'feedbackDev',
  Fields = 'fields',
  Grant = 'grant',
  Id = 'id',
  Milestones = 'milestones',
  PendingReviewerAddresses = 'pendingReviewerAddresses',
  Pii = 'pii',
  Reviewers = 'reviewers',
  Reviews = 'reviews',
  State = 'state',
  UpdatedAtS = 'updatedAtS',
  Version = 'version'
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  answer?: InputMaybe<Scalars['String']>;
  answer_?: InputMaybe<GrantFieldAnswer_Filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  field?: InputMaybe<Scalars['String']>;
  field_?: InputMaybe<GrantField_Filter>;
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
  values_?: InputMaybe<GrantFieldAnswerItem_Filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  grant?: InputMaybe<Scalars['String']>;
  grant_?: InputMaybe<Grant_Filter>;
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
  member_?: InputMaybe<WorkspaceMember_Filter>;
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

export type GrantReviewerCounter = {
  __typename?: 'GrantReviewerCounter';
  /** total number of applications assigned in grant */
  counter: Scalars['Int'];
  /** number of applications reviewed in the grant */
  doneCounter: Scalars['Int'];
  /** The grant itself */
  grant: Grant;
  /** ID of the entity, grantID . reviewerAddress */
  id: Scalars['ID'];
  /** number of applications assigned, pending in the grant */
  pendingCounter: Scalars['Int'];
  /** Address of the reviewer */
  reviewerAddress: Scalars['Bytes'];
};

export type GrantReviewerCounter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  counter?: InputMaybe<Scalars['Int']>;
  counter_gt?: InputMaybe<Scalars['Int']>;
  counter_gte?: InputMaybe<Scalars['Int']>;
  counter_in?: InputMaybe<Array<Scalars['Int']>>;
  counter_lt?: InputMaybe<Scalars['Int']>;
  counter_lte?: InputMaybe<Scalars['Int']>;
  counter_not?: InputMaybe<Scalars['Int']>;
  counter_not_in?: InputMaybe<Array<Scalars['Int']>>;
  doneCounter?: InputMaybe<Scalars['Int']>;
  doneCounter_gt?: InputMaybe<Scalars['Int']>;
  doneCounter_gte?: InputMaybe<Scalars['Int']>;
  doneCounter_in?: InputMaybe<Array<Scalars['Int']>>;
  doneCounter_lt?: InputMaybe<Scalars['Int']>;
  doneCounter_lte?: InputMaybe<Scalars['Int']>;
  doneCounter_not?: InputMaybe<Scalars['Int']>;
  doneCounter_not_in?: InputMaybe<Array<Scalars['Int']>>;
  grant?: InputMaybe<Scalars['String']>;
  grant_?: InputMaybe<Grant_Filter>;
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
  pendingCounter?: InputMaybe<Scalars['Int']>;
  pendingCounter_gt?: InputMaybe<Scalars['Int']>;
  pendingCounter_gte?: InputMaybe<Scalars['Int']>;
  pendingCounter_in?: InputMaybe<Array<Scalars['Int']>>;
  pendingCounter_lt?: InputMaybe<Scalars['Int']>;
  pendingCounter_lte?: InputMaybe<Scalars['Int']>;
  pendingCounter_not?: InputMaybe<Scalars['Int']>;
  pendingCounter_not_in?: InputMaybe<Array<Scalars['Int']>>;
  reviewerAddress?: InputMaybe<Scalars['Bytes']>;
  reviewerAddress_contains?: InputMaybe<Scalars['Bytes']>;
  reviewerAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reviewerAddress_not?: InputMaybe<Scalars['Bytes']>;
  reviewerAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  reviewerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GrantReviewerCounter_OrderBy {
  Counter = 'counter',
  DoneCounter = 'doneCounter',
  Grant = 'grant',
  Id = 'id',
  PendingCounter = 'pendingCounter',
  ReviewerAddress = 'reviewerAddress'
}

export type Grant_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  acceptingApplications?: InputMaybe<Scalars['Boolean']>;
  acceptingApplications_in?: InputMaybe<Array<Scalars['Boolean']>>;
  acceptingApplications_not?: InputMaybe<Scalars['Boolean']>;
  acceptingApplications_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  applications_?: InputMaybe<GrantApplication_Filter>;
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
  deadlineS?: InputMaybe<Scalars['Int']>;
  deadlineS_gt?: InputMaybe<Scalars['Int']>;
  deadlineS_gte?: InputMaybe<Scalars['Int']>;
  deadlineS_in?: InputMaybe<Array<Scalars['Int']>>;
  deadlineS_lt?: InputMaybe<Scalars['Int']>;
  deadlineS_lte?: InputMaybe<Scalars['Int']>;
  deadlineS_not?: InputMaybe<Scalars['Int']>;
  deadlineS_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  fields_?: InputMaybe<GrantField_Filter>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fundTransfers_?: InputMaybe<FundsTransfer_Filter>;
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
  managers_?: InputMaybe<GrantManager_Filter>;
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
  reward_?: InputMaybe<Reward_Filter>;
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
  rubric_?: InputMaybe<Rubric_Filter>;
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
  workspace_?: InputMaybe<Workspace_Filter>;
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
  DeadlineS = 'deadlineS',
  Details = 'details',
  Fields = 'fields',
  FundTransfers = 'fundTransfers',
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  manager_?: InputMaybe<GrantManager_Filter>;
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

export type Partner = {
  __typename?: 'Partner';
  id: Scalars['ID'];
  industry: Scalars['String'];
  name: Scalars['String'];
  partnerImageHash?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Partner_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  industry?: InputMaybe<Scalars['String']>;
  industry_contains?: InputMaybe<Scalars['String']>;
  industry_contains_nocase?: InputMaybe<Scalars['String']>;
  industry_ends_with?: InputMaybe<Scalars['String']>;
  industry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  industry_gt?: InputMaybe<Scalars['String']>;
  industry_gte?: InputMaybe<Scalars['String']>;
  industry_in?: InputMaybe<Array<Scalars['String']>>;
  industry_lt?: InputMaybe<Scalars['String']>;
  industry_lte?: InputMaybe<Scalars['String']>;
  industry_not?: InputMaybe<Scalars['String']>;
  industry_not_contains?: InputMaybe<Scalars['String']>;
  industry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  industry_not_ends_with?: InputMaybe<Scalars['String']>;
  industry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  industry_not_in?: InputMaybe<Array<Scalars['String']>>;
  industry_not_starts_with?: InputMaybe<Scalars['String']>;
  industry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  industry_starts_with?: InputMaybe<Scalars['String']>;
  industry_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  partnerImageHash?: InputMaybe<Scalars['String']>;
  partnerImageHash_contains?: InputMaybe<Scalars['String']>;
  partnerImageHash_contains_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_ends_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_gt?: InputMaybe<Scalars['String']>;
  partnerImageHash_gte?: InputMaybe<Scalars['String']>;
  partnerImageHash_in?: InputMaybe<Array<Scalars['String']>>;
  partnerImageHash_lt?: InputMaybe<Scalars['String']>;
  partnerImageHash_lte?: InputMaybe<Scalars['String']>;
  partnerImageHash_not?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_contains?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_ends_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  partnerImageHash_not_starts_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_starts_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Partner_OrderBy {
  Id = 'id',
  Industry = 'industry',
  Name = 'name',
  PartnerImageHash = 'partnerImageHash',
  Website = 'website'
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
  grantApplicationReviewer?: Maybe<GrantApplicationReviewer>;
  grantApplicationReviewers: Array<GrantApplicationReviewer>;
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
  grantReviewerCounter?: Maybe<GrantReviewerCounter>;
  grantReviewerCounters: Array<GrantReviewerCounter>;
  grants: Array<Grant>;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  partner?: Maybe<Partner>;
  partners: Array<Partner>;
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
  token?: Maybe<Token>;
  tokens: Array<Token>;
  workspace?: Maybe<Workspace>;
  workspaceMember?: Maybe<WorkspaceMember>;
  workspaceMembers: Array<WorkspaceMember>;
  workspaceSafe?: Maybe<WorkspaceSafe>;
  workspaceSafes: Array<WorkspaceSafe>;
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


export type QueryGrantApplicationReviewerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationReviewersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationReviewer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationReviewer_Filter>;
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


export type QueryGrantReviewerCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantReviewerCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantReviewerCounter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantReviewerCounter_Filter>;
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


export type QueryPartnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPartnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Partner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Partner_Filter>;
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


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
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


export type QueryWorkspaceSafeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkspaceSafesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceSafe_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkspaceSafe_Filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  application?: InputMaybe<Scalars['String']>;
  application_?: InputMaybe<GrantApplication_Filter>;
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
  data_?: InputMaybe<PiiAnswer_Filter>;
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
  reviewer_?: InputMaybe<WorkspaceMember_Filter>;
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
  token?: Maybe<Token>;
};

export type Reward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Reward_OrderBy {
  Asset = 'asset',
  Committed = 'committed',
  Id = 'id',
  Token = 'token'
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_?: InputMaybe<WorkspaceMember_Filter>;
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
  items_?: InputMaybe<RubricItem_Filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  grantApplicationReviewer?: Maybe<GrantApplicationReviewer>;
  grantApplicationReviewers: Array<GrantApplicationReviewer>;
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
  grantReviewerCounter?: Maybe<GrantReviewerCounter>;
  grantReviewerCounters: Array<GrantReviewerCounter>;
  grants: Array<Grant>;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  partner?: Maybe<Partner>;
  partners: Array<Partner>;
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
  token?: Maybe<Token>;
  tokens: Array<Token>;
  workspace?: Maybe<Workspace>;
  workspaceMember?: Maybe<WorkspaceMember>;
  workspaceMembers: Array<WorkspaceMember>;
  workspaceSafe?: Maybe<WorkspaceSafe>;
  workspaceSafes: Array<WorkspaceSafe>;
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


export type SubscriptionGrantApplicationReviewerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationReviewersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationReviewer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationReviewer_Filter>;
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


export type SubscriptionGrantReviewerCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantReviewerCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantReviewerCounter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantReviewerCounter_Filter>;
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


export type SubscriptionPartnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPartnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Partner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Partner_Filter>;
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


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
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


export type SubscriptionWorkspaceSafeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkspaceSafesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceSafe_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkspaceSafe_Filter>;
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
  Chain_4 = 'chain_4',
  Chain_5 = 'chain_5',
  Chain_10 = 'chain_10',
  Chain_40 = 'chain_40',
  Chain_41 = 'chain_41',
  Chain_42 = 'chain_42',
  Chain_69 = 'chain_69',
  Chain_100 = 'chain_100',
  Chain_137 = 'chain_137',
  Chain_588 = 'chain_588',
  Chain_1001 = 'chain_1001',
  Chain_1088 = 'chain_1088',
  Chain_1287 = 'chain_1287',
  Chain_2153 = 'chain_2153',
  Chain_8217 = 'chain_8217',
  Chain_9000 = 'chain_9000',
  Chain_42220 = 'chain_42220',
  Chain_44787 = 'chain_44787',
  Chain_80001 = 'chain_80001',
  Chain_245022926 = 'chain_245022926',
  Chain_1313161555 = 'chain_1313161555',
  Chain_1666600000 = 'chain_1666600000',
  Chain_1666700000 = 'chain_1666700000'
}

export type Token = {
  __typename?: 'Token';
  address: Scalars['Bytes'];
  chainId?: Maybe<Scalars['BigInt']>;
  decimal: Scalars['Int'];
  iconHash: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  workspace: Workspace;
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimal?: InputMaybe<Scalars['Int']>;
  decimal_gt?: InputMaybe<Scalars['Int']>;
  decimal_gte?: InputMaybe<Scalars['Int']>;
  decimal_in?: InputMaybe<Array<Scalars['Int']>>;
  decimal_lt?: InputMaybe<Scalars['Int']>;
  decimal_lte?: InputMaybe<Scalars['Int']>;
  decimal_not?: InputMaybe<Scalars['Int']>;
  decimal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  iconHash?: InputMaybe<Scalars['String']>;
  iconHash_contains?: InputMaybe<Scalars['String']>;
  iconHash_contains_nocase?: InputMaybe<Scalars['String']>;
  iconHash_ends_with?: InputMaybe<Scalars['String']>;
  iconHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  iconHash_gt?: InputMaybe<Scalars['String']>;
  iconHash_gte?: InputMaybe<Scalars['String']>;
  iconHash_in?: InputMaybe<Array<Scalars['String']>>;
  iconHash_lt?: InputMaybe<Scalars['String']>;
  iconHash_lte?: InputMaybe<Scalars['String']>;
  iconHash_not?: InputMaybe<Scalars['String']>;
  iconHash_not_contains?: InputMaybe<Scalars['String']>;
  iconHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  iconHash_not_ends_with?: InputMaybe<Scalars['String']>;
  iconHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  iconHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  iconHash_not_starts_with?: InputMaybe<Scalars['String']>;
  iconHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  iconHash_starts_with?: InputMaybe<Scalars['String']>;
  iconHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_?: InputMaybe<Workspace_Filter>;
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

export enum Token_OrderBy {
  Address = 'address',
  ChainId = 'chainId',
  Decimal = 'decimal',
  IconHash = 'iconHash',
  Id = 'id',
  Label = 'label',
  Workspace = 'workspace'
}

/** Schema for a Workspace or DAO */
export type Workspace = {
  __typename?: 'Workspace';
  /** General info about the workspace */
  about: Scalars['String'];
  /** Quick description of the workspace */
  bio: Scalars['String'];
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
  /** timestamp of when the latest grant was posted */
  mostRecentGrantPostedAtS: Scalars['Int'];
  /** total number of applications the DAO has received */
  numberOfApplications: Scalars['Int'];
  /** total number of applications the DAO has accepted */
  numberOfApplicationsSelected: Scalars['Int'];
  /** Address of the owner of the workspace */
  ownerId: Scalars['Bytes'];
  partners: Array<Partner>;
  /** Workpsace safe */
  safe?: Maybe<WorkspaceSafe>;
  /** List of social media handles of the workspace */
  socials: Array<Social>;
  /** List of supported networks of the workspace */
  supportedNetworks: Array<SupportedNetwork>;
  /** Title of the workspace */
  title: Scalars['String'];
  /** Custom tokens setup by the workspace */
  tokens: Array<Token>;
  /** total grant funding committed in USD */
  totalGrantFundingCommittedUSD: Scalars['Int'];
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
export type WorkspacePartnersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Partner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Partner_Filter>;
};


/** Schema for a Workspace or DAO */
export type WorkspaceSocialsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Social_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Social_Filter>;
};


/** Schema for a Workspace or DAO */
export type WorkspaceTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  /** What permissions the member has on the workspace */
  accessLevel: WorkspaceMemberAccessLevel;
  /** the ID of the member itself */
  actorId: Scalars['Bytes'];
  /** When the member was added */
  addedAt: Scalars['Int'];
  /** Address of the workspace member who added this member */
  addedBy: WorkspaceMember;
  email?: Maybe<Scalars['String']>;
  /** Full name of the user */
  fullName?: Maybe<Scalars['String']>;
  /** Globally unique ID of the member */
  id: Scalars['ID'];
  /** Last known hash of the TX made by this user */
  lastKnownTxHash: Scalars['Bytes'];
  /** Timestamp of when the last review was done */
  lastReviewSubmittedAt: Scalars['Int'];
  /** The review IDs for which this member is owed a payment */
  outstandingReviewIds: Array<Scalars['String']>;
  /** Hash of profile picture on IPFS */
  profilePictureIpfsHash?: Maybe<Scalars['String']>;
  /** Public key of the workspace member */
  publicKey?: Maybe<Scalars['String']>;
  /** If the member was removed, when */
  removedAt?: Maybe<Scalars['Int']>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_?: InputMaybe<WorkspaceMember_Filter>;
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
  fullName?: InputMaybe<Scalars['String']>;
  fullName_contains?: InputMaybe<Scalars['String']>;
  fullName_contains_nocase?: InputMaybe<Scalars['String']>;
  fullName_ends_with?: InputMaybe<Scalars['String']>;
  fullName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fullName_gt?: InputMaybe<Scalars['String']>;
  fullName_gte?: InputMaybe<Scalars['String']>;
  fullName_in?: InputMaybe<Array<Scalars['String']>>;
  fullName_lt?: InputMaybe<Scalars['String']>;
  fullName_lte?: InputMaybe<Scalars['String']>;
  fullName_not?: InputMaybe<Scalars['String']>;
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  fullName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fullName_not_ends_with?: InputMaybe<Scalars['String']>;
  fullName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fullName_not_in?: InputMaybe<Array<Scalars['String']>>;
  fullName_not_starts_with?: InputMaybe<Scalars['String']>;
  fullName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fullName_starts_with?: InputMaybe<Scalars['String']>;
  fullName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastKnownTxHash?: InputMaybe<Scalars['Bytes']>;
  lastKnownTxHash_contains?: InputMaybe<Scalars['Bytes']>;
  lastKnownTxHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lastKnownTxHash_not?: InputMaybe<Scalars['Bytes']>;
  lastKnownTxHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  lastKnownTxHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lastReviewSubmittedAt?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_gt?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_gte?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastReviewSubmittedAt_lt?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_lte?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_not?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  outstandingReviewIds?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_contains?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_not?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  profilePictureIpfsHash?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_contains?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_gt?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_gte?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  profilePictureIpfsHash_lt?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_lte?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_not?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  profilePictureIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  profilePictureIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  removedAt?: InputMaybe<Scalars['Int']>;
  removedAt_gt?: InputMaybe<Scalars['Int']>;
  removedAt_gte?: InputMaybe<Scalars['Int']>;
  removedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  removedAt_lt?: InputMaybe<Scalars['Int']>;
  removedAt_lte?: InputMaybe<Scalars['Int']>;
  removedAt_not?: InputMaybe<Scalars['Int']>;
  removedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_?: InputMaybe<Workspace_Filter>;
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
  AddedBy = 'addedBy',
  Email = 'email',
  FullName = 'fullName',
  Id = 'id',
  LastKnownTxHash = 'lastKnownTxHash',
  LastReviewSubmittedAt = 'lastReviewSubmittedAt',
  OutstandingReviewIds = 'outstandingReviewIds',
  ProfilePictureIpfsHash = 'profilePictureIpfsHash',
  PublicKey = 'publicKey',
  RemovedAt = 'removedAt',
  UpdatedAt = 'updatedAt',
  Workspace = 'workspace'
}

export type WorkspaceSafe = {
  __typename?: 'WorkspaceSafe';
  /** Address of the safe */
  address: Scalars['String'];
  /** Chain ID of the chain */
  chainId: Scalars['BigInt'];
  id: Scalars['ID'];
  /** Workspace of the space */
  workspace: Workspace;
};

export type WorkspaceSafe_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_?: InputMaybe<Workspace_Filter>;
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

export enum WorkspaceSafe_OrderBy {
  Address = 'address',
  ChainId = 'chainId',
  Id = 'id',
  Workspace = 'workspace'
}

export type Workspace_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  bio?: InputMaybe<Scalars['String']>;
  bio_contains?: InputMaybe<Scalars['String']>;
  bio_contains_nocase?: InputMaybe<Scalars['String']>;
  bio_ends_with?: InputMaybe<Scalars['String']>;
  bio_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bio_gt?: InputMaybe<Scalars['String']>;
  bio_gte?: InputMaybe<Scalars['String']>;
  bio_in?: InputMaybe<Array<Scalars['String']>>;
  bio_lt?: InputMaybe<Scalars['String']>;
  bio_lte?: InputMaybe<Scalars['String']>;
  bio_not?: InputMaybe<Scalars['String']>;
  bio_not_contains?: InputMaybe<Scalars['String']>;
  bio_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  bio_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bio_not_in?: InputMaybe<Array<Scalars['String']>>;
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  bio_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bio_starts_with?: InputMaybe<Scalars['String']>;
  bio_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  members_?: InputMaybe<WorkspaceMember_Filter>;
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
  mostRecentGrantPostedAtS?: InputMaybe<Scalars['Int']>;
  mostRecentGrantPostedAtS_gt?: InputMaybe<Scalars['Int']>;
  mostRecentGrantPostedAtS_gte?: InputMaybe<Scalars['Int']>;
  mostRecentGrantPostedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  mostRecentGrantPostedAtS_lt?: InputMaybe<Scalars['Int']>;
  mostRecentGrantPostedAtS_lte?: InputMaybe<Scalars['Int']>;
  mostRecentGrantPostedAtS_not?: InputMaybe<Scalars['Int']>;
  mostRecentGrantPostedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfApplications?: InputMaybe<Scalars['Int']>;
  numberOfApplicationsSelected?: InputMaybe<Scalars['Int']>;
  numberOfApplicationsSelected_gt?: InputMaybe<Scalars['Int']>;
  numberOfApplicationsSelected_gte?: InputMaybe<Scalars['Int']>;
  numberOfApplicationsSelected_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfApplicationsSelected_lt?: InputMaybe<Scalars['Int']>;
  numberOfApplicationsSelected_lte?: InputMaybe<Scalars['Int']>;
  numberOfApplicationsSelected_not?: InputMaybe<Scalars['Int']>;
  numberOfApplicationsSelected_not_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfApplications_gt?: InputMaybe<Scalars['Int']>;
  numberOfApplications_gte?: InputMaybe<Scalars['Int']>;
  numberOfApplications_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfApplications_lt?: InputMaybe<Scalars['Int']>;
  numberOfApplications_lte?: InputMaybe<Scalars['Int']>;
  numberOfApplications_not?: InputMaybe<Scalars['Int']>;
  numberOfApplications_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ownerId?: InputMaybe<Scalars['Bytes']>;
  ownerId_contains?: InputMaybe<Scalars['Bytes']>;
  ownerId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ownerId_not?: InputMaybe<Scalars['Bytes']>;
  ownerId_not_contains?: InputMaybe<Scalars['Bytes']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  partners?: InputMaybe<Array<Scalars['String']>>;
  partners_?: InputMaybe<Partner_Filter>;
  partners_contains?: InputMaybe<Array<Scalars['String']>>;
  partners_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  partners_not?: InputMaybe<Array<Scalars['String']>>;
  partners_not_contains?: InputMaybe<Array<Scalars['String']>>;
  partners_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  safe_?: InputMaybe<WorkspaceSafe_Filter>;
  socials?: InputMaybe<Array<Scalars['String']>>;
  socials_?: InputMaybe<Social_Filter>;
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
  tokens_?: InputMaybe<Token_Filter>;
  totalGrantFundingCommittedUSD?: InputMaybe<Scalars['Int']>;
  totalGrantFundingCommittedUSD_gt?: InputMaybe<Scalars['Int']>;
  totalGrantFundingCommittedUSD_gte?: InputMaybe<Scalars['Int']>;
  totalGrantFundingCommittedUSD_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGrantFundingCommittedUSD_lt?: InputMaybe<Scalars['Int']>;
  totalGrantFundingCommittedUSD_lte?: InputMaybe<Scalars['Int']>;
  totalGrantFundingCommittedUSD_not?: InputMaybe<Scalars['Int']>;
  totalGrantFundingCommittedUSD_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  Bio = 'bio',
  CoverImageIpfsHash = 'coverImageIpfsHash',
  CreatedAtS = 'createdAtS',
  Id = 'id',
  LogoIpfsHash = 'logoIpfsHash',
  Members = 'members',
  MetadataHash = 'metadataHash',
  MostRecentGrantPostedAtS = 'mostRecentGrantPostedAtS',
  NumberOfApplications = 'numberOfApplications',
  NumberOfApplicationsSelected = 'numberOfApplicationsSelected',
  OwnerId = 'ownerId',
  Partners = 'partners',
  Safe = 'safe',
  Socials = 'socials',
  SupportedNetworks = 'supportedNetworks',
  Title = 'title',
  Tokens = 'tokens',
  TotalGrantFundingCommittedUsd = 'totalGrantFundingCommittedUSD',
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

export type GetGrantApplicationsQueryVariables = Exact<{
  applicationIDs?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type GetGrantApplicationsQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, grant: { __typename?: 'Grant', workspace: { __typename?: 'Workspace', id: string, title: string, tokens: Array<{ __typename?: 'Token', id: string, label: string, address: string, decimal: number }> }, reward: { __typename?: 'Reward', id: string, asset: string } }, externalLinks: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', id: string, value: string }> }>, fields: Array<{ __typename?: 'GrantFieldAnswer', id: string, field: { __typename?: 'GrantField', id: string, title: string, isPii: boolean, possibleValues?: Array<string> | null, inputType: GrantFieldInputType }, values: Array<{ __typename?: 'GrantFieldAnswerItem', id: string, value: string }> }>, milestones: Array<{ __typename?: 'ApplicationMilestone', id: string, title: string, amount: string }> }> };

export type OnApplicationAcceptQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnApplicationAcceptQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', workspace: { __typename?: 'Workspace', id: string, title: string, members: Array<{ __typename?: 'WorkspaceMember', email?: string | null, actorId: string }> } } }> };

export type OnApplicationRejectQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnApplicationRejectQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, feedbackDao?: string | null, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', workspace: { __typename?: 'Workspace', id: string, title: string, members: Array<{ __typename?: 'WorkspaceMember', email?: string | null, actorId: string }> } } }> };

export type OnApplicationResubmitQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnApplicationResubmitQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', workspace: { __typename?: 'Workspace', id: string, title: string } } }> };

export type OnApplicationSubmitQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnApplicationSubmitQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', id: string, title: string } } }> };

export type OnAskedToResubmitQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnAskedToResubmitQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, feedbackDao?: string | null, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', id: string, title: string, members: Array<{ __typename?: 'WorkspaceMember', email?: string | null, actorId: string }> } } }> };

export type OnFundsReceivedQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnFundsReceivedQuery = { __typename?: 'Query', fundsTransfers: Array<{ __typename?: 'FundsTransfer', amount: string, application?: { __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', id: string, title: string, members: Array<{ __typename?: 'WorkspaceMember', email?: string | null, actorId: string }>, tokens: Array<{ __typename?: 'Token', id: string, label: string, address: string, decimal: number }> }, reward: { __typename?: 'Reward', asset: string } } } | null }> };

export type OnMilestoneAcceptedQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnMilestoneAcceptedQuery = { __typename?: 'Query', applicationMilestones: Array<{ __typename?: 'ApplicationMilestone', application: { __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', id: string, title: string } } } }> };

export type OnNewGrantPostedQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnNewGrantPostedQuery = { __typename?: 'Query', grants: Array<{ __typename?: 'Grant', id: string, title: string, workspace: { __typename?: 'Workspace', title: string } }>, grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }> }> };

export type OnApplicationResubmissionQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnApplicationResubmissionQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', id: string, title: string, members: Array<{ __typename?: 'WorkspaceMember', email?: string | null, actorId: string }> } } }> };

export type OnApplicationSubmissionQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnApplicationSubmissionQuery = { __typename?: 'Query', grantApplications: Array<{ __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', id: string, title: string, members: Array<{ __typename?: 'WorkspaceMember', email?: string | null, actorId: string }> } } }> };

export type OnInviteMemberQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnInviteMemberQuery = { __typename?: 'Query', workspaceMembers: Array<{ __typename?: 'WorkspaceMember', email?: string | null, accessLevel: WorkspaceMemberAccessLevel, updatedAt: number, workspace: { __typename?: 'Workspace', id: string, title: string } }> };

export type OnMilestoneUpdatedQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type OnMilestoneUpdatedQuery = { __typename?: 'Query', applicationMilestones: Array<{ __typename?: 'ApplicationMilestone', application: { __typename?: 'GrantApplication', id: string, applicantId: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, applicantName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', value: string }> }>, grant: { __typename?: 'Grant', title: string, workspace: { __typename?: 'Workspace', id: string, title: string, members: Array<{ __typename?: 'WorkspaceMember', email?: string | null, actorId: string }> } } } }> };

export type GetMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMetadataQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', deployment: string, block: { __typename?: '_Block_', number: number } } | null };


export const GetGrantApplicationsDocument = gql`
    query GetGrantApplications($applicationIDs: [ID!]) {
  grantApplications(subgraphError: allow, where: {id_in: $applicationIDs}) {
    id
    grant {
      workspace {
        id
        title
        tokens {
          id
          label
          address
          decimal
        }
      }
      reward {
        id
        asset
      }
    }
    externalLinks: fields(where: {field_contains: "External"}) {
      values {
        id
        value
      }
    }
    fields {
      id
      field {
        id
        title
        isPii
        possibleValues
        inputType
      }
      values {
        id
        value
      }
    }
    milestones {
      id
      title
      amount
    }
  }
}
    `;

/**
 * __useGetGrantApplicationsQuery__
 *
 * To run a query within a React component, call `useGetGrantApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGrantApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGrantApplicationsQuery({
 *   variables: {
 *      applicationIDs: // value for 'applicationIDs'
 *   },
 * });
 */
export function useGetGrantApplicationsQuery(baseOptions?: Apollo.QueryHookOptions<GetGrantApplicationsQuery, GetGrantApplicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGrantApplicationsQuery, GetGrantApplicationsQueryVariables>(GetGrantApplicationsDocument, options);
      }
export function useGetGrantApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGrantApplicationsQuery, GetGrantApplicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGrantApplicationsQuery, GetGrantApplicationsQueryVariables>(GetGrantApplicationsDocument, options);
        }
export type GetGrantApplicationsQueryHookResult = ReturnType<typeof useGetGrantApplicationsQuery>;
export type GetGrantApplicationsLazyQueryHookResult = ReturnType<typeof useGetGrantApplicationsLazyQuery>;
export type GetGrantApplicationsQueryResult = Apollo.QueryResult<GetGrantApplicationsQuery, GetGrantApplicationsQueryVariables>;
export const OnApplicationAcceptDocument = gql`
    query OnApplicationAccept($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: approved}
  ) {
    id
    applicantId
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
        id
        title
        members(where: {accessLevel: admin, email_not: null}) {
          email
          actorId
        }
      }
    }
  }
}
    `;

/**
 * __useOnApplicationAcceptQuery__
 *
 * To run a query within a React component, call `useOnApplicationAcceptQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnApplicationAcceptQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnApplicationAcceptQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnApplicationAcceptQuery(baseOptions: Apollo.QueryHookOptions<OnApplicationAcceptQuery, OnApplicationAcceptQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnApplicationAcceptQuery, OnApplicationAcceptQueryVariables>(OnApplicationAcceptDocument, options);
      }
export function useOnApplicationAcceptLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnApplicationAcceptQuery, OnApplicationAcceptQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnApplicationAcceptQuery, OnApplicationAcceptQueryVariables>(OnApplicationAcceptDocument, options);
        }
export type OnApplicationAcceptQueryHookResult = ReturnType<typeof useOnApplicationAcceptQuery>;
export type OnApplicationAcceptLazyQueryHookResult = ReturnType<typeof useOnApplicationAcceptLazyQuery>;
export type OnApplicationAcceptQueryResult = Apollo.QueryResult<OnApplicationAcceptQuery, OnApplicationAcceptQueryVariables>;
export const OnApplicationRejectDocument = gql`
    query OnApplicationReject($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: rejected}
  ) {
    id
    applicantId
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
    feedbackDao
    grant {
      workspace {
        id
        title
        members(where: {accessLevel: admin, email_not: null}) {
          email
          actorId
        }
      }
    }
  }
}
    `;

/**
 * __useOnApplicationRejectQuery__
 *
 * To run a query within a React component, call `useOnApplicationRejectQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnApplicationRejectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnApplicationRejectQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnApplicationRejectQuery(baseOptions: Apollo.QueryHookOptions<OnApplicationRejectQuery, OnApplicationRejectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnApplicationRejectQuery, OnApplicationRejectQueryVariables>(OnApplicationRejectDocument, options);
      }
export function useOnApplicationRejectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnApplicationRejectQuery, OnApplicationRejectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnApplicationRejectQuery, OnApplicationRejectQueryVariables>(OnApplicationRejectDocument, options);
        }
export type OnApplicationRejectQueryHookResult = ReturnType<typeof useOnApplicationRejectQuery>;
export type OnApplicationRejectLazyQueryHookResult = ReturnType<typeof useOnApplicationRejectLazyQuery>;
export type OnApplicationRejectQueryResult = Apollo.QueryResult<OnApplicationRejectQuery, OnApplicationRejectQueryVariables>;
export const OnApplicationResubmitDocument = gql`
    query OnApplicationResubmit($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: submitted, version_gt: 1}
  ) {
    id
    applicantId
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
        id
        title
      }
    }
  }
}
    `;

/**
 * __useOnApplicationResubmitQuery__
 *
 * To run a query within a React component, call `useOnApplicationResubmitQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnApplicationResubmitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnApplicationResubmitQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnApplicationResubmitQuery(baseOptions: Apollo.QueryHookOptions<OnApplicationResubmitQuery, OnApplicationResubmitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnApplicationResubmitQuery, OnApplicationResubmitQueryVariables>(OnApplicationResubmitDocument, options);
      }
export function useOnApplicationResubmitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnApplicationResubmitQuery, OnApplicationResubmitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnApplicationResubmitQuery, OnApplicationResubmitQueryVariables>(OnApplicationResubmitDocument, options);
        }
export type OnApplicationResubmitQueryHookResult = ReturnType<typeof useOnApplicationResubmitQuery>;
export type OnApplicationResubmitLazyQueryHookResult = ReturnType<typeof useOnApplicationResubmitLazyQuery>;
export type OnApplicationResubmitQueryResult = Apollo.QueryResult<OnApplicationResubmitQuery, OnApplicationResubmitQueryVariables>;
export const OnApplicationSubmitDocument = gql`
    query OnApplicationSubmit($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: submitted, version: 1}
  ) {
    id
    applicantId
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
        id
        title
      }
    }
  }
}
    `;

/**
 * __useOnApplicationSubmitQuery__
 *
 * To run a query within a React component, call `useOnApplicationSubmitQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnApplicationSubmitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnApplicationSubmitQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnApplicationSubmitQuery(baseOptions: Apollo.QueryHookOptions<OnApplicationSubmitQuery, OnApplicationSubmitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnApplicationSubmitQuery, OnApplicationSubmitQueryVariables>(OnApplicationSubmitDocument, options);
      }
export function useOnApplicationSubmitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnApplicationSubmitQuery, OnApplicationSubmitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnApplicationSubmitQuery, OnApplicationSubmitQueryVariables>(OnApplicationSubmitDocument, options);
        }
export type OnApplicationSubmitQueryHookResult = ReturnType<typeof useOnApplicationSubmitQuery>;
export type OnApplicationSubmitLazyQueryHookResult = ReturnType<typeof useOnApplicationSubmitLazyQuery>;
export type OnApplicationSubmitQueryResult = Apollo.QueryResult<OnApplicationSubmitQuery, OnApplicationSubmitQueryVariables>;
export const OnAskedToResubmitDocument = gql`
    query OnAskedToResubmit($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: resubmit}
  ) {
    id
    applicantId
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
    feedbackDao
    grant {
      title
      workspace {
        id
        title
        members(where: {accessLevel: admin, email_not: null}) {
          email
          actorId
        }
      }
    }
  }
}
    `;

/**
 * __useOnAskedToResubmitQuery__
 *
 * To run a query within a React component, call `useOnAskedToResubmitQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnAskedToResubmitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnAskedToResubmitQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnAskedToResubmitQuery(baseOptions: Apollo.QueryHookOptions<OnAskedToResubmitQuery, OnAskedToResubmitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnAskedToResubmitQuery, OnAskedToResubmitQueryVariables>(OnAskedToResubmitDocument, options);
      }
export function useOnAskedToResubmitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnAskedToResubmitQuery, OnAskedToResubmitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnAskedToResubmitQuery, OnAskedToResubmitQueryVariables>(OnAskedToResubmitDocument, options);
        }
export type OnAskedToResubmitQueryHookResult = ReturnType<typeof useOnAskedToResubmitQuery>;
export type OnAskedToResubmitLazyQueryHookResult = ReturnType<typeof useOnAskedToResubmitLazyQuery>;
export type OnAskedToResubmitQueryResult = Apollo.QueryResult<OnAskedToResubmitQuery, OnAskedToResubmitQueryVariables>;
export const OnFundsReceivedDocument = gql`
    query OnFundsReceived($lowerLimit: Int!, $upperLimit: Int!) {
  fundsTransfers(
    where: {createdAtS_gt: $lowerLimit, createdAtS_lte: $upperLimit, type: funds_disbursed}
  ) {
    application {
      id
      applicantId
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
          id
          title
          members(where: {accessLevel: admin, email_not: null}) {
            email
            actorId
          }
          tokens {
            id
            label
            address
            decimal
          }
        }
        reward {
          asset
        }
      }
    }
    amount
  }
}
    `;

/**
 * __useOnFundsReceivedQuery__
 *
 * To run a query within a React component, call `useOnFundsReceivedQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnFundsReceivedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnFundsReceivedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnFundsReceivedQuery(baseOptions: Apollo.QueryHookOptions<OnFundsReceivedQuery, OnFundsReceivedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnFundsReceivedQuery, OnFundsReceivedQueryVariables>(OnFundsReceivedDocument, options);
      }
export function useOnFundsReceivedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnFundsReceivedQuery, OnFundsReceivedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnFundsReceivedQuery, OnFundsReceivedQueryVariables>(OnFundsReceivedDocument, options);
        }
export type OnFundsReceivedQueryHookResult = ReturnType<typeof useOnFundsReceivedQuery>;
export type OnFundsReceivedLazyQueryHookResult = ReturnType<typeof useOnFundsReceivedLazyQuery>;
export type OnFundsReceivedQueryResult = Apollo.QueryResult<OnFundsReceivedQuery, OnFundsReceivedQueryVariables>;
export const OnMilestoneAcceptedDocument = gql`
    query OnMilestoneAccepted($lowerLimit: Int!, $upperLimit: Int!) {
  applicationMilestones(
    subgraphError: allow
    where: {state: approved, updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit}
  ) {
    application {
      id
      applicantId
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
          id
          title
        }
      }
    }
  }
}
    `;

/**
 * __useOnMilestoneAcceptedQuery__
 *
 * To run a query within a React component, call `useOnMilestoneAcceptedQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnMilestoneAcceptedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMilestoneAcceptedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnMilestoneAcceptedQuery(baseOptions: Apollo.QueryHookOptions<OnMilestoneAcceptedQuery, OnMilestoneAcceptedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnMilestoneAcceptedQuery, OnMilestoneAcceptedQueryVariables>(OnMilestoneAcceptedDocument, options);
      }
export function useOnMilestoneAcceptedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnMilestoneAcceptedQuery, OnMilestoneAcceptedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnMilestoneAcceptedQuery, OnMilestoneAcceptedQueryVariables>(OnMilestoneAcceptedDocument, options);
        }
export type OnMilestoneAcceptedQueryHookResult = ReturnType<typeof useOnMilestoneAcceptedQuery>;
export type OnMilestoneAcceptedLazyQueryHookResult = ReturnType<typeof useOnMilestoneAcceptedLazyQuery>;
export type OnMilestoneAcceptedQueryResult = Apollo.QueryResult<OnMilestoneAcceptedQuery, OnMilestoneAcceptedQueryVariables>;
export const OnNewGrantPostedDocument = gql`
    query OnNewGrantPosted($lowerLimit: Int!, $upperLimit: Int!) {
  grants(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit}
  ) {
    id
    title
    workspace {
      title
    }
  }
  grantApplications(subgraphError: allow) {
    id
    applicantId
    applicantEmail: fields(where: {field_ends_with: "applicantEmail"}) {
      values(where: {value_not: null}) {
        value
      }
    }
    applicantName: fields(where: {field_ends_with: "applicantName"}) {
      values(where: {value_not: null}) {
        value
      }
    }
  }
}
    `;

/**
 * __useOnNewGrantPostedQuery__
 *
 * To run a query within a React component, call `useOnNewGrantPostedQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnNewGrantPostedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnNewGrantPostedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnNewGrantPostedQuery(baseOptions: Apollo.QueryHookOptions<OnNewGrantPostedQuery, OnNewGrantPostedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnNewGrantPostedQuery, OnNewGrantPostedQueryVariables>(OnNewGrantPostedDocument, options);
      }
export function useOnNewGrantPostedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnNewGrantPostedQuery, OnNewGrantPostedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnNewGrantPostedQuery, OnNewGrantPostedQueryVariables>(OnNewGrantPostedDocument, options);
        }
export type OnNewGrantPostedQueryHookResult = ReturnType<typeof useOnNewGrantPostedQuery>;
export type OnNewGrantPostedLazyQueryHookResult = ReturnType<typeof useOnNewGrantPostedLazyQuery>;
export type OnNewGrantPostedQueryResult = Apollo.QueryResult<OnNewGrantPostedQuery, OnNewGrantPostedQueryVariables>;
export const OnApplicationResubmissionDocument = gql`
    query OnApplicationResubmission($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: submitted, version_gt: 1}
  ) {
    id
    applicantId
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
        id
        title
        members(where: {accessLevel: admin, email_not: null}) {
          email
          actorId
        }
      }
    }
  }
}
    `;

/**
 * __useOnApplicationResubmissionQuery__
 *
 * To run a query within a React component, call `useOnApplicationResubmissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnApplicationResubmissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnApplicationResubmissionQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnApplicationResubmissionQuery(baseOptions: Apollo.QueryHookOptions<OnApplicationResubmissionQuery, OnApplicationResubmissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnApplicationResubmissionQuery, OnApplicationResubmissionQueryVariables>(OnApplicationResubmissionDocument, options);
      }
export function useOnApplicationResubmissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnApplicationResubmissionQuery, OnApplicationResubmissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnApplicationResubmissionQuery, OnApplicationResubmissionQueryVariables>(OnApplicationResubmissionDocument, options);
        }
export type OnApplicationResubmissionQueryHookResult = ReturnType<typeof useOnApplicationResubmissionQuery>;
export type OnApplicationResubmissionLazyQueryHookResult = ReturnType<typeof useOnApplicationResubmissionLazyQuery>;
export type OnApplicationResubmissionQueryResult = Apollo.QueryResult<OnApplicationResubmissionQuery, OnApplicationResubmissionQueryVariables>;
export const OnApplicationSubmissionDocument = gql`
    query OnApplicationSubmission($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, state: submitted, version: 1}
  ) {
    id
    applicantId
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
        id
        title
        members(where: {accessLevel: admin, email_not: null}) {
          email
          actorId
        }
      }
    }
  }
}
    `;

/**
 * __useOnApplicationSubmissionQuery__
 *
 * To run a query within a React component, call `useOnApplicationSubmissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnApplicationSubmissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnApplicationSubmissionQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnApplicationSubmissionQuery(baseOptions: Apollo.QueryHookOptions<OnApplicationSubmissionQuery, OnApplicationSubmissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnApplicationSubmissionQuery, OnApplicationSubmissionQueryVariables>(OnApplicationSubmissionDocument, options);
      }
export function useOnApplicationSubmissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnApplicationSubmissionQuery, OnApplicationSubmissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnApplicationSubmissionQuery, OnApplicationSubmissionQueryVariables>(OnApplicationSubmissionDocument, options);
        }
export type OnApplicationSubmissionQueryHookResult = ReturnType<typeof useOnApplicationSubmissionQuery>;
export type OnApplicationSubmissionLazyQueryHookResult = ReturnType<typeof useOnApplicationSubmissionLazyQuery>;
export type OnApplicationSubmissionQueryResult = Apollo.QueryResult<OnApplicationSubmissionQuery, OnApplicationSubmissionQueryVariables>;
export const OnInviteMemberDocument = gql`
    query OnInviteMember($lowerLimit: Int!, $upperLimit: Int!) {
  workspaceMembers(
    subgraphError: allow
    where: {updatedAt_gt: $lowerLimit, updatedAt_lte: $upperLimit, email_not: null}
  ) {
    email
    workspace {
      id
      title
    }
    accessLevel
    updatedAt
  }
}
    `;

/**
 * __useOnInviteMemberQuery__
 *
 * To run a query within a React component, call `useOnInviteMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnInviteMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnInviteMemberQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnInviteMemberQuery(baseOptions: Apollo.QueryHookOptions<OnInviteMemberQuery, OnInviteMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnInviteMemberQuery, OnInviteMemberQueryVariables>(OnInviteMemberDocument, options);
      }
export function useOnInviteMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnInviteMemberQuery, OnInviteMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnInviteMemberQuery, OnInviteMemberQueryVariables>(OnInviteMemberDocument, options);
        }
export type OnInviteMemberQueryHookResult = ReturnType<typeof useOnInviteMemberQuery>;
export type OnInviteMemberLazyQueryHookResult = ReturnType<typeof useOnInviteMemberLazyQuery>;
export type OnInviteMemberQueryResult = Apollo.QueryResult<OnInviteMemberQuery, OnInviteMemberQueryVariables>;
export const OnMilestoneUpdatedDocument = gql`
    query OnMilestoneUpdated($lowerLimit: Int!, $upperLimit: Int!) {
  applicationMilestones(
    subgraphError: allow
    where: {state: requested, updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit}
  ) {
    application {
      id
      applicantId
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
          id
          title
          members(where: {accessLevel: admin, email_not: null}) {
            email
            actorId
          }
        }
      }
    }
  }
}
    `;

/**
 * __useOnMilestoneUpdatedQuery__
 *
 * To run a query within a React component, call `useOnMilestoneUpdatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnMilestoneUpdatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMilestoneUpdatedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useOnMilestoneUpdatedQuery(baseOptions: Apollo.QueryHookOptions<OnMilestoneUpdatedQuery, OnMilestoneUpdatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnMilestoneUpdatedQuery, OnMilestoneUpdatedQueryVariables>(OnMilestoneUpdatedDocument, options);
      }
export function useOnMilestoneUpdatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnMilestoneUpdatedQuery, OnMilestoneUpdatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnMilestoneUpdatedQuery, OnMilestoneUpdatedQueryVariables>(OnMilestoneUpdatedDocument, options);
        }
export type OnMilestoneUpdatedQueryHookResult = ReturnType<typeof useOnMilestoneUpdatedQuery>;
export type OnMilestoneUpdatedLazyQueryHookResult = ReturnType<typeof useOnMilestoneUpdatedLazyQuery>;
export type OnMilestoneUpdatedQueryResult = Apollo.QueryResult<OnMilestoneUpdatedQuery, OnMilestoneUpdatedQueryVariables>;
export const GetMetadataDocument = gql`
    query getMetadata {
  _meta {
    block {
      number
    }
    deployment
  }
}
    `;

/**
 * __useGetMetadataQuery__
 *
 * To run a query within a React component, call `useGetMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMetadataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMetadataQuery(baseOptions?: Apollo.QueryHookOptions<GetMetadataQuery, GetMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMetadataQuery, GetMetadataQueryVariables>(GetMetadataDocument, options);
      }
export function useGetMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMetadataQuery, GetMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMetadataQuery, GetMetadataQueryVariables>(GetMetadataDocument, options);
        }
export type GetMetadataQueryHookResult = ReturnType<typeof useGetMetadataQuery>;
export type GetMetadataLazyQueryHookResult = ReturnType<typeof useGetMetadataLazyQuery>;
export type GetMetadataQueryResult = Apollo.QueryResult<GetMetadataQuery, GetMetadataQueryVariables>;