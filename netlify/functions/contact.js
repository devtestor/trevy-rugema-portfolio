const contactRecipient = process.env.CONTACT_TO_EMAIL || "trevyrugema@gmail.com";
const contactSender = process.env.CONTACT_FROM_EMAIL || "Trevy Rugema Portfolio <onboarding@resend.dev>";

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildContactEmail(payload) {
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

async function sendContactEmail(payload) {
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

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, {
      success: false,
      error: "Method not allowed.",
    });
  }

  let body;

  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, {
      success: false,
      error: "Invalid form submission.",
    });
  }

  const { name, email, company, service, budget, timeline, message } = body;

  if (!name || !email || !service || !message) {
    return json(400, {
      success: false,
      error: "Missing required fields. Please fill in your Name, Email, Service Needed, and Message.",
    });
  }

  const trimmedEmail = String(email).trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return json(400, {
      success: false,
      error: "Please provide a valid email address.",
    });
  }

  const payload = {
    name: String(name).trim(),
    email: trimmedEmail,
    company: company ? String(company).trim() : "",
    service: String(service).trim(),
    budget: budget ? String(budget).trim() : "",
    timeline: timeline ? String(timeline).trim() : "",
    message: String(message).trim(),
  };

  console.log("Contact inquiry received", {
    name: payload.name,
    email: payload.email,
    service: payload.service,
  });

  try {
    await sendContactEmail(payload);

    return json(200, {
      success: true,
      message: `Thank you for reaching out, ${payload.name}! Your inquiry has been sent directly to Trevy. We will get back to you within 24 hours to schedule a consultation.`,
    });
  } catch (error) {
    console.error("Failed to send contact inquiry email", error);

    return json(500, {
      success: false,
      error: "Your message could not be emailed right now. Please email direct to trevyrugema@gmail.com.",
    });
  }
}
