# Vignesh K P — Hardware ⇄ Software Portfolio

A single portfolio website containing two engineering identities — **Hardware** (VLSI / IoT / embedded systems) and **Software** (web development) — with an interactive switch between them.

Core identity: **One engineer. Two domains.**
Signature interaction: **Hardware ⇄ Software**

All content (projects, experience, skills, publications, education, certifications, links) is drawn directly from the two uploaded resumes. Nothing has been invented — see `js/data.js` for the single source of truth.

---

## A note on the tech stack actually used

The original brief asked for React + Vite + Tailwind + Framer Motion, packaged and built with `npm install && npm run build`. This project was built in a sandboxed environment **without access to the npm registry** (all outbound package-registry requests were blocked), so a React/Vite toolchain could not be installed, built, or verified end to end here.

Rather than hand you an unverified `package.json` and a build that might fail on your machine, this was built as a **dependency-free static site** — semantic HTML, hand-written CSS (with the same design-token/theming approach you'd use in Tailwind), and vanilla JavaScript for the mode switch, rendering, modal, and scroll effects. It implements every functional requirement from the brief (mode switching with full visual re-theming, project modals, scroll reveals, responsive nav, accessibility, SEO basics) with **zero install step** — open `index.html` and it works, or deploy the folder as-is to any static host.

If you'd like this rebuilt on top of React/Vite/Tailwind/Framer Motion, it can be re-scaffolded that way in an environment with npm registry access — the content/data layer (`js/data.js`) is already structured so it would drop directly into a `portfolioData` module in that version too.

---

## Features

- **Hardware ⇄ Software switch** in the navbar — instantly re-themes the whole site (cyan/blue for Hardware, violet/magenta for Software), swaps hero copy, projects, skills, experience, and shows/hides the Publications section (Hardware only)
- Mode is persisted in `localStorage` and reflected in the URL (`?mode=hardware` / `?mode=software`) so refreshes and shared links keep the right mode
- Animated SVG hero graphic per mode (circuit/HEMT motif for Hardware, code/editor motif for Software) — pure inline SVG, no stock images
- Project cards open a detail modal with full bullet points, tech tags, and a GitHub link where one exists in the resume
- Publications & Research section (Hardware mode) — uses the exact resume wording **"Accepted for Presentation"**; it never claims IEEE Xplore publication, since the resume only supports acceptance/presentation
- Fully responsive from 320px up through large desktop, with a dedicated mobile hamburger menu
- Keyboard-accessible mode switch, modal, and navigation; visible focus states; skip-to-content link; `prefers-reduced-motion` respected
- Contact section with a `mailto:` fallback form (no fake backend claimed) plus direct email/phone/LinkedIn/GitHub links
- Download-resume buttons link to the actual uploaded PDF for the active mode

## Tech stack

- HTML5 (semantic structure)
- CSS3 (custom properties for theming, no framework — Tailwind-equivalent utility patterns written by hand)
- Vanilla JavaScript (ES2017+, no build step, no dependencies)
- Google Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/data)

## Project structure

```
portfolio/
├── index.html
├── css/
│   ├── base.css          # design tokens, layout primitives, base type
│   ├── nav-hero.css       # navbar, mode switch, hero
│   └── sections.css       # about, skills, projects, timeline, publications, contact, footer
├── js/
│   ├── data.js             # ALL content — the single source of truth from both resumes
│   └── main.js             # rendering, mode switching, modal, nav, scroll reveal
├── assets/
│   ├── favicon.svg
│   └── resumes/
│       ├── Vignesh_KP_Hardware_Resume.pdf
│       └── Vignesh_KP_Software_Resume.pdf
└── README.md
```

## Running locally

No install step required. From the `portfolio/` folder, run any static file server, for example:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

or, with Node installed:

```bash
npx serve .
```

You can also just double-click `index.html` to open it directly in a browser (all paths are relative).

## Deployment

Since this is a static site, deploy the whole `portfolio/` folder as-is:

- **Netlify** — drag-and-drop the folder onto the Netlify dashboard, or `netlify deploy` from inside the folder
- **Vercel** — `vercel` from inside the folder (framework preset: "Other" / static)
- **GitHub Pages** — push the folder to a repo and enable Pages on the branch/root, or on `docs/`

No build command or environment variables are needed.

## Updating content later

All copy, projects, skills, experience, and links live in `js/data.js`, split into `common`, `hardware`, and `software`. Edit that file to add a new project, skill, or link — the rendering logic in `js/main.js` will pick it up automatically.

## Wiring up the contact form for real

The contact form currently opens the visitor's email client via a `mailto:` link — it does not send email directly, since no backend/email service is configured. To make it submit without opening an email client, connect a service such as [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) and point the form's `action`/submit handler at it.
