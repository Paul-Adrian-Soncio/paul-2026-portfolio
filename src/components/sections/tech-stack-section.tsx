import { SectionHeading } from "@/components/section-heading";
import { LogoLoop, type LogoItem } from "@/components/logo-loop";
import { techStack } from "@/data/tech-stack";

const logos: LogoItem[] = techStack.map(({ name, icon: Icon }) => ({
  node: (
    <span className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-neon-cyan">
      <Icon className="size-8" />
      <span className="text-sm font-medium">{name}</span>
    </span>
  ),
  title: name,
  ariaLabel: name,
}));

export function TechStackSection() {
  return (
    <section id="tech-stack" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Toolbox" title="Tech Stack" />
      </div>

      <div className="mt-16">
        <LogoLoop
          logos={logos}
          speed={60}
          gap={56}
          logoHeight={32}
          fadeOut
          fadeOutColor="var(--background)"
          pauseOnHover
          ariaLabel="Tech stack"
        />
      </div>
    </section>
  );
}
