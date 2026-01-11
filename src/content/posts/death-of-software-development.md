---
title: 'The Death of Software Development'
description: 'The job of software developer is dead. You might still be coding, but the profession as you knew it is gone.'
pubDate: 2026-01-11
tags: ['ai', 'programming', 'future']
---

## Background

I'm [Michael Arnaldi](https://github.com/mikearnaldi), Founder and CEO of [Effectful Technologies](https://effectful.co/) — the company behind [Effect](https://effect.website/), the TypeScript library for building production-grade systems. I've been programming most of my life. I started at 11 with the goal of cracking video games. Since then, I've written code at every level: from kernel development to the highest abstractions in TypeScript.

Programming has been my life. And now it's gone for good.

Let me explain.

## The Ralph Wiggum Moment

The broader community is only now waking up to the power of AI. Last week, [Ralph Wiggum](https://x.com/mattpocockuk/status/2007924876548637089) went viral. Ralph is a technique that prompts agents like Claude Code in a deterministic loop, iteratively building large systems from lists of small tasks. Twitter exploded.

The name comes from [Geoffrey Huntley](https://ghuntley.com/), a great engineer and a good friend who's been exploring the extremes of AI for a long time.

But here's the thing: what people don't realize is that Ralph is just the beginning. The "AI power users" — the ones who've been living in this world for months — are already working with far more refined techniques. And they're not just building simple things. They're cloning entire companies in hours.

## Missing the Point

The average software developer is not even close to understanding the extent of this change.

They're obsessed with picking "the best model" — endlessly debating whether Claude is better than GPT, whether Gemini is catching up, whether open-source models can compete. They're missing the point entirely.

The outcome is defined by the process, not the model. The model is just one piece of the puzzle. Think of it like traditional software development: not every developer is exceptional, but a team of good enough developers with the right process can build great software. The same principle applies here. A good enough model with the right process will beat a better model with no process — every single time.

Here's the uncomfortable truth: the state of the art is not public knowledge. Power users are keeping their techniques to themselves — because sharing them is scary. The implications are too big, too disruptive. We'll get there eventually, but not yet.

Tools like Ralph are a good start, but they're fundamentally limited. If you think a model can decide by itself when a task is done and emit a token deterministically, you're not even close to understanding what's possible. That's just scratching the surface.

In the next two years, you'll hear more and more about things like [Lean](https://lean-lang.org/) and [TLA+](https://lamport.azurewebsites.net/tla/tla.html). You'll watch the industry evolve from "Coding Agents" to "Agentic Infrastructure for Coding." The shift will be profound.

## A Real Example

Let me give you a concrete example.

I've always been passionate about finance. I used to be a [regulated person](https://register.fca.org.uk/s/individual?id=0030X00002TQAcfQAH) — an executive director at a firm that created derivative products. Since moving on from that world, I still get the occasional urge to check macroeconomic data and dig into market dynamics.

A few weeks ago, I decided to analyze Polymarket. I wanted to spot insider trading, whale activity, derive volatility — the kind of stuff only a finance nerd would care about.

In finance, there's one tool that everybody serious ends up using: the [Bloomberg Terminal](https://www.bloomberg.com/professional/products/bloomberg-terminal). It's so ubiquitous that terminals per capita is actually used as a metric for financial activity in different countries. And for that metric, the winner is New York! Nope — it's actually Vatican City, with 1.9% of people having a terminal. Almost 4x Luxembourg.

There's only one problem with the Bloomberg Terminal — it's fucking expensive. And old. And clunky.

So I decided to "Ralph my way" and build a modern Bloomberg Terminal for Polymarket.

It took me 2 hours. I wrote 0 lines of code. I reviewed 0 lines of code.

Obviously, I didn't clone the full Bloomberg Terminal — I built the subset I needed for Polymarket analysis. But here's the thing: cloning the full terminal would probably take a day or two of token usage. Not months. Not years. Days.

## Proving It

I know what you're thinking: "This sounds like bullshit." Fair enough. So I'm working on an open source project to prove it isn't.

For my personal needs, I need an accounting application that manages multiple companies across multiple jurisdictions and currencies, with consolidated reporting — all respecting US GAAP standards. The kind of thing that would normally require a team and months of development. Instead, I'm Ralphing my way to a full-blown application in my weekend time. You can follow along at [Accountability](https://github.com/mikearnaldi/accountability).

Here's the catch: I'm deliberately not using state-of-the-art tooling. I'm building everything in the open, from first principles, to prove that this works. No secret sauce. No proprietary techniques. Just the basics, applied correctly.

Once it's done, I'll write a full article explaining how I did it — the process, the issues I found, and everything I learned along the way.

## What Is Software Development?

Stop and think about that for a moment.

If an idiot like me can clone a product that costs $30k per month — in two hours — what even is software development?

It's an interesting question. Software development used to be a craft. Something only a few people could do well. It required years of practice, deep knowledge, and hard-won experience. Now anyone can be a software developer.

A friend of mine with a legal background and almost no coding experience built a full-blown compliance solution to check privacy policies against the GDPR. He didn't use tools like Lovable — he hacked it by chatting with Claude Code, using Effect and Next.js. I checked the code. It's good.

The new software developer is no longer a craftsman. It's the average operator, empowered.

## Software Engineering Is Alive and Well

But here's the distinction that matters: while software development as we know it is dead, software engineering is alive and well.

The role has transformed. Engineers are no longer writing software — they're designing higher-order systems. They've moved from crafting code to designing systems that write code. They build techniques. They build skills. They develop the mental models and architectural intuitions that guide AI toward good solutions. They can adopt new technologies in minutes — in the worst case, hours.

This new reality requires rethinking everything. Forty years of best practices are now outdated. The patterns we relied on, the team structures we built, the processes we followed — all of it needs to be reconsidered. Individuals are far more powerful than before. A single person with the right skills can now do what used to require an entire team. Engineering teams, as we've known them, are becoming unnecessary.

## The Economic Reality

We are living through the Industrial Revolution of Software.

We're moving from a world where software is scarce to one where it's abundant and cheap. Just like the original Industrial Revolution transformed manufacturing — making goods that were once handcrafted luxuries into mass-produced commodities — AI is doing the same to software.

The economic implications are drastic — and poorly understood.

That will be the topic of a series of future posts.
