---
sidebar_position: 5
title: Create Your First Project
description: Generate a new integration project and understand the project structure.
---

# Create Your First Project

Create a new WSO2 Integrator project and understand what gets generated.

## Create the project

1. Open the WSO2 Integrator Development Environment.
2. Open the Project Wizard.
3. Select **Create New Project**.
4. Choose a directory and project name.
5. The environment generates the project structure.

## Project structure

```
my-integration/
├── Ballerina.toml          # Project metadata and dependencies
├── Config.toml             # Environment-specific configuration
├── main.bal                # Main integration file
├── modules/                # Additional modules
├── tests/                  # Test files
└── resources/              # Static resources (schemas, configs)
```

## Run the empty project

1. Select the **Run** button in the IDE toolbar, or
2. Open a terminal and run: `bal run`.
3. You should see the service start successfully.

## What's next

- [Understand the Development Environment](understand-the-ide.md): Learn the visual designer layout
- [Build an API Integration](quick-start-api.md): Your first real integration
