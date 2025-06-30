export type Experience = {
  id: string;
  link: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
};
