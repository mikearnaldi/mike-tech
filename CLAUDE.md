# Claude AI Assistant Guidelines

This document provides guidelines for AI assistants (particularly Claude) working on this project.

## Project Overview

This is a personal blog focused on **AI, Business, and Programming**. The content explores the intersection of these three areas, with practical insights and forward-thinking perspectives.

## Core Principles

### Content Focus
- Blog posts should focus on AI, Business, and Programming topics
- DO NOT promote the technical stack used to build the blog
- Avoid meta-content about "how this blog was built"
- Keep the focus on ideas, insights, and actionable content

### Technology Stack
- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS v4
- **Package Manager**: Bun (not npm)
- **Deployment**: Vercel via GitHub Actions
- **Search**: Pagefind (static search)
- **Content**: Markdown with frontmatter (Astro Content Collections)

## Git Strategy

### Important: Manual Commits Only

**DO NOT auto-commit changes.** Always ask the user before committing.

When the user asks to commit:
1. Run `git status` to show what changed
2. Run `git diff` to show the actual changes (if needed)
3. Review the changes with the user
4. Only commit when explicitly requested
5. Use descriptive commit messages with proper formatting

### Commit Message Format

```
Title (50 chars or less)

- Bullet point description of changes
- Keep it concise and clear
- Focus on what changed and why

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

### Branch Strategy

- `main` - Production branch (auto-deploys via GitHub Actions)
- Feature branches: Use descriptive names like `feature/new-blog-post` or `fix/search-styling`
- Always commit to appropriate branch, not directly to main unless explicitly requested

## Content Guidelines

### Blog Posts

Location: `src/content/posts/`

Frontmatter format:
```yaml
---
title: 'Your Post Title'
description: 'Brief description for SEO and listings'
pubDate: YYYY-MM-DD
tags: ['ai', 'business', 'programming']
draft: false  # Optional, defaults to false
---
```

**Tag Guidelines:**
- Use content-focused tags: `ai`, `business`, `programming`, `leadership`, `architecture`, etc.
- DO NOT use technology tags like `astro`, `react`, `typescript` unless the post is specifically about that technology
- Keep tags relevant to the content topics, not the implementation

### Writing Style

- Clear, direct, and opinionated
- Focus on practical insights and actionable advice
- Avoid unnecessary fluff or filler content
- Use examples and concrete scenarios
- It's okay to be provocative if it serves the argument

## Development Workflow

### Running Locally

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (localhost:4321)
bun run build        # Build for production
bun run preview      # Preview production build
```

### Making Changes

1. Make code/content changes
2. Test locally with `bun run dev`
3. Build to verify: `bun run build`
4. When ready, ask user before committing
5. User will explicitly say "commit" or "git commit"
6. Then commit with clear message

### Deployment

- GitHub Actions automatically deploys on push to `main`
- Workflow builds the site and deploys to Vercel
- Check `.github/workflows/deploy.yml` for configuration
- Requires GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

## Common Tasks

### Adding a New Blog Post

1. Create new file in `src/content/posts/your-post-slug.md`
2. Add frontmatter with title, description, date, tags
3. Write content in Markdown
4. Test locally: `bun run dev`
5. Ask before committing

### Modifying Styles

- Global styles: `src/styles/global.css`
- Uses Tailwind CSS v4 (utility classes in templates)
- Typography plugin for blog post content styling

### Updating Site Metadata

- Site title/description: `src/layouts/Layout.astro`
- RSS feed: `src/pages/rss.xml.ts`
- Home page: `src/pages/index.astro`

## What NOT to Do

❌ Auto-commit without asking
❌ Promote the tech stack in blog content
❌ Use npm (use bun instead)
❌ Add unnecessary dependencies
❌ Create overly complex abstractions
❌ Write meta-content about "how the blog works"

## What TO Do

✅ Ask before committing
✅ Focus content on AI, Business, Programming
✅ Use Bun for all package management
✅ Keep things simple and maintainable
✅ Write clear, actionable blog posts
✅ Test builds before committing

## File Structure

```
/
├── .github/workflows/    # GitHub Actions (auto-deploy)
├── public/              # Static assets
├── src/
│   ├── content/
│   │   ├── config.ts    # Content collections schema
│   │   └── posts/       # Blog posts (markdown)
│   ├── layouts/
│   │   └── Layout.astro # Base layout
│   ├── pages/
│   │   ├── index.astro  # Home
│   │   ├── blog/        # Blog listing & posts
│   │   ├── search.astro # Search page
│   │   └── rss.xml.ts   # RSS feed
│   └── styles/
│       └── global.css   # Global styles
├── CLAUDE.md           # This file
├── README.md           # User-facing documentation
└── vercel.json         # Vercel configuration
```

## Questions?

When in doubt:
1. Ask the user before taking action
2. Especially before committing
3. Keep content focused on the three main topics
4. Simplicity over complexity
5. Clarity over cleverness

---

**Remember**: This is a content-first blog. The technology is just infrastructure. Focus on helping create valuable content about AI, Business, and Programming.
