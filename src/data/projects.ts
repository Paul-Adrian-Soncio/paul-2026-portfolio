export type Project = {
  name: string;
  description: string;
  image: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Project One",
    description:
      "A short description of this project — what it does, the problem it solves, and any notable technical details worth highlighting.",
    image: "/images/projects/project-1.svg",
    status: "Deployed",
    githubUrl: "https://github.com/your-username/project-one",
    liveUrl: "https://project-one.example.com",
  },
  {
    name: "Project Two",
    description:
      "A short description of this project — what it does, the problem it solves, and any notable technical details worth highlighting.",
    image: "/images/projects/project-2.svg",
    status: "On Development",
    githubUrl: "https://github.com/your-username/project-two",
  },
  {
    name: "Project Three",
    description:
      "A short description of this project — what it does, the problem it solves, and any notable technical details worth highlighting.",
    image: "/images/projects/project-3.svg",
    status: "Deployed",
    liveUrl: "https://project-three.example.com",
  },
  {
    name: "Project Four",
    description:
      "A short description of this project — what it does, the problem it solves, and any notable technical details worth highlighting.",
    image: "/images/projects/project-4.svg",
    status: "Contributor",
    githubUrl: "https://github.com/your-username/project-four",
  },
];
