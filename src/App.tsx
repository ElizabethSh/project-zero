import Layout from "@components/layout";
import AboutPage from "@pages/about";
import ExperiencePage from "@pages/experience";
import HomePage from "@pages/home";
import ProjectsPage from "@pages/projects";

function App() {
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
    </Layout>
  );
}

export default App;
