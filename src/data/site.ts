export const site = {
  name: "Paul Adrian Soncio",
  shortName: "Paul Adrian",
  logoInitials: "PS",
  role: "Web Developer",
  tagline: "Building fast, thoughtful software for the web. ",
  description:
    "Personal portfolio of Paul Adrian Soncio, a web developer building fast, thoughtful web experiences.",
  location: "Based in the Philippines",
  email: "pauladrian.soncio@gmail.com",
  resumeUrl: "/2026_Resume_Paul.pdf",
  social: {
    github: "https://github.com/Paul-Adrian-Soncio",
    linkedin: "https://www.linkedin.com/in/pauladriansoncio/",
  },
} as const;

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
