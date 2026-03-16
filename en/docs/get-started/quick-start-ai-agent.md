---
sidebar_position: 11
title: Build an AI Agent
description: Create an intelligent AI agent powered by LLMs in under 10 minutes.
---

# Build an AI Agent

**Time:** Under 10 minutes · **What you'll build:** An AI agent that connects to an LLM, uses tools, and handles chat interactions.

## Architecture

```text
Client                     GraphQL Service            LLM (OpenAI)
  │                        localhost:8080                  │
  │  mutation Task(query)       │                         │
  │────────────────────────────►│   prompt + tools        │
  │                             │────────────────────────►│
  │                             │◄────────────────────────│
  │◄────────────────────────────│   response              │
  │  { data: { task: "..." } }  │                         │
```


## Prerequisites

- [Environment setup](install.md)
- An API key for an LLM provider (OpenAI, Anthropic, etc.)

## Step 1: Create an agent artifact

Add an "AI Agent" component to your project using the visual designer.

## Step 2: Add a GraphQL service

1. Add a **GraphQL Service** artifact.
2. Add a mutation named `task` that accepts a `query: string` parameter.

## Step 3: Configure the inline agent

1. Inside the mutation, implement an **Inline Agent**.
2. Configure the model provider (WSO2 default or OpenAI).
3. Set up agent memory and tools.

In code:

```ballerina
import ballerina/graphql;
import ballerinax/ai.agent;
import ballerinax/ai.provider.openai;

configurable string openaiKey = ?;

service /graphql on new graphql:Listener(8080) {
    remote function task(string query) returns string|error {
        openai:Client model = check new ({
            auth: {token: openaiKey},
            model: "gpt-4o"
        });

        agent:InlineAgent inlineAgent = check new (
            model: model,
            systemPrompt: "You are a helpful assistant.",
            tools: []
        );

        return check inlineAgent.run(query);
    }
}
```


## Step 3: Define tools

Attach "Tools" to the agent, which can be other integrations or APIs you've built, allowing the agent to fetch data or perform real-world actions.

## Step 4: Test in the playground

1. Deploy the AI agent locally (click **Run**)
2. Open the built-in AI Agent Playground.
3. Send a chat message to verify its reasoning and tool usage, or test with curl.

```bash
curl -X POST http://localhost:8080/graphql   -H "Content-Type: application/json"   -d '{"query": "mutation Task { task(query: \"What is WSO2 Integrator?\") }"}'
```


## What's next

- [AI Agents & Natural Functions](/docs/develop/build/ai-agents): Advanced agent patterns
- [RAG Applications](/docs/develop/build/rag-applications): Add knowledge bases to agents
