---
sidebar_position: 7
title: Build an API Integration
description: Build an HTTP service that calls an external API in under 10 minutes.
---

# Build an API Integration

**Time:** Under 10 minutes · **What you'll build:** An HTTP service that receives requests, calls an external API, transforms the response, and returns it.

<!-- TODO: Add architecture diagram -->

## Prerequisites

- [Environment set up](install.md)
- [Project created](first-project.md)

## Step 1: Create an HTTP service

Create a new integration project in your IDE. Add an HTTP service and define the resource path and method (e.g., `GET /user/{id}`) using the visual designer.

## Step 2: Define a resource

Add control flow elements like conditional statements or loops to handle complex business logic within your resource block.

## Step 3: Call an external API

Use the visual designer to drag and drop connectors (like Database, REST/HTTP endpoints, or email services) to interact with backend systems.

## Step 4: Transform the response

Transform the data received from backend services into the desired API response format using the visual data mapping tool.

## Step 5: Run and test

1. Click **Run** in the toolbar
2. Open the **Try-It** tool
3. Send a GET request and verify the response

## What's next

- [Build Event Handlers](/docs/develop/build/event-handlers): React to messages from Kafka or RabbitMQ
- [Visual Data Mapper](/docs/develop/transform/data-mapper): Advanced data transformation
- [Unit Testing](/docs/develop/test/unit-testing): Test your integration
