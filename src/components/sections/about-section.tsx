import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-neon-pink/40 to-neon-cyan/30 blur-2xl" />
            <div className="glass-panel relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/profile.svg"
                alt={`Portrait of ${site.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Hey, I&apos;m <span className="text-foreground">{site.name}</span> —
              I build web applications that are fast, accessible, and a
              little bit fun to use. My focus is the intersection of clean
              engineering and thoughtful design.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not shipping code, I&apos;m usually exploring new
              tools, tinkering with side projects, or diving into whatever
              framework update just dropped. I like solving problems end to
              end — from the database schema to the last pixel of the UI.
            </p>
            <p className="leading-relaxed">
              I&apos;m always open to interesting conversations and new
              opportunities — feel free to reach out below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
