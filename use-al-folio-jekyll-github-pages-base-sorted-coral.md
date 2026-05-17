# Plan: Personal Website — al-folio + Jekyll + GitHub Pages

## Context

Jingyuan(Jimmy) Xue needs a professional personal website to showcase his LLM/ML engineering background, two major projects, and work history. The site will be built on the **al-folio** Jekyll theme, hosted on **GitHub Pages** at `https://jingyuan-xue.github.io`. Content sourced from his resume PDF; English-only.

---

## Personal Info Summary

| Field | Value |
|---|---|
| Name | Jingyuan Xue |
| Email | xuejingyuan.cn@gmail.com |
| GitHub | Jingyuan-Xue |
| Target role | LLM Application Development |
| Site URL | https://jingyuan-xue.github.io |
| Repo | github.com/Jingyuan-Xue/Jingyuan-Xue.github.io |

---

## Step-by-Step Implementation

### Step 1 — Bootstrap al-folio in `/Users/xiwei/Coding/myweb`

```bash
# Download the latest al-folio release (avoid git history)
git clone https://github.com/alshedivat/al-folio.git .
rm -rf .git
git init
git remote add origin https://github.com/Jingyuan-Xue/Jingyuan-Xue.github.io.git
```

Remove demo content:
- Delete all files in `_posts/` (demo blog posts)
- Delete all files in `_news/` (demo announcements)
- Delete all files in `_projects/` (demo projects)
- Clear `_bibliography/papers.bib` (no publications)
- Keep `assets/json/resume.json` for replacement

---

### Step 2 — Configure `_config.yml`

Critical fields to set:

```yaml
first_name: Jingyuan
last_name: Xue
email: xuejingyuan.cn@gmail.com
description: >
  LLM Engineer & Full-Stack Developer. Specializing in RAG systems,
  LLM fine-tuning, and knowledge graph-enhanced AI applications.
keywords: LLM, RAG, GraphRAG, Machine Learning, Python, TypeScript, Full-Stack
lang: en

url: https://jingyuan-xue.github.io
baseurl: ""   # empty — this is a user GitHub Pages site

github_username: Jingyuan-Xue
contact_note: ""

enable_darkmode: true
enable_navbar_social: true
enable_project_categories: true
enable_medium_zoom: true
enable_tooltips: true

# Disable unused features
blog_nav_title: ""        # hide blog from nav
enable_math: false
```

Social links in `_data/socials.yml` (or equivalent config):
- GitHub: `Jingyuan-Xue`
- Email: `xuejingyuan.cn@gmail.com`
- Linkedin: 'https://www.linkedin.com/in/jingyuan-xue/'

---

### Step 3 — Customize `_pages/about.md`

Write a concise bio covering:
- Current status: UNSW MIT + Macquarie Research Master's student
- Professional focus: LLM applications, HybridRAG, fine-tuning, full-stack
- Recent experience: Laikon Biotech internship + CitiXP full-stack role
- Invite visitors to explore Projects and CV pages

Key al-folio frontmatter:
```yaml
---
layout: about
title: about
permalink: /
subtitle: >
  <a href="https://www.unsw.edu.au">UNSW Sydney</a> · 
  <a href="https://www.mq.edu.au">Macquarie University</a> · 
  LLM Engineer & Full-Stack Developer
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Sydney, Australia</p>
    <p>xuejingyuan.cn@gmail.com</p>
news: false
selected_papers: false
social: true
---
```

---

### Step 4 — Create Project Pages in `_projects/`

#### `_projects/1_fingraphrag.md`

```yaml
---
layout: page
title: FinGraphRAG
description: Portfolio Risk & Market Analysis using GraphRAG with Qdrant + Neo4j
img: assets/img/fingraphrag.png
importance: 1
category: AI / ML
---
```

Content covers:
- **Problem**: Traditional RAG limited in multi-hop financial relationship modeling
- **Architecture**: HybridRAG — Qdrant (semantic search) + Neo4j (knowledge graph)
- **Data pipeline**: SEC filings, portfolio data, news events → automated chunking + vector/graph indexing
- **Query orchestration**: Dynamic routing for vector search, graph expansion, exposure calculation
- **Stack**: Python / FastAPI / React / Qdrant / Neo4j / Docker Compose
- **Results**: Full-stack prototype with streaming queries + containerized deployment
- GitHub link: `https://github.com/Jingyuan-Xue/FinGraphRAG` (placeholder)

#### `_projects/2_llm_agent.md`

```yaml
---
layout: page
title: LLM Agent & Tool-Enhanced Reasoning
description: Multi-task reasoning framework with reranking, self-reflection, and MCP tool calls
img: assets/img/llm_agent.png
importance: 2
category: AI / ML
---
```

