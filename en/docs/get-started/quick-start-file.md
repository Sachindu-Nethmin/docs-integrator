---
sidebar_position: 9
title: "Quick Start: File Integration"
description: Process files from FTP, SFTP, or local directories.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Quick start: File integration

**Time:** Under 10 minutes | **What you'll build:** A file integration that watches a directory for new files, processes them, and writes the output.

File integrations are ideal for batch uploads, scheduled file processing, and ETL workflows triggered by files appearing in a folder or FTP server.

## Prerequisites

- [WSO2 Integrator installed](install.md)

## Architecture

<ThemedImage
  alt="Architecture Diagram"
  sources={{
    light: useBaseUrl('/img/get-started/quick-start-file/file-light.svg'),
    dark: useBaseUrl('/img/get-started/quick-start-file/file-dark.svg'),
  }}
/>

## Step 1: Create the project

1. Open WSO2 Integrator.
2. Select **Create New Integration**.
3. Enter the integration name (for example, `LocalFilesIntegration`).
4. Select the project location.
5. Select **Create New Integration**.

## Step 2: Add a file integration artifact

1. In the design view, select **Add Artifact**.
2. Select **Directory Service** under **File integration**.
3. Enter the directory path to monitor (for example, `/user/home/Downloads`).
4. Select **Create**.

Tip: Use a configurable variable for the monitored path so you can change it by environment without code changes.

## Step 3: Configure file event handlers

1. Select **Add Handler** and add the `onCreate` handler.
2. Open the `onCreate` function in the flow designer.
3. Add a **Log Info** node.
4. Set the message to include `File created ` and `event.name`.
5. Repeat the same process for `onDelete` and `onModify` handlers.
6. For `onDelete`, use a message such as `File deleted ` with `event.name`.
7. For `onModify`, use a message such as `File modified ` with `event.name`.

## Step 4: Run and test

1. Select **Run** in the toolbar.
2. Create a file in the monitored directory and verify the `onCreate` log.
3. Modify the file and verify the `onModify` log.
4. Delete the file and verify the `onDelete` log.

Add the following logic in source view to match the same flow:

<Tabs>
<TabItem value="code" label="Source View" default>

```ballerina
import ballerina/file;
import ballerina/log;

configurable string monitorPath = "/user/home/Downloads";

listener file:Listener dirListener = new ({
    path: monitorPath,
    recursive: false
});

service on dirListener {
    remote function onCreate(file:FileEvent event) returns error? {
        log:printInfo("File created " + event.name);
    }

    remote function onDelete(file:FileEvent event) returns error? {
        log:printInfo("File deleted " + event.name);
    }

    remote function onModify(file:FileEvent event) returns error? {
        log:printInfo("File modified " + event.name);
    }
}
```

</TabItem>
<TabItem value="ui" label="Design View">

<ThemedImage
  alt="Design View"
  sources={{
    light: useBaseUrl('/img/get-started/quick-start-file/design-view-light.png'),
    dark: useBaseUrl('/img/get-started/quick-start-file/design-view-dark.png'),
  }}
/>

</TabItem>
</Tabs>

## Supported file sources

| Source | Transport | Use Case |
|---|---|---|
| Local directory | File system | Development, on-premise batch processing |
| FTP | FTP | Legacy file exchange |
| FTPS | FTP over TLS | Secure legacy file exchange |
| SFTP | SSH File Transfer | Secure file exchange |

## What's next

- [Quick start: Automation](quick-start-automation.md) -- Build scheduled jobs
- [Quick start: Integration as API](quick-start-api.md) -- Build an HTTP service
- [File handlers](/docs/develop/integration-artifacts/file-handlers) -- Advanced file processing patterns
