<h1 align="center">
  Next.js TypeScript Starter
</h1>

---

## Included

- `not found page` page to handle 404 routes
- `config.ts` container site information to be used for seo and schema.org data
- `seo.ts` util to generate SEO metadata and schema.org
- `manifest.json` for site info
- `classnames` util for easily managing classes
- `components/atoms/Button.tsx` a button component with variants
- `hooks/useClickOutside` hook to check if user clicked outside the element
- `hooks/useModal` hook to create modals, which can close with esc

## Additional Packages Used

- next-view-transitions - for page smooth transitions
- Tailwind CSS - for styling(with typography plugin)
- Framer Motion - for animations
- Akar Icons - library for rounded icons
- Sonner - for toast messages
- use-sound - for using sounds
- Class Variance Authority - for type-safely managing class names

## Available Scripts

**Install Dependencies**

```bash
bun install
```

**Setup Pre-commit**

```bash
bun run prepare
```

**Start Development Server**

```bash
bun run dev
```

**Lint all the files**

```bash
bun run lint
```

**Format all files with Prettier**

```bash
bun run format
```

**Check TypeScript issues**

```bash
bun run type-check
```

**Build for Production**

```bash
bun run build
```

**Start Production Server**

```bash
bun start
```

---
