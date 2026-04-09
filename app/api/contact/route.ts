import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateContactInput(payload: ContactPayload) {
  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const message = normalize(payload.message);
  const company = normalize(payload.company);

  const fieldErrors: FieldErrors = {};

  if (company) {
    fieldErrors.name = "Invalid submission.";
  }

  if (name.length < 2) {
    fieldErrors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    fieldErrors.name = "Name must be 80 characters or less.";
  }

  if (!EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  } else if (message.length > 2000) {
    fieldErrors.message = "Message must be 2000 characters or less.";
  }

  const isValid = Object.keys(fieldErrors).length === 0;

  return {
    isValid,
    fieldErrors,
    data: {
      name,
      email,
      message,
      company,
    },
  };
}

async function sendWithResend(params: { name: string; email: string; message: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[contact-api] Missing RESEND_API_KEY or CONTACT_TO_EMAIL. Message accepted in dev without email delivery.",
      );
      return { delivered: false, reason: "dev-no-email-config" as const };
    }
    throw new Error("Email service is not configured.");
  }

  const html = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${params.name}</p>
    <p><strong>Email:</strong> ${params.email}</p>
    <p><strong>Message:</strong></p>
    <p>${params.message.replace(/\n/g, "<br/>")}</p>
  `;

  const text = [
    "New portfolio contact message",
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    "",
    "Message:",
    params.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Portfolio Contact: ${params.name}`,
      reply_to: params.email,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend API error: ${response.status} ${body}`);
  }

  return { delivered: true as const };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const { isValid, fieldErrors, data } = validateContactInput(payload);

  if (!isValid) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors },
      { status: 400 },
    );
  }

  try {
    const result = await sendWithResend({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (!result.delivered) {
      return NextResponse.json({
        ok: true,
        message:
          "Message received. Email delivery is disabled in local dev until RESEND_API_KEY and CONTACT_TO_EMAIL are set.",
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("[contact-api] delivery failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send message right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
