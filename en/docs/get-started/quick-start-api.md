---
sidebar_position: 7
title: "Quick Start: Integration as API"
description: Build an HTTP service that calls an external API and returns a greeting.
---

# Quick start: Integration as API

**Time:** Under 10 minutes | **What you'll build:** An HTTP service that receives requests, calls an external API, and returns the response.

## Prerequisites

- [WSO2 Integrator installed](install.md)

## Architecture

```mermaid
sequenceDiagram
    participant Client
    participant Service as Your Service/hello:9090
    participant API as External API/apis.wso2.com

    Client->>Service: GET /greeting
    Service->>API: GET /mi-qsg/v1.0
    API-->>Service: {"message":"Hello"}
    Service-->>Client: {"message":"Hello!!!"}
```

## Step 1: Create the project

1. Open WSO2 Integrator.
2. Select **Create New Integration**.
3. Enter the integration name (for example, `HelloWorld`).
4. Select **Create Integration**.

## Step 2: Add an HTTP service

1. In the design view, add an **HTTP Service** artifact.
2. Set the base path to `/hello` and port to `9090`.
3. Add a **GET** resource at the path `/greeting`.

## Step 3: Connect to an external API

1. Add an HTTP connection to `https://apis.wso2.com/zvdz/mi-qsg/v1.0`.
2. In the GET resource, invoke the external API and return its response.

In code, this looks like:

```ballerina
import ballerina/http;

final http:Client externalApi = check new ("https://apis.wso2.com/zvdz/mi-qsg/v1.0");

service /hello on new http:Listener(9090) {
    resource function get greeting() returns json|error {
        json response = check externalApi->get("/");
        return response;
    }
}
```

## Step 4: Run and test

1. Select **Run** in the toolbar.
2. Once the service starts, test with curl:

```bash
curl http://localhost:9090/hello/greeting
```

Expected response:

```json
{"message": "Hello World!!!"}
```

You can also use the built-in **Try It** panel in WSO2 Integrator to test the endpoint interactively.

## What's next

- [Quick start: Automation](quick-start-automation.md) -- Build a scheduled job
- [Quick start: AI agent](quick-start-ai-agent.md) -- Build an intelligent agent
- [Quick start: Event integration](quick-start-event.md) -- React to messages from Kafka or RabbitMQ
- [Tutorials](/docs/tutorials) -- End-to-end walkthroughs and patterns
