import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  budget?: string;
  timeline?: string;
};

function normalize(value?: string) {
  return (value ?? "").trim();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let body: ContactPayload = {};

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Please send the form as JSON." }, { status: 400 });
  }

  const name = normalize(body.name);
  const email = normalize(body.email).toLowerCase();
  const company = normalize(body.company);
  const message = normalize(body.message);
  const budget = normalize(body.budget);
  const timeline = normalize(body.timeline);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please add your name, email, and a short project summary." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address so we can reply." }, { status: 400 });
  }

  if (message.length > 4000) {
    return NextResponse.json({ error: "Your message is a bit too long. Please keep it under 4,000 characters." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "hello@nexus.studio";
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || "Nexus website <onboarding@resend.dev>";

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Budget: ${budget || "—"}`,
    `Timeline: ${timeline || "—"}`,
    "",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; color: #161A23; line-height: 1.6;">
      <h2 style="margin-bottom: 0.5rem;">New project inquiry</h2>
      <p style="margin: 0 0 1rem; color: #6B7280;">A new message came in from the Nexus website.</p>
      <ul style="padding-left: 1rem; margin: 0 0 1rem;">
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company || "—"}</li>
        <li><strong>Budget:</strong> ${budget || "—"}</li>
        <li><strong>Timeline:</strong> ${timeline || "—"}</li>
      </ul>
      <div style="padding: 1rem; border-radius: 0.75rem; background: #F0F1F5;">${message.replace(/\n/g, "<br />")}</div>
    </div>
  `;

  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set. Submission:", { name, email, company, budget, timeline, message });
    return NextResponse.json({ ok: true, delivered: false, message: "Message captured locally. Configure RESEND_API_KEY to deliver it by email." });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New project inquiry — ${name}${company ? ` (${company})` : ""}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", detail);
      return NextResponse.json({ error: "We could not deliver the email. Please try again shortly or contact hello@nexus.studio directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "We could not deliver the email. Please try again shortly or contact hello@nexus.studio directly." }, { status: 500 });
  }
}
