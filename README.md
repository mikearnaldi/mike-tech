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

This project is configured for easy deployment to Vercel.

### Option 1: Deploy via CLI

1. Install Vercel CLI (already included as dev dependency)

2. Login to Vercel:
   ```sh
   bunx vercel login
   ```

3. Deploy:
   ```sh
   bun run deploy
   ```

   This will build your site and deploy to production.

### Option 2: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [vercel.com](https://vercel.com) and click "New Project"

3. Import your repository

4. Vercel will automatically detect Astro and configure:
   - **Framework Preset**: Astro
   - **Build Command**: `bun run build`
   - **Output Directory**: `dist`

5. Click "Deploy"

Your site will automatically deploy on every push to your main branch.

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
