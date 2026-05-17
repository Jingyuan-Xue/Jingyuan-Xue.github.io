---
layout: page
title: LLM Agent & Tool-Enhanced Reasoning
description: Multi-task reasoning framework with reranking, self-reflection, and MCP tool calls
img: assets/img/llm_agent.png
importance: 2
category: AI / ML
---

This project explores LLM agent workflows for tasks that benefit from tool use, verification, and candidate reranking. The framework covers graph shortest path problems, MMLU-Medicine question answering, and InfoBench-style information extraction.

## Tasks

The framework targets three evaluation-style workloads:

- Graph shortest path reasoning, where the model must solve structured path-finding problems rather than only generate fluent text.
- MMLU-Medicine question answering, where factual precision and answer selection matter.
- InfoBench-style information extraction, where the system must identify and return specific details from longer context.

## Reranking

The generation pipeline samples 50 candidate responses and reranks them using multiple scoring mechanisms. These include log-probability scoring, reward model scoring, PairRM-style preference ranking, and minimum Bayes risk-style selection. The goal is to compare candidate quality from several perspectives before selecting the final answer.

## Self-Reflection

The agent uses a four-step self-reflection pipeline: an initial draft followed by three optimization rounds. Each round reviews weaknesses in the current answer, revises the reasoning path, and updates the response before final selection.

## Tool Calling

Tool use is implemented with a ReAct-style loop and an MCP-compatible interface for external verification tools. This allows the model to call structured tools during reasoning when the task benefits from checking intermediate facts or computed results.

## Deployment

The service exposes an OpenAI Completions API-compatible interface and was designed for high-concurrency inference. The deployment target used dual A100 80GB GPUs and supported up to 300 concurrent requests.

## Stack

Python, PyTorch, Transformers, ReAct, MCP, and Qwen3.
