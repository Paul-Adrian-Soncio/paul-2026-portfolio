"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-xl">
        <SectionHeading eyebrow="Let's talk" title="Contact Me" />

        <p className="mt-6 text-center text-muted-foreground">
          Have a project in mind or just want to say hi? Send a message and
          I&apos;ll get back to you, or reach me directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-neon-cyan hover:underline"
          >
            {site.email}
          </a>
          .
        </p>

        <form
          onSubmit={handleSubmit}
          className="glass-panel mt-10 flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="h-11 px-4 py-2.5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="h-11 px-4 py-2.5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
              className="px-4 py-3"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-lg shadow-neon-pink/30 hover:opacity-90 p-5"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Mail className="size-4" />
                Send Message
              </>
            )}
          </Button>

          {status === "success" && (
            <p className="flex items-center justify-center gap-2 text-sm text-neon-cyan">
              <CheckCircle2 className="size-4" />
              Message sent — thanks for reaching out!
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-destructive">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