Content covers:
- **Tasks**: Graph shortest path, MMLU-Medicine QA, InfoBench information extraction
- **Reranking**: 50-candidate reranking with 6 scoring mechanisms (Log-prob, Reward Model, PairRM, MBR, etc.)
- **Self-reflection**: 4-step pipeline (draft + 3 optimization rounds)
- **Tool calling**: ReAct + MCP interface for external verification tools
- **Deployment**: OpenAI Completions API-compatible service; dual A100 80GB, 300 concurrent requests
- **Stack**: Python / PyTorch / Transformers / ReAct / MCP / Qwen3

---

### Step 5 — Populate `assets/json/resume.json`

Full JSON Resume standard format with:

**Basics**
```json
{
  "name": "Jingyuan Xue",
  "label": "LLM Engineer & Full-Stack Developer",
  "email": "xuejingyuan.cn@gmail.com",
  "url": "https://jingyuan-xue.github.io",
  "location": { "city": "Sydney", "countryCode": "AU" },
  "profiles": [
    { "network": "GitHub", "username": "Jingyuan-Xue", "url": "https://github.com/Jingyuan-Xue" }
  ]
}
```

**Work** (2 entries):
1. Laikon Biotech — LLM Application Development Intern (2025.08–2025.09)
   - 3 bullet points: data governance pipeline, Qwen3-8B QLoRA fine-tuning (74% VRAM reduction), evaluation framework (BERTScore 0.6812)
2. CitiXP — Full Stack Engineer (2025.09–2025.12)
   - 3 bullet points: multi-platform feature dev, OAuth unification + app releases, CDN migration (65% cost ↓, TTFB ↓30%, LCP ↓20%)

**Education** (3 entries):
1. Macquarie University — Research Master's (2026.08–2028.06 expected)
2. UNSW — Master of Information Technology (2024.02–2026.02)
3. Heilongjiang University — Bachelor of Automation (2017.09–2021.06)

**Skills** (grouped):
- Languages: Python, TypeScript, JavaScript
- ML/AI: PyTorch, Transformers, Qwen3, ms-swift, FastText
- Frontend: React, React Native
- Backend: FastAPI, Node.js
- Databases: PostgreSQL, Neo4j, Qdrant
- Tools: Docker Compose, Prisma, MinHash LSH, ReAct, MCP

**Projects** (2 entries): FinGraphRAG, LLM Agent (same as _projects/)

---

### Step 6 — Clean Up Navigation

Edit `_pages/` to only show relevant pages:
- Keep: `about.md`, `projects.md`, `cv.md`
- Delete or disable: `blog.md`, `publications.md`, `teaching.md`, `repositories.md`

In `_config.yml` nav_bar section, ensure only About / Projects / CV appear.

---

### Step 7 — Profile Image Placeholder

Add a placeholder profile image at `assets/img/prof_pic.jpg`.
(User can replace with actual photo after deployment.)

Project thumbnails: Add placeholder images at:
- `assets/img/fingraphrag.png`
- `assets/img/llm_agent.png`

---

### Step 8 — Create GitHub Repo & Deploy

```bash
# Create repo via GitHub (Jingyuan-Xue.github.io — must be exact username)
# Then in /Users/xiwei/Coding/myweb:

git add .
git commit -m "feat: initial al-folio personal website"
git push -u origin main
```

GitHub Actions setup (after push):
1. Go to repo **Actions** tab → Enable GitHub Actions
2. **Settings → Actions → General → Workflow permissions** → "Read and write permissions"
3. **Settings → Pages** → Source: `gh-pages` branch
4. Site goes live at `https://jingyuan-xue.github.io`

Local preview before push:
```bash
docker compose pull && docker compose up
# or: bundle install && bundle exec jekyll serve
# Access at http://localhost:8080 (Docker) or http://localhost:4000
```

---

## Critical Files Summary

| File | Purpose |
|---|---|
| `_config.yml` | Site-wide config: name, URL, features |
| `_pages/about.md` | Landing page bio |
| `_pages/cv.md` | CV page (set `cv_format: jsonresume`) |
| `_pages/projects.md` | Projects grid page |
| `_projects/1_fingraphrag.md` | FinGraphRAG showcase |
| `_projects/2_llm_agent.md` | LLM Agent showcase |
| `assets/json/resume.json` | Full structured CV data |
| `_data/repositories.yml` | GitHub stats (set to Jingyuan-Xue) |

---

## Verification

1. **Local**: `bundle exec jekyll serve` or `docker compose up` → visit `http://localhost:4000`
   - About page loads with bio and social links
   - Projects page shows 2 cards (FinGraphRAG, LLM Agent)
   - CV page renders from `resume.json`
2. **Post-deploy**: Visit `https://jingyuan-xue.github.io`
   - Check all 3 nav pages render
   - Verify dark mode toggle works
   - Confirm GitHub link on repositories page
3. **GitHub Actions**: Confirm the `deploy` workflow completes green in the Actions tab
