---
title: "AI & Machine Learning"
description: "AI and machine learning connectors available in WSO2 Integrator."
---

# AI & Machine Learning

<!-- TODO: Searchable grid/table with: name, icon, 1-line description, supported operations, link to detail page -->

## Available connectors

| Connector | Description | Operations | Authentication |
|-----------|-------------|------------|----------------|
| [AI Devant](ai-devant) | AI-powered document chunking and binary file loading for RAG and AI pipelines | Chunk, Load | Bearer Token |
| [AI Memory MSSQL](ai-memory-mssql) | MSSQL-backed short-term memory store for AI agent chat message persistence and retrieval | Put, Get, GetAll, Remove, IsFull, GetCapacity | Username/Password |
| [Anthropic LLM](ai-anthropic) | LLM model provider for Anthropic Claude chat completions and structured generation | Chat, Generate, Tool Calling | API Key |
| [Azure AI Search](azure-ai-search) | Azure AI Search service management for indexes, indexers, data sources, skillsets, and synonym maps | Create, Read, Update, Delete, List, Run, Reset, Analyze, Statistics | API Key |
| [Azure AI Search Index](azure-ai-search-index) | AI-powered cloud search with full-text, semantic, and vector search over indexed documents | Search, Lookup, Index, Suggest, Autocomplete, Count | API Key |
| [Azure OpenAI](ai-azure) | Azure-hosted OpenAI chat completions, embeddings, and AI Search knowledge base | Chat, Generate, Embed, Ingest, Retrieve, Delete | API Key |
| [DeepSeek](ai-deepseek) | LLM chat completion and structured generation with DeepSeek models | Chat, Generate, Tool Calling | API Key |
| [Milvus](milvus) | Open-source vector database for similarity search, vector upsert, and collection management | Create Collection, Load, Index, Upsert, Delete, Search, Query | API Token / Credentials |
| [Mistral](mistral) | AI platform with chat completions, code generation, embeddings, OCR, moderation, fine-tuning, and batch processing | Chat, FIM, Embed, OCR, Moderate, Fine-tune, Batch | API Key |
| [Mistral AI](ai-mistral) | LLM provider with chat completions, structured generation, and tool calling | Chat, Generate, Tool Calling | API Key |
| [NP](np) | Model provider bridge for Ballerina's Natural Programming feature, supporting OpenAI and Azure OpenAI | Natural Language Processing, Structured Response Parsing | API Key |
| [Ollama](ai-ollama) | Local LLM inference with chat completions, tool calling, and structured output generation | Chat, Generate | None (local server) |
| [OpenAI](openai) | AI platform with chat completions, image generation, audio processing, embeddings, assistants, and fine-tuning | Chat, Images, Audio, Embeddings, Assistants, Files, Fine-Tuning, Batches, Moderations | API Key (Bearer Token) |
| [OpenAI (AI)](ai-openai) | LLM model provider and embedding provider for OpenAI chat completions, structured generation, and text embeddings | Chat, Generate, Tool Calling, Embed | API Key |
| [OpenAI Audio](openai-audio) | Text-to-speech, transcription, and audio translation using OpenAI TTS and Whisper models | Speech Generation, Transcription, Translation | API Key (Bearer Token) |
| [OpenAI Fine-Tunes](openai-finetunes) | Fine-tune OpenAI models with custom training data, manage files and models | Upload, Fine-Tune, List, Retrieve, Delete, Monitor | API Key (Bearer Token) |
| [pgvector](ai-pgvector) | Vector similarity search in PostgreSQL with dense, sparse, and hybrid embeddings | Add, Query, Delete | Username/Password |
| [Pinecone](ai-pinecone) | Vector database with dense, sparse, and hybrid similarity search | Add, Query, Delete | API Key |
| [Weaviate](ai-weaviate) | Vector database with semantic search, metadata filtering, and embedding storage | Add, Query, Delete | API Key |
