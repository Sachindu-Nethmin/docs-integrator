---
title: Reference
sidebar_label: Overview
sidebar_position: 0
description: "What's the exact syntax / config / API for Z?"
---

# Reference

Pure lookup material — syntax, configuration keys, CLI commands, API docs, and specifications. No tutorials, no narrative — just the facts.

## Language

Ballerina language reference for integration developers:

- **[Syntax Quick Reference](language/syntax.md)** — Core language constructs at a glance
- **[Type System](language/type-system.md)** — Structural types, unions, optional, any, stream, never
- **[Standard Library](language/standard-library.md)** — Built-in functions (langlib)
- **[Query Expressions](language/query-expressions.md)** — SQL-like data processing
- **[Concurrency](language/concurrency.md)** — Workers, strands, locks, transactions
- **[Error Handling](language/error-handling.md)** — Error types and handling patterns
- **[Integration Features](language/integration-features.md)** — Services, clients, listeners

## Configuration

Project and deployment configuration files:

| File | Purpose |
|---|---|
| **[Ballerina.toml](config/ballerina-toml.md)** | Project metadata and dependencies |
| **[Config.toml](config/config.md)** | Runtime configuration values |
| **[Cloud.toml](config/cloud-toml.md)** | Cloud deployment settings |
| **[Dependencies.toml](config/dependencies-toml.md)** | Locked dependency versions |
| **[Environment Variables](config/environment-variables.md)** | Runtime environment configuration |

## CLI

Command-line tools reference:

| Command | Purpose |
|---|---|
| **[bal commands](cli/commands.md)** | Core build, run, test, and package commands |
| **[bal persist](cli/persist.md)** | Data persistence code generation |
| **[bal openapi](cli/openapi.md)** | Generate services/clients from OpenAPI specs |
| **[bal graphql](cli/graphql.md)** | GraphQL schema generation |
| **[bal grpc](cli/grpc.md)** | Generate code from .proto files |
| **[bal edi](cli/edi.md)** | EDI schema processing |
| **[bal health](cli/health.md)** | FHIR/HL7 health tool |
| **[Update Tool](cli/update-tool.md)** | Manage Ballerina distributions |
| **[Scan Tool](cli/scan.md)** | Static analysis rules |

## APIs

- **[Management API](api/management.md)** — Runtime management endpoints
- **[ICP API](api/icp.md)** — Integration Control Plane API
- **[Ballerina API Docs](api/ballerina.md)** — Standard library API documentation

## Specifications & Formats

- **[Supported Protocols](protocols.md)** — Complete protocol support table
- **[Supported Data Formats](data-formats/index.md)** — Complete data format support table
- **[Ballerina by Example](by-example.md)** — 200+ runnable examples
- **[Ballerina Specifications](specifications.md)** — Language, library, and platform specs

## Appendix

- **[System Requirements](appendix/system-requirements.md)** — Supported platforms and versions
- **[Error Codes](error-codes.md)** — Error code reference
- **[Glossary](glossary.md)** — Terminology definitions
- **[FAQ](faq.md)** — Frequently asked questions
- **[Troubleshooting](appendix/troubleshooting.md)** — Common issues and solutions
- **[Release Notes](release-notes.md)** — What's new in each release
