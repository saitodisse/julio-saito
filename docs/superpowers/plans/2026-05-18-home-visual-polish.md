# Home Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the home page into a more premium, minimal portfolio with Geist Sans, a softer gold accent, better spacing, and more editorial treatment across the hero, header, and project cards.

**Architecture:** Keep the current Next.js App Router structure and make the polish mostly through typography, spacing, and theme token updates instead of adding new components. The main surface is `src/app/page.tsx`, supported by shared theme tokens in `src/app/globals.css`, font setup in `src/app/layout.tsx`, and shared chrome in `src/components/site-header.tsx`. Copy consistency should be enforced through `src/resources/site-content.ts` so the name, title, and hero text stay aligned.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, `next/font`, `lucide-react`.

---

## File Map

- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx`
- Modify: `src/components/site-header.tsx`
- Modify: `src/resources/site-content.ts`

## Task 1: Switch the site to Geist fonts and align the global tokens

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the Google font stack with Geist**

Target setup in `src/app/layout.tsx`:

```ts
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

- [ ] **Step 2: Keep the root HTML classes wired to those variables**

Target `html` className:

```tsx
className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
```

- [ ] **Step 3: Update the CSS variable map to use the mono variable consistently**

Target lines in `src/app/globals.css`:

```css
@theme inline {
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  --font-heading: var(--font-sans);
}
```

- [ ] **Step 4: Tighten the accent palette to the matte gold direction**

Target token values in `src/app/globals.css`:

```css
:root {
  --primary: #e8c84a;
  --secondary: #d7b932;
  --accent: #e5cf5a;
  --ring: #caa92f;
  --chart-1: #e8c84a;
  --chart-2: #d7b932;
  --chart-3: #caa92f;
  --chart-4: #e5cf5a;
  --chart-5: #7f6700;
}

.dark {
  --primary: #e8c84a;
  --secondary: #caa92f;
  --accent: #e5cf5a;
  --ring: #e8c84a;
}
```

- [ ] **Step 5: Make the base background slightly richer without changing the overall dark editorial feel**

Target `body` background treatment:

```css
body {
  @apply min-h-screen bg-background text-foreground;
  background-image:
    radial-gradient(
      circle at top,
      color-mix(in oklab, var(--primary) 12%, transparent),
      transparent 38%
    ),
    linear-gradient(180deg, var(--background), var(--background));
}
```

## Task 2: Refine the hero type, copy, and spacing

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/resources/site-content.ts`

- [ ] **Step 1: Normalize the displayed name and hero copy**

Use the shorter public name in the hero badge and header-facing copy:

```tsx
Julio Saito
```

Update the hero headline to the preferred Portuguese version:

```tsx
Engenharia de software para produtos úteis, simples e escaláveis.
```

- [ ] **Step 2: Reduce the headline mass slightly and open the line-height**

Target heading treatment:

```tsx
<h1 className="mt-6 max-w-3xl text-balance text-[clamp(3.2rem,10vw,5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-foreground sm:mt-8 sm:text-[clamp(3.6rem,6.8vw,5.4rem)]">
```

- [ ] **Step 3: Increase the vertical breathing room before the projects section**

Target spacing in `src/app/page.tsx`:

```tsx
<section className="grid items-center gap-10 pb-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:pb-24">
```

and

```tsx
<section id="projects" className="pb-16">
```

- [ ] **Step 4: Move the hero summary to a shorter, denser content string**

Target `professionalSummary` in `src/resources/site-content.ts`:

```ts
export const professionalSummary =
  "Engenheiro de software sênior especializado em TypeScript, React, Node.js e cloud, com mais de 20 anos criando produtos úteis, arquiteturas previsíveis e soluções com IA aplicada.";
