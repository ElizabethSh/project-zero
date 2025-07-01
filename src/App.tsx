import { useRef } from "react";
import Layout from "@components/layout";
import Header from "@components/layout/header";
import AboutPage from "@pages/about";
import ExperiencePage from "@pages/experience";
import HomePage from "@pages/home";
import ProjectsPage from "@pages/projects";

function App() {
  const refs = {
    about: useRef<HTMLDivElement>(null),
    home: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
  };

  return (
    <Layout header={<Header refs={refs} />}>
      <HomePage ref={refs.home} />
      <AboutPage ref={refs.about} />
      <ExperiencePage ref={refs.experience} />
      <ProjectsPage ref={refs.projects} />
    </Layout>
  );
}

export default App;
