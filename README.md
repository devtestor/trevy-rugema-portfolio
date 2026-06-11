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

## ✉️ Connecting Real Email Services (Nodemailer, Resend, SendGrid)

By default, the form submits payloads on the frontend to the backend router (`/api/contact` in `server.ts`). To wire up a real email delivery service when migrating, locate the following post handler in `server.ts` and modify as below.

### 1. Integrating Resend SDK

Install the package:
```bash
npm install resend
```

Then edit `/server.ts`:
```typescript
import { Resend } from 'resend';

// Lazy initialized Resend instance
let resendClient: Resend | null = null;
function getResend() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY required");
    resendClient = new Resend(key);
  }
  return resendClient;
}

// Inside the app.post("/api/contact", async (req, res) => { ... })
try {
  const resend = getResend();
  await resend.emails.send({
    from: 'Acquisition Bot <bot@yourdomain.com>',
    to: 'trevyrugema@gmail.com',
    subject: `🔥 New Client Lead: ${name} (${service})`,
    html: `
      <h2>New Lead Captured</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  });
} catch (err) {
  console.error(err);
}
```

### 2. Integrating Nodemailer (SMTP / Gmail)

Install the library:
```bash
npm install nodemailer @types/nodemailer
```

Then edit `/server.ts`:
```typescript
import nodemailer from 'nodemailer';

// Inside the post handler
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER, // e.g., your-gmail@gmail.com
    pass: process.env.SMTP_PASS, // App-specific password
  },
});

await transporter.sendMail({
  from: `"${name}" <${email}>`,
  to: 'trevyrugema@gmail.com',
  subject: `🔥 Web inquiry: ${service}`,
  text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nBudget: ${budget}\n\nMessage:\n${message}`,
});
```

---

Designed with 🌌 **Cosmic Space Theme Vibes** merged into **Bold Typography Structures**. Compiled by Trevy Rugema.
