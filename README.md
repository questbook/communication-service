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

3. Run `npm run generate-templates` to generate the AWS SES compatible templates.

4. Run `npm run deploy-templates` to deploy these templates to SES.

## Project Structure

1. `serverless.yml` in the root directory, specifies the CRON jobs that are run

2. The functions that are executed in the CRON jobs, are specified under the `src` folder.
