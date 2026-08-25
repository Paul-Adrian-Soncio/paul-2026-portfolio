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
    name: "WindFarer",
    description:
      "A web companion that assists with trip planning and budgeting. Plan your trip like you've got a friend for it.",
    image: "/images/projects/Windfarer.png",
    status: "Live",
    liveUrl: "https://windfarer.vercel.app/welcome",
  },
  {
    name: "NeverForget",
    description: "An oldschool style polaroid album to keep precious memories.",
    image: "/images/projects/Neverforget.png",
    status: "Live",
    liveUrl: "https://neverforget-tawny.vercel.app",
  },
  // {
  //   name: "Project Three",
  //   description:
  //     "A short description of this project — what it does, the problem it solves, and any notable technical details worth highlighting.",
  //   image: "/images/projects/project-3.svg",
  //   status: "Coming Soon",
  //   liveUrl: "https://project-three.example.com",
  // },
  // {
  //   name: "Project Four",
  //   description:
  //     "A short description of this project — what it does, the problem it solves, and any notable technical details worth highlighting.",
  //   image: "/images/projects/project-4.svg",
  //   status: "Coming Soon",
  //   githubUrl: "https://github.com/your-username/project-four",
  // },
];
