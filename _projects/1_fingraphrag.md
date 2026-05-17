---
layout: page
title: FinGraphRAG
description: Portfolio Risk & Market Analysis using GraphRAG with Qdrant + Neo4j
importance: 1
category: AI / ML
github: https://github.com/Jingyuan-Xue/FinGraphRAG
---

FinGraphRAG is a full-stack prototype for portfolio risk and market analysis using a HybridRAG architecture. It combines semantic retrieval from Qdrant with relationship-aware graph expansion in Neo4j so financial questions can draw on both textual evidence and multi-hop entity relationships.

## Problem

Traditional RAG systems are useful for retrieving text snippets, but they often struggle with questions that depend on financial relationships across issuers, sectors, suppliers, risk factors, and portfolio exposure. FinGraphRAG is designed for queries where the answer requires both semantic evidence and explicit multi-hop relationship modeling.

## Architecture

The system uses a HybridRAG design:

- Qdrant stores embedded document chunks for semantic search across filings, portfolio notes, and market updates.
- Neo4j stores entities and relationships so the system can expand from one company, sector, or event to connected exposures.
- A FastAPI service coordinates retrieval, graph expansion, risk calculations, and streaming responses to the application layer.

## Data Pipeline

FinGraphRAG ingests SEC filings, portfolio data, and news events. The pipeline normalizes source documents, chunks long financial text, generates embeddings, and indexes the resulting records in both vector and graph stores. Entity and relationship extraction turns unstructured evidence into graph nodes that can support downstream traversal.

## Query Orchestration

User questions are routed dynamically based on intent. The service can run vector search for textual evidence, graph expansion for linked entities, and exposure calculation for portfolio-level risk views. This lets the application answer questions such as which holdings are exposed to a sector event, how a filing risk factor connects to a portfolio, or which related companies appear in the supporting evidence.

## Stack

Python, FastAPI, React, Qdrant, Neo4j, and Docker Compose.

## Result

The result is a containerized full-stack prototype with streaming query support and an interface for exploring financial risk signals. The project demonstrates how graph-aware retrieval can make portfolio analysis more explainable than vector search alone.
