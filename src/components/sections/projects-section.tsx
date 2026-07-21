import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="My work" title="Projects" align="left" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="glass-panel flex flex-col overflow-hidden rounded-xl transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-16/10 w-full shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.name} thumbnail`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {project.status}
                  </p>
                </div>

                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex shrink-0 items-center gap-1.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source for ${project.name}`}
                        className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-neon-cyan/40 hover:text-neon-cyan"
                      >
                        <Code2 className="size-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live site for ${project.name}`}
                        className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-neon-pink/40 hover:text-neon-pink"
                      >
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel mt-6 flex items-center justify-center gap-2 rounded-full py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-neon-cyan"
        >
          More projects on
          <SiGithub className="size-4" />
        </a>
      </div>
    </section>
  );
}
