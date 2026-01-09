---
title: 'Welcome to My Blog'
description: 'This is the first post on my new blog built with Astro and Effect'
pubDate: 2026-01-09
tags: ['blog', 'astro', 'effect']
---

# Welcome to My Blog

This is my first blog post! This blog is built with:

- **Astro** - Fast static site generation
- **Tailwind CSS** - Beautiful styling
- **Effect** - Type-safe TypeScript
- **Cloudflare Pages** - Global edge deployment

## Code Example

Here's a simple TypeScript example with syntax highlighting:

```typescript
import { Effect } from "effect"

const program = Effect.gen(function* () {
  const message = yield* Effect.succeed("Hello, World!")
  yield* Effect.log(message)
})

Effect.runPromise(program)
```

## Features

This blog includes:

1. Markdown support
2. Syntax highlighting
3. Tag-based organization
4. RSS feed
5. Full-text search

Stay tuned for more posts!
