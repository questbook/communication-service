const subjects = {
  applicant: {
    OnApplicationAccept: '{{daoName}} - Your application has been accepted',
    OnApplicationReject: '{{daoName}} - Your application has been rejected',
    OnApplicationResubmit: '{{daoName}} - Your application has been resubmitted',
    OnApplicationSubmit: '{{daoName}} - Your application is under review',
    OnAskedToResubmit: '{{daoName}} - Request to resubmit your application',
    OnFundsReceived: '{{daoName}} - Awarding Grant Amount',
    OnMilestoneAccept: '{{daoName}} - Milestone Submission accepted',
    OnNewGrantPosted: '{{daoName}} - Inviting applications for {{grantName}}',
  },
  dao: {
    OnApplicationSubmission: '{{grantName}}: New submission as {{projectName}}',
    OnApplicationResubmission: '{{grantName}}: Resubmission as {{projectName}}',
    OnInviteMember: '{{daoName}}: Invitation to join Grants DAO',
    OnMilestoneUpdated: '{{grantName}} - Milestone update for {{projectName}}',
  },
};

export default subjects;
