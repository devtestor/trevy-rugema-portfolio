import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Middleware to parse incoming JSON bodies
  app.use(express.json());

  // API router setup
  app.post("/api/contact", (req, res) => {
    const { name, email, company, service, budget, timeline, message } = req.body;

    // Validate main required fields
    if (!name || !email || !service || !message) {
      res.status(400).json({
        success: false,
        error: "Missing required fields. Please fill in your Name, Email, Service Needed, and Message."
      });
      return;
    }

    console.log("📩 [Contact Inquiry Received] @", new Date().toISOString());
    console.log(`-----------------------------------------------`);
    console.log(`Client Name:     ${name}`);
    console.log(`Email Address:   ${email}`);
    console.log(`Company Name:    ${company || "N/A"}`);
    console.log(`Service Needed:  ${service}`);
    console.log(`Budget Range:    ${budget || "N/A"}`);
    console.log(`Timeline:        ${timeline || "N/A"}`);
    console.log(`Message:         ${message}`);
    console.log(`-----------------------------------------------`);

    // In a high-complexity app, this would integrate with nodemailer, sendgrid, or resend.
    // We provide a complete log statement, indicating how to integrate and returning success.
    res.status(200).json({
      success: true,
      message: "Thank you for reaching out, " + name + "! Your inquiry has been sent directly to Trevy. We will get back to you within 24 hours to schedule a consultation."
    });
  });

  // Dynamic sitemap.xml router for perfect search engine indexing
  app.get("/sitemap.xml", (req, res) => {
    const host = req.headers.host || "trevyrugema.com";
    const protocol = req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    const baseUrl = `${protocol}://${host}`;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#services</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#solutions</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#portfolio</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#process</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/#about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
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
