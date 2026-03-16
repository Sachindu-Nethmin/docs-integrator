---
sidebar_position: 8
title: Build an Event Integration
description: React to events from Kafka or RabbitMQ in under 10 minutes.
---

# Build an Event Integration

**Time:** Under 10 minutes · **What you'll build:** An event handler that consumes messages from a message broker and processes them.

## Prerequisites

- [Environment setup](install.md)
- A running Kafka or RabbitMQ instance (or use the provided Docker Compose)

## Step 1: Create an event handler

Add a listener component for the event source you want to consume from, such as RabbitMQ, Kafka, or MQTT.

## Step 2: Configure the message source

Provide the necessary connection parameters in the properties panel, such as host, port, and security credentials for your message broker.

## Step 3: Process the message

Define how the integration should process incoming messages within the `onMessage` event handler block. Route the processed data to another target system if necessary.

In code, this looks like:

```ballerina
import ballerinax/rabbitmq;
import ballerina/log;

listener rabbitmq:Listener orderListener = new (
    host = "localhost",
    port = 5672
);

@rabbitmq:ServiceConfig {queueName: "Orders"}
service on orderListener {
    remote function onMessage(rabbitmq:AnydataMessage message) returns error? {
        log:printInfo("Received order", content = message.content.toString());
    }
}
```


## Step 4: Run and test

1. Select **Run** in the toolbar.
2. The service starts listening for messages on the `Orders` queue.
3. Publish a test message to RabbitMQ using the management UI at `http://localhost:15672` or a client.
4. Check the terminal output for the logged message.

## Supported event sources

| Broker | Ballerina Package |
|---|---|
| **Apache Kafka** | `ballerinax/kafka` |
| **RabbitMQ** | `ballerinax/rabbitmq` |
| **MQTT** | `ballerinax/mqtt` |
| **Azure Service Bus** | `ballerinax/azure.servicebus` |
| **Salesforce** | `ballerinax/salesforce` |
| **GitHub Webhooks** | `ballerinax/github` |


## What's next

- [Event Handlers](/docs/develop/build/event-handlers): Advanced event processing patterns
- [Error Handling](/docs/develop/build/error-handling): Handle failures gracefully
