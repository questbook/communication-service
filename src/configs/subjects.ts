const subjects = {
	applicant: {
		ApplicationReject: '{{daoName}} - Your application has been rejected',
		ApplicationResubmit: '{{daoName}} - Request to resubmit your application',
		ApplicationSubmitted: '{{daoName}} - Your application is under review',
		FundsReceived: '{{daoName}} - Awarding Grant Amount',
		NewGrantPosted: '{{daoName}} - Inviting applications for {{grantName}}',
	},
	dao: {
		ApplicationReceived: '{{grantName}}: New submission as {{projectName}}',
		ApplicationResubmitted: '{{grantName}}: Resubmission as {{projectName}}',
		InviteMember: '{{daoName}}: Invitation to join Grants DAO',
		MilestoneUpdated: '{{grantName}} - Milestone update for {{projectName}}',
	}
}

export default subjects