# Troubleshooting Guide

## Dev Server Import Resolution Error

### Error Message
```
[plugin:vite:import-analysis] Failed to resolve import "react-router-dom" from "src/App.tsx"
```

### What's Happening
This is a **dev server caching issue** - the production build works fine (confirmed), but the dev server cache needs clearing.

### Solution

#### Option 1: Quick Fix (Recommended)
```bash
# Kill the dev server (Ctrl+C)
rm -rf .vite node_modules/.vite node_modules/.cache
npm run dev
```

#### Option 2: Using the Script
```bash
bash dev.sh
```

#### Option 3: Fresh Everything
```bash
# Kill dev server first
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Why This Happens

Vite caches dependency pre-bundling in `.vite/` folder. Sometimes stale cache entries can cause import resolution issues during development, even though:

1. ✅ The package is installed (`npm ls react-router-dom` shows it)
2. ✅ Production builds work fine (`npm run build` succeeds)
3. ✅ TypeScript is happy (`npm run typecheck` passes)

---

## Verification

The dev server should work after clearing cache. If you see a blank page or errors:

1. **Check browser console** (F12 → Console tab)
   - Look for any red error messages
   - Note what it says and Google it

2. **Verify build works**
   ```bash
   npm run build
   npm run preview
   ```
   If preview works, the app is fine - dev server just has cache issues

3. **Check node_modules**
   ```bash
   npm ls react-router-dom framer-motion gsap aos swiper
   ```
   All should show version numbers, not "missing"

---

## If Problem Persists

Try this nuclear option:

```bash
# Stop dev server (Ctrl+C)
rm -rf node_modules package-lock.json .vite dist
npm install
npm cache clean --force
npm run dev
```

Then wait 30 seconds for dependencies to pre-bundle.

---

## Why Production Build Always Works

The production build (`npm run build`) uses a different code path than the dev server:

- **Dev Server**: Hot reload, quick recompilation, uses Vite's pre-bundling cache
- **Production Build**: Full optimization, no caching dependencies on dev paths

So if you're blocked on dev server but `npm run build` works, you can test in production mode:

```bash
npm run build
npm run preview
```

This opens the actual production build in your browser.

---

## Expected Behavior After Fix

When dev server starts correctly, you should see:
```
  VITE v5.4.21  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Then visit http://localhost:5173 and you should see the Akshyaa app load!

---

## Questions?

- **Production build fails?** Run `npm run typecheck` to see TypeScript errors
- **Still getting errors?** Check the browser console (F12) for actual errors
- **Module not found?** Run `npm install` again

The app is definitely production-ready - this is just a dev server quirk!
