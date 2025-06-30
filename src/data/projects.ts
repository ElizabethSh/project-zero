import type { Project } from "types/index";

export const projects: Project[] = [
  {
    id: "5",
    title: "Play your role",
    description:
      "Web application that allows users to manage Non-Player Characters (NPCs) for a role-playing game (RPG) like Dungeons & Dragons",
    link: "https://play-your-role-app.vercel.app/",
    image: "/images/play_your-role.png",
    technologies: [
      "React",
      "TypeScript",
      "HTML & CSS",
      "Vitest",
      "React Testing Library",
    ],
  },
  {
    id: "4",
    title: "Guess melody",
    description:
      "A fun and interactive game where players guess melodies based on short audio clips.",
    link: "https://guess-melody-ten.vercel.app/",
    image: "/images/guess_melody.png",
    technologies: [
      "React",
      "TypeScript",
      "HTML & CSS",
      "Redux Toolkit",
      "Axios",
      "React Router",
      "Vitest",
      "React Testing Library",
    ],
  },
  {
    id: "3",
    title: "Six cities",
    description:
      "Six Cities is a service for travelers who do not want to overpay for rental housing. Choose from six popular travel destinations and get an up-to-date list of rental deals. Detailed information about housing, showing the object on the map will help you quickly choose the best offer.",
    link: "https://1061045-six-cities-6-lzoj-jnq7o2zpq-lisa-shoshkinas-projects.vercel.app/",
    image: "/images/6_cities.png",
    technologies: [
      "React",
      "HTML & CSS",
      "React Router",
      "Redux Toolkit",
      "Axios",
      "Leaflet",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    id: "2",
    title: "Cinemaddict",
    description:
      "Cinemaddict is a service for fans of big movies. Detailed information about cinema, the ability to choose and create your own list of films to watch, discussion of films and much more. Cinemaddict will help you to spend time interestingly.",
    link: "https://1061045-cinemaddict-12-jmxk-l0z43gqt1-lisa-shoshkinas-projects.vercel.app/",
    image: "/images/cinemaddict.png",
    technologies: [
      "JavaScript",
      "HTML & CSS",
      "Webpack",
      "Chart.js",
      "Moment.js",
    ],
  },
  {
    id: "1",
    title: "Cinemaddict",
    description:
      "Simple 'instagram'-like app, where you can view photos, upload your own photos and use CSS-filters on them.",
    link: "https://elizabethsh.github.io/1061045-kekstagram-21/",
    image: "/images/keksogram.png",
    technologies: ["JavaScript", "HTML & CSS"],
  },
];
