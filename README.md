# UI Playground

A small interactive UI prototype built with Next.js, React, TypeScript, and
Tailwind CSS. Enter an access code on the home page to open the studio at
`/studio`, then enter an idea to generate a live preview.

The temporary demo code is `1723`. The code check is client-side and is
only a UI flow, not secure authentication; use a server-side check before
protecting private content or data.

## Studio letter images

The studio letter has four decorative image placeholders. Add images to
`public/images/letter-1.jpg` through `public/images/letter-4.jpg` to fill
them. The placeholder gradients remain visible until each image is added.

The opening studio page also has four memory-card images. Add them as
`public/images/memory-1.jpg` through `public/images/memory-4.jpg`.

Add your audio file as `public/audio/letter-song.mp3`. The music controls stay
available while scrolling and while moving between the opening page and letter.
The control will show a message until that audio file exists.

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
