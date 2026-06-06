# Business Setup SaaS Landing Page

Modern Next.js + Tailwind CSS landing website for a business setup management platform.

## Included

- Next.js App Router project
- JavaScript only, no TypeScript
- Tailwind CSS styling
- Reusable component architecture
- Framer Motion reveal animations
- English, French, and Arabic translations
- RTL layout support for Arabic
- Light and dark mode with `localStorage`
- Real product images from the supplied dashboard screenshots
- SVG icons stored in `/public/icons`
- Optimized WebP images stored in `/public/images`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Font setup

The CSS already uses the requested font family name: `Nexa Pro_Trial`.

Licensed font files are not included. Add your own font files here:

```txt
/public/fonts/NexaProTrial-Light.woff2
/public/fonts/NexaProTrial-Regular.woff2
/public/fonts/NexaProTrial-Bold.woff2
```

If those files are not added, the site will fall back to system fonts.

## Edit content

All visible website text is stored in:

```txt
/lib/translations.js
```

Update the English, French, or Arabic objects to change content.

## Main files

```txt
/components     reusable UI components
/sections       landing page sections
/lib            translations, providers, image helpers
/public/images  supplied product screenshots converted to WebP
/public/icons   SVG icons
/app            App Router layout and page
```