```

- [ ] **Step 5: Keep the CTA hierarchy but make the secondary action quieter**

Target primary CTA:

```tsx
className={cn(
  buttonVariants({ size: "lg" }),
  "h-14 w-full justify-center rounded-xl px-6 text-[1rem] font-medium shadow-[0_12px_32px_rgba(232,200,74,0.22)] transition-transform hover:-translate-y-0.5 sm:w-auto",
)}
```

Target secondary CTA:

```tsx
className={cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-14 w-full justify-center rounded-xl border-border bg-card px-6 text-[1rem] font-medium text-foreground/90 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto",
)}
```

## Task 3: Give the photo treatment an editorial frame

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Increase the photo card sophistication with a stronger frame and inset highlight**

Target wrapper around the portrait:

```tsx
<div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)]">
```

- [ ] **Step 2: Add a subtle gold glow behind the image**

Target ambient background layer:

```tsx
<div className="absolute -inset-4 rounded-[36px] bg-[radial-gradient(circle_at_50%_35%,rgba(232,200,74,0.12),transparent_55%)] blur-2xl" />
```

- [ ] **Step 3: Keep the image treatment restrained**

Target image className:

```tsx
className="object-cover object-[50%_18%] brightness-[0.96] contrast-[1.04] grayscale-[0.18] saturate-[0.9]"
```

- [ ] **Step 4: Confirm the hero image sizing still respects the desktop layout**

Target image container:

```tsx
<div className="relative aspect-[0.92/1] w-full sm:aspect-[1.02/1] lg:min-h-[420px]">
```

## Task 4: Make the project cards uniform and lighter

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Keep the section title, but make the card grid breathe more**

Target grid spacing:

```tsx
<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
```

- [ ] **Step 2: Use a slightly softer card surface**

Target article container:

```tsx
<article className="flex min-h-[320px] flex-col rounded-[24px] border border-border bg-card/90 p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm sm:p-6">
```

- [ ] **Step 3: Standardize the internal vertical rhythm**

Target card structure:

```tsx
<div className="flex size-14 items-center justify-center rounded-2xl">
<h3 className="mt-7 text-[1.25rem] font-semibold tracking-[-0.04em] text-foreground sm:mt-8 sm:text-[1.35rem]">
<p className="mt-3 text-[0.98rem] leading-[1.65] tracking-[-0.01em] text-foreground/64">
<div className="mt-6 flex flex-wrap gap-2">
<div className="mt-auto flex items-center justify-between pt-7">
```

- [ ] **Step 4: Keep tag tones in a softer palette**

Target `tagTone` values:

```ts
const tagTone = [
  "border-border bg-secondary/20 text-secondary-foreground",
  "border-border bg-primary/12 text-foreground",
  "border-border bg-accent/20 text-accent-foreground",
  "border-border bg-muted/80 text-foreground/80",
];
```

- [ ] **Step 5: Preserve the external-link affordance but reduce visual noise**

Target action row:

```tsx
<a
  href={project.href}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 text-[0.96rem] font-medium tracking-[-0.01em] text-foreground/84 transition-colors hover:text-foreground"
>
```

## Task 5: Refine the header into a quieter frosted bar

**Files:**
- Modify: `src/components/site-header.tsx`

- [ ] **Step 1: Increase the blur/frost treatment while keeping it readable**

Target header wrapper:

```tsx
<header className="sticky top-0 z-20 border-b border-border/70 bg-background/72 backdrop-blur-xl">
```

- [ ] **Step 2: Make the brand name match the public-facing short name**

Target brand text:

```tsx
<span className="text-[0.98rem] font-medium tracking-[-0.03em] text-foreground sm:text-[1.05rem]">
  Julio Saito
</span>
```

- [ ] **Step 3: Keep the download CTA, but make it slightly less prominent than the nav**

Target button:

```tsx
className={cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-10 rounded-full border-border bg-card px-4 text-[0.9rem] font-medium text-foreground/90 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-px hover:bg-muted sm:h-11 sm:px-5 sm:text-[0.95rem]"
)}
```

- [ ] **Step 4: Keep nav pills stable and slightly more compact**

Target nav item class:

```tsx
className={cn(
  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium tracking-[-0.01em] transition-colors",
  isActive
    ? "border-primary bg-primary text-primary-foreground"
    : "border-border bg-card text-foreground/72 hover:border-primary/40 hover:text-foreground"
)}
```

## Task 6: Validate the polish against the repo's actual checks

**Files:**
- None

- [ ] **Step 1: Run lint**

Run:

```bash
pnpm lint
```

Expected:

```text
No lint errors in the modified files.
```

- [ ] **Step 2: Run type checking**

Run:

```bash
pnpm check-types
```

Expected:

```text
TypeScript completes without errors.
```

- [ ] **Step 3: Build the app**

Run:

```bash
pnpm build
```

Expected:

```text
Next.js production build completes successfully.
```

## Self-Review

1. Spec coverage: the plan covers the requested font swap, hero scale reduction, extra breathing room, premium photo frame, softer gold palette, quieter secondary cards, more consistent project cards, stronger CTA hierarchy, frosted header, and name consistency.
2. Placeholder scan: no `TBD`, `TODO`, or "write tests" placeholders are used. Every code-changing task includes the target snippet or exact class shape.
3. Type consistency: the plan keeps the existing file boundaries and does not introduce new helpers or undefined names. The only content rename is the public-facing short name `Julio Saito`, which is reflected consistently in the hero and header.
