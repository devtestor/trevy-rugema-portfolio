# Trevy Rugema | Client-Acquisition Web System

A high-performance, conversion-optimized, professional service business website engineered to attract new startup clients, highlight advanced technical capabilities, and capture high-intent visual quote requests.

## 🚀 Architectural Tech Stack

- **Client Layer:** React 19 / TypeScript / Client routing, custom layout anchors.
- **Micro-Styling Engine:** Tailwind CSS 4 with ambient gradients, glass cards, and high-impact typography elements matching the **Bold Typography** design theme.
- **Backend Service:** Full-stack Express.js (`server.ts`) acting as the API proxy server, preserving API key security and processing form post logs.
- **Visual Framework Assets:** Custom Lucide React icon layers mapping each software pipeline category.

---

## 📂 Structural Code Design

```text
├── server.ts             # REST API Controller / Serve Static bundle
├── src/
│   ├── App.tsx           # Assembles page structure sections
│   ├── index.css         # Tailwind directives
│   ├── main.tsx          # Client Entry Point definition
│   ├── types/
│   │   └── index.ts      # Strictly typed models (Service, Projects, Inbound Form)
│   ├── lib/
│   │   └── data.ts       # Structured, literal marketing client copy & projects logs
│   └── components/
│       ├── Navbar.tsx        # Sticky layout header with mobile hamburger
│       ├── Hero.tsx          # Dynamic title, tagline, specializations and visual mock terminal
│       ├── Services.tsx      # Comprehensive cards highlighting solutions & client benefits
│       ├── WhoIHelp.tsx      # Bento grid of 10 targeted client markets
│       ├── Problems.tsx      # Diagnostic "Problem vs Solution" visual comparison cards
│       ├── Packages.tsx      # Investment package card highlights
│       ├── Portfolio.tsx     # Tech filter-supported engineering case studies showing outcome metrics
│       ├── Process.tsx       # Six-step methodical engagement roadmap
│       ├── About.tsx         # Executive biography of Trevy Rugema
│       ├── Testimonials.tsx  # True-to-life verifiable client quotes
│       ├── ContactForm.tsx   # Interactive validation form that posts to `/api/contact`
│       ├── FinalCTA.tsx      # High-impact user capture section
│       └── Footer.tsx        # Structured indexes and server monitor state indicators
```

---

## ⚡ Development & Deployment

### Run Locally

1. Install project dependencies:
   ```bash
   npm install
   ```
2. Launch the Development Server (with dynamic Express API routing + Vite auto reload active on port 3000):
   ```bash
   npm run dev
   ```

### Production Build & Deploy

Compile all production assets and bundle the server file:
```bash
npm run build
```

This commands builds static web assets to `/dist` and uses `esbuild` to compile `server.ts` into an optimized Node.js entry point `dist/server.cjs`.

Launch the production system on port 3000:
```bash
npm run start
```

---

## ✉️ Contact Form Email Delivery

The contact form posts to `/api/contact` in `server.ts`. The backend sends the inquiry through Resend's HTTP API and only returns success after the email request is accepted.

Add these environment variables locally and in production:

```bash
RESEND_API_KEY="re_xxxxxxxxx"
CONTACT_TO_EMAIL="trevyrugema@gmail.com"
CONTACT_FROM_EMAIL="Trevy Rugema Portfolio <hello@yourdomain.com>"
```

`CONTACT_FROM_EMAIL` should use a sender on a verified Resend domain for production delivery. Without `RESEND_API_KEY`, the API logs the inquiry but returns an error instead of pretending the email was sent.

---

Designed with 🌌 **Cosmic Space Theme Vibes** merged into **Bold Typography Structures**. Compiled by Trevy Rugema.
