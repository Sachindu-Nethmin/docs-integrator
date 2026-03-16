---
sidebar_position: 8
title: Build an Event Integration
description: React to events from Kafka or RabbitMQ in under 10 minutes.
---

# Build an Event Integration

**Time:** Under 10 minutes · **What you'll build:** An event handler that consumes messages from a message broker and processes them.

<!-- TODO: Add architecture diagram -->

## Prerequisites

- [Environment set up](install.md)
- A running Kafka or RabbitMQ instance (or use the provided Docker Compose)

## Step 1: Create an event handler

Add a listener component for the event source you want to consume from, such as RabbitMQ, Kafka, or MQTT.

## Step 2: Configure the message source

Provide the necessary connection parameters in the properties panel, such as host, port, and security credentials for your message broker.

## Step 3: Process the message

Define how the integration should process incoming messages within the `onMessage` event handler block. Route the processed data to another target system if necessary.

## Step 4: Run and test

1. Click **Run** in the toolbar
2. Publish a test message to the broker
3. Verify the event handler processes it

## What's next

- [Event Handlers](/docs/develop/build/event-handlers): Advanced event processing patterns
- [Error Handling](/docs/develop/build/error-handling): Handle failures gracefully
