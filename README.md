# 🚀 AI Developer Ecosystem Platform

> 🌍 **Dev Resource Hub** is a high-performance, community-driven AI Developer Ecosystem. Explore agents, prompts, tools, and comparisons in a unified glassmorphism interface.

<p align="center">
  <a href="https://saikirantechy.github.io/dev-resource-hub/">
    <img src="https://img.shields.io/badge/🌐_Live_Platform-Visit_Now-0A66C2?style=for-the-badge" alt="Live Platform" />
  </a>
  <img src="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge" alt="Build Status" />
  <a href="https://github.com/saikirantechy/dev-resource-hub/stargazers">
    <img src="https://img.shields.io/github/stars/saikirantechy/dev-resource-hub?style=for-the-badge&color=yellow" alt="GitHub stars" />
  </a>
  <a href="https://github.com/saikirantechy/dev-resource-hub/network/members">
    <img src="https://img.shields.io/github/forks/saikirantechy/dev-resource-hub?style=for-the-badge" alt="GitHub forks" />
  </a>
  <a href="https://github.com/saikirantechy/dev-resource-hub/issues">
    <img src="https://img.shields.io/github/issues/saikirantechy/dev-resource-hub?style=for-the-badge" alt="GitHub issues" />
  </a>
  <a href="https://github.com/saikirantechy/dev-resource-hub/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/saikirantechy/dev-resource-hub?style=for-the-badge&color=blue" alt="License" />
  </a>
  <img src="https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge" alt="Contributions Welcome" />
</p>

---

## 📖 Table of Contents
- [✨ About the Platform](#-about-the-platform)
- [💡 Why We Built This](#-why-we-built-this)
- [🚀 Key Routes & Features](#-key-routes--features)
- [🏗 Platform Architecture](#-platform-architecture)
- [🛠 Tech Stack](#-tech-stack)
- [⚡ Local Setup](#-local-setup)
- [🔐 Environment Configuration](#-environment-configuration)
- [🚀 GitHub Pages Deployment](#-github-pages-deployment)
- [🗄️ Supabase Integration](#️-supabase-integration)
- [🤝 Contributing](#-contributing)
- [🌍 Community](#-community)
- [🌟 Roadmap](#-roadmap)
- [🌌 Vision](#-vision)
- [❤️ Contributors](#️-contributors)

---

## ✨ About the Platform

The **AI Developer Ecosystem Platform** is a production-grade resource hub designed for the modern AI era. It's more than just a list of links—it's a curated marketplace and discovery engine for:

- 🤖 **AI Agents** (Devin, Manus, CrewAI, etc.)
- ⌨️ **AI Tooling** (Cursor, Windsurf, v0)
- 📝 **Prompt Marketplace** (Battle-tested developer prompts)
- 📊 **Comparisons** (Side-by-side technical breakdowns)
- 🔥 **Trending Hub** (The hottest resources ranked by the community)

---

## 💡 Why We Built This

The AI ecosystem is growing rapidly, but discovering high-quality tools, prompts, agents, and developer workflows remains fragmented. **Dev Resource Hub** was created to unify:

- AI discovery & developer tooling
- Community contributions
- Open-source collaboration & startup innovation

---

## 🏗 Platform Architecture

```bash
app/
 ├── ai-agents/     # Autonomous & Coding Agents
 ├── prompts/       # Prompt Marketplace
 ├── tools/         # Developer Tooling Hub
 ├── marketplace/   # Discovery Portal
 ├── trending/      # Community Rankings
 ├── compare/       # Technical Breakdowns
 ├── showcase/      # Community Projects
 ├── community/     # Social & Contributors
 └── docs/          # Technical Documentation
```

---

## ⚡ Local Setup

Follow these steps to get the project running on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/saikirantechy/dev-resource-hub.git
cd dev-resource-hub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 🔐 Environment Configuration

The project uses Supabase for features like bookmarks and likes. However, **it is designed to build and run even without these variables**.

To enable Supabase features, create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

See `.env.example` for a template.

---

## 🚀 GitHub Pages Deployment

This project is optimized for **GitHub Pages** using Next.js static export.

### Automated Deployment
Every push to the `main` branch triggers a GitHub Action (`.github/workflows/deploy.yml`) that builds and deploys the site automatically.

### Manual Static Export
To generate the static site locally:

```bash
npm run build
```

The output will be in the `out/` directory, which can be hosted on any static web server.

---

## 🗄️ Supabase Integration

We use a **Safe Initialization** pattern to ensure the app never crashes during build or if environment variables are missing:

```ts
// lib/supabase.ts
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
```

When `supabase` is `null`, components gracefully fallback to static data or disable interactive features (like liking) with a user-friendly message.

---

## 🤝 Contributing

We are building the ultimate AI developer ecosystem, and we need your help! Whether it's adding a new resource, fixing a bug, or improving the UI, all contributions are welcome.

### 🔥 Ways to Contribute
* 🤖 Add AI agents & developer tools
* 📝 Share powerful prompts
* 🎨 Improve UI/UX & animations
* ⚡ Optimize performance
* 🐛 Report & fix bugs

### 🛠️ How to Contribute
1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m "feat: add amazing feature"`)
4. **Push** your branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request 🚀

---

## 🌟 Roadmap

- [x] **Phase 1** — Core Architecture & Route Expansion
- [x] **Phase 2** — Universal Search (Fuse.js) & Dynamic Blogs
- [x] **Phase 2** — AI Stack Finder & Bookmark System
- [x] **Phase 3** — User Auth (Supabase) & Backend Migration
- [ ] **Phase 4** — AI Workflow Builder (Visual Nodes)
- [ ] **Phase 4** — Semantic AI Search

---

## ❤️ Contributors

Thanks to the amazing developers building the future of the AI ecosystem!

<a href="https://github.com/saikirantechy/dev-resource-hub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=saikirantechy/dev-resource-hub" alt="Contributors" />
</a>

---

## 🔥 Maintained By

### Sai Kiran BK (SKT)
🚀 Founder @ **SKT Nexus**  
💡 Building developer communities & open-source AI platforms.

[GitHub](https://github.com/saikirantechy) | [LinkedIn](https://linkedin.com/in/saikirantechy) | [Twitter](https://twitter.com/saikirantechy)
