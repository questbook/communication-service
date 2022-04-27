<!--
title: 'AWS Node Scheduled Cron example in NodeJS'
description: 'This is an example of creating a function that runs as a cron job using the serverless ''schedule'' event.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/0dj0bz'
authorName: 'Rob Abbott'
authorAvatar: 'https://avatars3.githubusercontent.com/u/5679763?v=4&s=140'
-->

# Questbook Communication Service

This service is responsible for sending out emails and integrating all forms of communiation on the Questbook platform.

## Getting started

1. Clone the repository
2. Install the dependencies by running `npm install -S`

## Steps to add a new email template

1. Create a new file in the `templates` directory with the name of the template you want to add, with `.html` as the extension

2. Consturct the HTML design of the email template

3. Run `npm run generate-templates` to generate the AWS SES compatible templates. This also creates a file `src/generated/templateNames.ts` that contains the names of the templates and can be used to maintain consistency across the product.

4. Run `npm run deploy-templates` to deploy these templates to SES.

5. Alternatively, `npm run delete-templates` can precede `npm run deploy-templates` to delete the templates from SES and then deploy them.

## Project Structure

1. `serverless.yml` in the root directory, specifies the CRON jobs that are run

2. The functions that are executed in the CRON jobs, are specified under the `src` folder.

## Information about grouping of files

1. `src/functions/db.ts` - Each query that is periodically executed by the CRON job needs to fetch from the database (DynamoDB in our case), the last timestamp when the query was executed. Also, once a query is executed and emails are sent out, the timestamp needs to be updated in the database. This file provides the helper functions for these two tasks.

2. `src/functions/email.ts` - This file defines a helper function that sends out templated emails in bulk.

3. `src/functions/query.ts` - This file defines a helper function that executes a query on the subgraph. The `executeQuery` function executes a query to retrieve the data specific to a certain time-period (`fromTimestamp` to `toTimestamp`).

4. `src/functions/dao/` - The functions in this folder define all the email triggers that will be received by a DAO admin.
    
    a. `OnApplicationResubmission.ts` - Received by the DAO admins when an application is resubmitted.

    b. `OnApplicationSubmission.ts` - Received by the DAO admins when an application is submitted. 

    c. `OnInviteMember.ts` - Received by the new member when they are invited to join a DAO.

    d. `OnMilestoneUpdated.ts` - Received by the DAO admins when a milestone is updated by an applicant.

5. `src/functions/applicant/` - The functions in this folder define all the email triggers that will be received by an applicant.

    a. `OnApplicationAccept.ts` - Received by an applicant, when their application to a grant is accepted

    b. `OnApplicationReject.ts` - Received by an applicant, when their application to a grant is rejected

    c. `OnApplicationResubmit.ts` - Received by an applicant, when they resubmit their application to a grant.

    d. `OnApplicationSubmit.ts` - Received by an applicant, when they submit their application for the first time to a grant.

    e. `OnAskedToResubmit.ts` - Received by an applicant, when the Grant DAO needs an application they submitted previously, resubmitted.

    f. `OnFundsReceived.ts` - Received by an applicant, when they receive funds for a particular milestone from the Grants DAO.

    g. `OnMilestoneAccept.ts` - Received by an applicant, when their milestone submission is accepted by the Grants DAO.

    h. `OnNewGrantPosted.ts` - Received by all applicants of the app, when a new grant is posted on the platform.
