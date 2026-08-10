# Nexus — remote software studio website

A full Next.js (App Router) + TypeScript + Tailwind CSS marketing site for a
remote-first software studio.

## Pages

- `/` — home
- `/about`
- `/services`
- `/work`
- `/pricing` (includes FAQ)
- `/careers`
- `/blog`
- `/contact` — working form, posts to `/api/contact`
- `/work/[slug]` — full case studies for Ledgerline, Farside, and Kestrel

## Design system

- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (labels, nav, data)
- **Colors:** defined as tokens in `tailwind.config.ts` — `paper`, `surface`, `ink`,
  `muted`, `line`, `cobalt`, `coral`
- **Signature element:** the live team-timezone panel in `components/WorldClock.tsx`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Contact form backend

The contact form posts to `app/api/contact/route.ts`, which sends the message via
[Resend](https://resend.com).

1. Copy `.env.example` to `.env.local`.
2. Create a free Resend account and API key, and set `RESEND_API_KEY`.
3. Set `CONTACT_TO_EMAIL` to the inbox that should receive inquiries.

Without an API key, submissions still succeed and are logged to the server console —
useful for local testing before you wire up delivery.

## Deploy

This project deploys as-is to Vercel, Netlify, or any Node hosting that supports
Next.js 14. Set the two environment variables above in your hosting provider's
dashboard for the contact form to actually deliver mail.

## Next steps to make it production-ready

1. Replace placeholder client names, project results, and team photos with real ones.
2. Add real social links in `components/Footer.tsx`.
3. Add an `og-image.png` and favicon to `/public` and reference them in
   `app/layout.tsx` metadata.
