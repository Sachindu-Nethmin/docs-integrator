---
sidebar_position: 7
title: Build an API Integration
description: Build an HTTP service that calls an external API in under 10 minutes.
---

# Build an API Integration

**Time:** Under 10 minutes · **What you'll build:** An HTTP service that receives requests, calls an external API, transforms the response, and returns it.

## Architecture

```text
Client                    Your Service               External API
  │                      /hello:9090              apis.wso2.com
  │  GET /greeting            │                        │
  │──────────────────────────►│   GET /mi-qsg/v1.0     │
  │                           │───────────────────────►│
  │                           │◄───────────────────────│
  │◄──────────────────────────│   {"message":"Hello"}  │
  │  {"message":"Hello!!!"}   │                        │
```


## Prerequisites

- [Environment setup](install.md)
- [Project created](first-project.md)

## Step 1: Create an HTTP service

Create a new integration project in your IDE. Add an HTTP service and define the resource path and method (e.g., `GET /user/{id}`) using the visual designer.

## Step 2: Define a resource

Add control flow elements like conditional statements or loops to handle complex business logic within your resource block.

## Step 3: Call an external API

Use the visual designer to drag and drop connectors (like Database, REST/HTTP endpoints, or email services) to interact with backend systems.

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


## Step 4: Transform the response

Transform the data received from backend services into the desired API response format using the visual data mapping tool.

## Step 5: Run and test

1. Select **Run** in the toolbar.
2. Open the **Try-It** tool.
3. Send a GET request and verify the response.

```bash
curl http://localhost:9090/hello/greeting
```

Expected response:

```json
{"message": "Hello World!!!"}
```


## What's next

- [Build Event Handlers](/docs/develop/build/event-handlers): React to messages from Kafka or RabbitMQ
- [Visual Data Mapper](/docs/develop/transform/data-mapper): Advanced data transformation
- [Unit Testing](/docs/develop/test/unit-testing): Test your integration
