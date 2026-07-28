"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import LetterGlitch from "@/components/letter-glitch";
import SpecularButton from "@/components/specular-button";
import { site } from "@/data/site";

const GLITCH_DURATION_MS = 900;
const FADE_DURATION_MS = 350;
const CLOSE_DURATION_MS = GLITCH_DURATION_MS + FADE_DURATION_MS;

export function IntroGate() {
  const [dismissed, setDismissed] = useState(false);
  const [closing, setClosing] = useState(false);

  if (dismissed) return null;

  const handleEnter = () => {
    setClosing(true);
    setTimeout(() => setDismissed(true), CLOSE_DURATION_MS);
  };

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm transition-opacity ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{
        transitionDuration: `${FADE_DURATION_MS}ms`,
        transitionDelay: closing ? `${GLITCH_DURATION_MS}ms` : "0ms",
      }}
    >
      <div
        className={`relative w-full max-w-3xl ${closing ? "animate-glitch-slice" : ""}`}
      >
        {closing && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-screen animate-rgb-split-red"
              style={{ backgroundColor: "rgba(255,0,80,0.15)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-screen animate-rgb-split-cyan"
              style={{ backgroundColor: "rgba(0,255,220,0.15)" }}
            />
          </>
        )}

        <div
          className={`glass-panel flex w-full overflow-hidden rounded-2xl border border-white/10 ${
            closing ? "animate-glitch-jitter" : ""
          }`}
        >
          <div className="relative hidden w-1/2 overflow-hidden md:block">
            <LetterGlitch
              glitchColors={["#12321f", "#39ff9d", "#2dd9ff"]}
              glitchSpeed={closing ? 15 : 50}
              outerVignette
              smooth={!closing}
            />
          </div>

          <div className="relative flex w-full flex-col items-center justify-center gap-6 px-8 py-16 text-center md:w-1/2">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-pink to-neon-purple text-lg font-bold text-white neon-border">
              {site.logoInitials}
            </span>

            <div className="space-y-2">
              <h1 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Welcome!
              </h1>
              <p className="max-w-sm text-sm text-muted-foreground sm:text-base">
                Click the button to proceed.
              </p>
            </div>

            <SpecularButton
              size="lg"
              lineColor="#39ff9d"
              baseColor="#7c5cff"
              textColor="#ffffff"
              tint="#2a1f4d"
              tintOpacity={1}
              disabled={closing}
              onClick={handleEnter}
            >
              <span className="flex items-center gap-2">
                Enter Site
                <ArrowRight className="size-4" />
              </span>
            </SpecularButton>
          </div>
        </div>
      </div>
    </div>
  );
}
