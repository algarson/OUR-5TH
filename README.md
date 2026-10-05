# UI Playground

A small interactive UI prototype built with Next.js, React, TypeScript, and
Tailwind CSS. Enter an access code on the home page to open the studio at
`/studio`, then enter an idea to generate a live preview.

The temporary demo code is `1723`. The code check is client-side and is
only a UI flow, not secure authentication; use a server-side check before
protecting private content or data.

## Getting started

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

The Next.js server runs on Node.js. Add API routes or a database later if the
prototype needs server-side behavior.
