import type { Experience } from "types/index";

export const experience: Experience[] = [
  {
    id: "1",
    company: "Veo Technologies ApS",
    link: "https://veo.co",
    position: "Software Engineer",
    startDate: "Jan 2022",
    endDate: undefined,
    description: [
      "I'm responsible for driving frontend part of the Veo Editor, a web application for recording, analyzing, and sharing sport games. My focus is on building intuitive, responsive, and accessible interfaces with React and TypeScript, while collaborating closely with designers and backend developers to create smooth, engaging user experiences.",
      "I built a design system with React, TypeScript, and Storybook, which sped up development and kept the design consistent across products.",
      "I also introduced better testing practices with Jest and React Testing Library, improving code reliability and reducing bugs after release.",
    ],
    skills: [
      "TypeScript",
      "React",
      "JavaScript",
      "Next.js",
      "Redux",
      "HTML",
      "CSS / Sass",
      "Design system",
      "Storybook",
      "Jest",
      "Vitest",
      "React Testing Library",
    ],
  },
  {
    id: "2",
    company: "HTML Academy",
    link: "https://htmlacademy.ru",
    position: "Frontend Developer Student",
    startDate: "Sept 2019",
    endDate: "Apr 2021",
    description: [
      "During my education, I gained practical experience by building several projects from design to deployment using React, JavaScript, HTML, CSS, and Redux. I turned Figma designs into responsive, cross-device compatible interfaces while following accessibility best practices. To ensure reliability and quality, I integrated UI testing with Jest and React Testing Library.",
    ],
    skills: [
      "React",
      "JavaScript",
      "Redux",
      "HTML",
      "CSS / Sass",
      "Jest",
      "React Testing Library",
      "Webpack",
    ],
  },
];
