---
sidebar_position: 5
title: Create your first project
description: Generate a new integration project and understand the project structure.
---

# Create Your First Project

Create a new WSO2 Integrator project and understand what gets generated.

## Create the project

1. Open WSO2 Integrator.
2. Click on **Create New Project** (or go to **File** > **New Project**).
3. Choose a directory and provide a project name.
4. The application generates the project structure.

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

1. Click the **Run** button in the WSO2 Integrator toolbar, or
2. Open a terminal, navigate to your project directory, and run: `bal run`
3. You should see the service start successfully

## What's next

- [Understand the IDE](understand-the-ide.md) — Learn the visual designer layout
- [Build an API Integration](quick-start-api.md) — Your first real integration
