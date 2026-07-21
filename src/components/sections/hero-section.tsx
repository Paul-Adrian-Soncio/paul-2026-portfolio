import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DarkVeil } from "@/components/dark-veil";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 -z-10">
        <DarkVeil hueShift={150} warpAmount={4} resolutionScale={1} />
      </div>

      <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-neon-cyan text-glow-cyan">
        {site.location}
      </p>

      <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-foreground sm:text-6xl">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
          {site.shortName}
        </span>
      </h1>

      <p className="mt-1 font-heading text-xl font-medium text-neon-pink text-glow-pink sm:text-2xl">
        {site.role}
      </p>

      <p className="mt-6 max-w-xl text-balance text-muted-foreground">
        {site.tagline} I care about clean, maintainable code and building
        products that feel great to use. Currently exploring what&apos;s next in
        web development, one project at a time.
      </p>

      <div className="mt-10 flex w-full max-w-sm flex-col items-center gap-4 sm:max-w-none sm:w-auto sm:flex-row">
        <Button
          size="lg"
          nativeButton={false}
          className="w-3xs bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-lg shadow-neon-pink/30 hover:opacity-90 p-5 md:w-auto"
          render={
            <a href={site.resumeUrl} download>
              <Download className="size-4" />
              Download Resume
            </a>
          }
        />
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          className="w-3xs border-white/15 p-5 md:w-auto"
          render={<a href="#projects">View My Work</a>}
        />
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="mt-16 animate-bounce text-muted-foreground transition-colors hover:text-neon-cyan"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}
