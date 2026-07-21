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

  // TODO: wire this up to a real email/notification service
  // (e.g. Resend, SendGrid, or Formspree) before going live.
  console.log("New contact form submission:", { name, email, message });

  return NextResponse.json({ success: true });
}
