import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Folder } from "@/components/folder";
import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pt-16 pb-8 sm:flex-row sm:justify-between sm:gap-8 sm:pt-16">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple text-xs font-bold text-white">
            {site.logoInitials}
          </span>
          <span className="font-heading text-sm font-semibold text-foreground">
            {site.name}
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Social Links
          </span>
          <Folder
            color="#39ff9d"
            size={0.75}
            items={[
              <a
                key="linkedin"
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="size-5" />
              </a>,
              <a
                key="github"
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SiGithub className="size-5" />
              </a>,
              <a key="email" href={`mailto:${site.email}`} aria-label="Email">
                <Mail className="size-5" />
              </a>,
            ]}
          />
        </div>

        <p className="text-sm text-center text-muted-foreground">
          &copy; {year} {site.name}.<br></br> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
