---
sidebar_position: 10
title: Build an Automation
description: Create a scheduled automation in under 10 minutes.
---

# Build an Automation

**Time:** Under 10 minutes · **What you'll build:** A scheduled automation that periodically calls an API and stores the result.

<!-- TODO: Add architecture diagram -->

## Prerequisites

- [Environment set up](install.md)

## Step 1: Create an automation

Add a trigger connector (e.g., "Google Sheets - New Row Added" or "Salesforce - New Opportunity") and authorize its connection.

## Step 2: Configure the schedule

Add an action connector for the target system you want to affect (e.g., "Slack - Post Message" or "Jira - Create Issue").

## Step 3: Call an API and store results

Map fields from the trigger output to the action input (for example, mapping a spreadsheet cell value directly to a Slack message body).

## Step 4: Run and test

1. Click **Run** in the toolbar
2. Wait for the scheduled trigger (or trigger manually)
3. Verify the results are stored

## What's next

- [Automations](/docs/develop/build/automations): Advanced automation patterns
- [Configuration Management](/docs/develop/build/configuration-management): Environment-specific config
