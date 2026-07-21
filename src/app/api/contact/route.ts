import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.FORMINIT_API_KEY;
  const formId = process.env.FORMINIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error("Missing FORMINIT_API_KEY or FORMINIT_FORM_ID env vars.");
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 },
    );
  }

  const forminitRes = await fetch(`https://forminit.com/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
    },
    body: JSON.stringify({
      blocks: [
        {
          type: "sender",
          properties: { email, fullName: name },
        },
        {
          type: "text",
          name: "message",
          value: message,
        },
      ],
    }),
  });

  if (!forminitRes.ok) {
    const detail = await forminitRes.text().catch(() => "");
    console.error("Forminit submission failed:", forminitRes.status, detail);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
