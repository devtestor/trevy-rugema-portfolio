import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const contactRecipient = process.env.CONTACT_TO_EMAIL || "trevyrugema@gmail.com";
const contactSender = process.env.CONTACT_FROM_EMAIL || "Trevy Rugema Portfolio <onboarding@resend.dev>";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildContactEmail(payload: Required<ContactPayload>) {
  const fields = [
    ["Client Name", payload.name],
    ["Email Address", payload.email],
    ["Company Name", payload.company || "N/A"],
    ["Service Needed", payload.service],
    ["Budget Range", payload.budget || "N/A"],
    ["Timeline", payload.timeline || "N/A"],
  ];

  const htmlRows = fields
    .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`)
    .join("");

  const text = [
    `Client Name: ${payload.name}`,
    `Email Address: ${payload.email}`,
    `Company Name: ${payload.company || "N/A"}`,
    `Service Needed: ${payload.service}`,
    `Budget Range: ${payload.budget || "N/A"}`,
    `Timeline: ${payload.timeline || "N/A"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <h2>New portfolio contact inquiry</h2>
    ${htmlRows}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `;

  return { html, text };
}

async function sendContactEmail(payload: Required<ContactPayload>) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { html, text } = buildContactEmail(payload);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactSender,
      to: [contactRecipient],
      reply_to: payload.email,
      subject: `New project inquiry from ${payload.name}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email request failed (${response.status}): ${errorText}`);
  }
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Middleware to parse incoming JSON bodies
  app.use(express.json());

  // API router setup
  app.post("/api/contact", async (req, res) => {
    const { name, email, company, service, budget, timeline, message } = req.body as ContactPayload;

    // Validate main required fields
    if (!name || !email || !service || !message) {
      res.status(400).json({
        success: false,
        error: "Missing required fields. Please fill in your Name, Email, Service Needed, and Message."
      });
      return;
    }

    const trimmedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      res.status(400).json({
        success: false,
        error: "Please provide a valid email address."
      });
      return;
    }

    const payload = {
      name: name.trim(),
      email: trimmedEmail,
      company: company?.trim() || "",
      service: service.trim(),
      budget: budget?.trim() || "",
      timeline: timeline?.trim() || "",
      message: message.trim(),
    };

    console.log("📩 [Contact Inquiry Received] @", new Date().toISOString());
    console.log(`-----------------------------------------------`);
    console.log(`Client Name:     ${payload.name}`);
    console.log(`Email Address:   ${payload.email}`);
    console.log(`Company Name:    ${payload.company || "N/A"}`);
    console.log(`Service Needed:  ${payload.service}`);
    console.log(`Budget Range:    ${payload.budget || "N/A"}`);
    console.log(`Timeline:        ${payload.timeline || "N/A"}`);
    console.log(`Message:         ${payload.message}`);
    console.log(`-----------------------------------------------`);

    try {
      await sendContactEmail(payload);

      res.status(200).json({
        success: true,
        message: "Thank you for reaching out, " + payload.name + "! Your inquiry has been sent directly to Trevy. We will get back to you within 24 hours to schedule a consultation."
      });
    } catch (error) {
      console.error("Failed to send contact inquiry email", error);
      res.status(500).json({
        success: false,
        error: "Your message could not be emailed right now. Please email direct to trevyrugema@gmail.com."
      });
    }
  });

  // Dynamic sitemap.xml router for perfect search engine indexing
  app.get("/sitemap.xml", (req, res) => {
    const host = req.headers.host || "trevy.netlify.app";
    const forwardedProto = req.headers["x-forwarded-proto"];
    const protocol = Array.isArray(forwardedProto)
      ? forwardedProto[0]
      : forwardedProto || (process.env.NODE_ENV === "production" ? "https" : "http");
    const baseUrl = `${protocol}://${host}`;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  });

  // Serve Vite app based on Environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production Mode: Serve the built dist folders
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Trevy Rugema Business Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical: Failed to boot app server", error);
});
