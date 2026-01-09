# Personal Blog

A modern, fast personal blog built with Astro, Tailwind CSS, and deployed to Cloudflare Pages using alchemy-effect.

## Features

- Static site generation with Astro
- Markdown-based blog posts with frontmatter
- Syntax highlighting with Shiki
- Tag/category system for organizing posts
- RSS feed generation
- Full-text search with Pagefind
- Responsive design with Tailwind CSS
- Dark mode support
- Vercel deployment

## Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── content/
│   │   ├── config.ts    # Content collections schema
│   │   └── posts/       # Blog posts (markdown files)
│   ├── layouts/
│   │   └── Layout.astro # Base layout component
│   ├── pages/
│   │   ├── index.astro  # Home page
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog listing
│   │   │   ├── [...slug].astro  # Individual blog posts
│   │   │   └── tags/            # Tag pages
│   │   ├── search.astro # Search page
│   │   └── rss.xml.ts   # RSS feed
│   └── styles/
│       └── global.css   # Global styles
├── vercel.json          # Vercel configuration
└── astro.config.mjs     # Astro configuration
```

## Getting Started

### Installation

```sh
bun install
```

### Development

Start the local development server:

```sh
bun run dev
```

The site will be available at `http://localhost:4321`

### Writing Blog Posts

Create a new markdown file in `src/content/posts/`:

```markdown
---
title: 'Your Post Title'
description: 'A brief description'
pubDate: 2026-01-09
tags: ['tag1', 'tag2']
draft: false
---

# Your content here

Write your blog post using markdown...
```

### Building

Build the production site:

```sh
bun run build
```

This will:
1. Generate static HTML with Astro
2. Build the search index with Pagefind

The output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```sh
bun run preview
```

## Deployment to Vercel

This project uses GitHub Actions to automatically deploy to Vercel on every push to `main`.

### Setup GitHub Actions Deployment

1. **Create a Vercel project:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your repository (just to create the project, don't connect it)
   - Vercel will auto-detect Astro settings
   - Click "Deploy" to create the initial project

2. **Get your Vercel credentials:**

   After creating the project, you need three values:

   - **VERCEL_TOKEN**: Go to [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
     - Click "Create Token"
     - Name it (e.g., "GitHub Actions")
     - Copy the token

   - **VERCEL_ORG_ID**: Run this command locally:
     ```sh
     bunx vercel link
     ```
     Follow the prompts to link your project. This creates a `.vercel/project.json` file.
     ```sh
     cat .vercel/project.json
     ```
     Copy the `orgId` value

   - **VERCEL_PROJECT_ID**: From the same `.vercel/project.json` file, copy the `projectId` value

3. **Add GitHub Secrets:**

   Go to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

   Add these three secrets:
   - `VERCEL_TOKEN` - Your Vercel token
   - `VERCEL_ORG_ID` - Your organization ID
   - `VERCEL_PROJECT_ID` - Your project ID

4. **Deploy:**

   Push to main branch and GitHub Actions will automatically:
   - Build your site with Bun
   - Deploy to Vercel production
   - Check the Actions tab to see deployment progress

### Manual Deploy (Optional)

You can also deploy manually:
```sh
bun run deploy
```

### Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain and follow the DNS configuration instructions

## Customization

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: Uses Tailwind CSS v4 with the Vite plugin
- Typography: Uses `@tailwindcss/typography` for blog post content

### Syntax Highlighting

Configure syntax highlighting theme in `astro.config.mjs`:

```js
markdown: {
  shikiConfig: {
    theme: 'github-dark',
    wrap: true,
  },
}
```

### Search

Search is powered by Pagefind and runs automatically after build. The search page is available at `/search`.

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Pagefind](https://pagefind.app) - Static search
- [Shiki](https://shiki.matsu.io) - Syntax highlighting
- [Bun](https://bun.sh) - Fast JavaScript runtime and package manager
- [Vercel](https://vercel.com) - Deployment platform

## License

MIT
