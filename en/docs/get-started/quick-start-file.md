---
sidebar_position: 9
title: Build a File Integration
description: Process files from FTP/SFTP in under 10 minutes.
---

# Build a File Integration

**Time:** Under 10 minutes · **What you'll build:** A file processor that polls a directory, reads CSV files, transforms the data, and writes the output.



## Prerequisites

- [Environment setup](install.md)

## Step 1: Create a file processor

Choose "Local Files Integration" or a remote file connector (SFTP/FTP) and specify the directory path to be monitored in the configuration.

## Step 2: Configure file polling

Configure handlers for specific file system events you want to react to, such as `onCreate`, `onModify`, and `onDelete`.

## Step 3: Read and transform the file

For each selected event, define the logic to execute (e.g., log the file name, move the file, or read its content to send to an API).

In code, this looks like:

```ballerina
import ballerina/file;
import ballerina/io;
import ballerina/log;

listener file:Listener dirListener = new ({
    path: "/data/inbox",
    recursive: false
});

service on dirListener {
    remote function onCreate(file:FileEvent event) returns error? {
        string filePath = event.name;
        log:printInfo("New file detected", path = filePath);

        // Read CSV content
        string content = check io:fileReadString(filePath);
        log:printInfo("File content", content = content);

        // Process and write output
        check io:fileWriteString("/data/processed/" + filePath, content);
    }
}
```


## Step 4: Write the output

Use the data mapping tool to extract file metadata from the event payload and map it into your target action or output file.

## Step 5: Run and test

1. Select **Run** in the toolbar.
2. Drop a CSV file into the polling directory.
3. Verify the output file is generated.

## What's next

- [File Processing](/docs/develop/build/file-processing): Advanced file handling patterns
- [CSV & Flat File Processing](/docs/develop/transform/csv-flat-file): Format-specific transformations
