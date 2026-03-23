---
sidebar_position: 11
title: "Quick Start: Build an AI Agent"
description: Create an intelligent AI agent powered by LLMs with tool calling.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Quick start: Build an AI agent

**Time:** Under 15 minutes | **What you'll build:** An AI agent that connects to an LLM, uses tools, and responds to queries through a GraphQL endpoint.

## Prerequisites

- [WSO2 Integrator installed](install.md)
- An OpenAI API key

## Architecture

<ThemedImage
  alt="Architecture Diagram"
  sources={{
    light: useBaseUrl('/img/get-started/quick-start-ai-agent/ai-agent-light.svg'),
    dark: useBaseUrl('/img/get-started/quick-start-ai-agent/ai-agent-dark.svg'),
  }}
/>

## Step 1: Create the project

1. Open WSO2 Integrator.
2. Select **Create New Integration**.
3. Enter the integration name (for example, `AIAgent`).
4. Select the project location.
5. Select **Create New Integration**.

## Step 2: Add a GraphQL service

1. In the project view, select **Add Artifact**.
2. Select **GraphQL Service** under **Integration as API**.
3. Keep the default **Listener** and **Service base path** values.
4. Select **Create**.

## Step 3: Create a GraphQL resolver

1. In the GraphQL design view, select **Create Operations**.
2. In the side panel, select **+** in the **Mutation** section.
3. Set **Field name** to `task`.
4. Select **Add Argument** and configure the input:
  1. Set **Argument name** to `query`.
  2. Set **Argument type** to `string`.
  3. Select **Add**.
5. Set **Field type** to `string|error`.

## Step 4: Configure the inline agent

1. In the side panel, select the `task` operation to open the resolver editor.
2. Select **+** in the flow to open the node panel.
3. Under **Statement**, select **Agent**.
4. Set **Variable name** to `response`.
5. Provide the `query` parameter as the value for the agent input.
6. Configure role and instructions for the assistant behavior.
7. Configure model, memory, and tools. For guidance, see [Chat agents](/docs/genai/agents/chat-agents) and [AI personal assistant sample](/docs/tutorials/samples/ai-personal-assistant).
8. Select **Save**.
9. Select **+** in the flow and add **Return** under **Control**.
10. Set the return expression to `response`.

At this point, the resolver accepts a user query, sends it to the inline agent, and returns the generated response.

:::note
Add at least one query operation to keep the GraphQL service valid. You can add a query named `greet` that returns a static value such as `"welcome"`.
:::

<Tabs>
<TabItem value="code" label="Source View" default>

```ballerina
import ballerina/graphql;
import ballerinax/ai.agent;
import ballerinax/ai.provider.openai;

configurable string openaiKey = ?;

service /graphql on new graphql:Listener(8080) {
  resource function get greet() returns string {
    return "welcome";
  }

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

          string response = check inlineAgent.run(query);
          return response;
    }
}
```

</TabItem>
<TabItem value="ui" label="Design View">

<ThemedImage
  alt="Design View"
  sources={{
    light: useBaseUrl('/img/get-started/quick-start-ai-agent/design-view-light.png'),
    dark: useBaseUrl('/img/get-started/quick-start-ai-agent/design-view-dark.png'),
  }}
/>

</TabItem>
</Tabs>

## Step 5: Configure the API key

Create a `Config.toml` file:

```toml
openaiKey = "<your-openai-api-key>"
```

## Step 6: Run and test

1. Select **Run** in the toolbar.
2. Query the agent with a GraphQL mutation:

```bash
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "mutation Task { task(query: \"Summarize latest emails\") }"}'
```

## What's next

- [GenAI overview](/docs/genai) -- Full guide to AI capabilities
- [Chat agents](/docs/genai/agents/chat-agents) -- Build interactive chat agents
- [MCP servers](/docs/genai/mcp/exposing-mcp-servers) -- Expose tools to AI assistants
- [RAG applications](/docs/genai/rag/architecture-overview) -- Add knowledge bases to agents
