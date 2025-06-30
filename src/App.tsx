import Layout from "@components/layout";
import AboutPage from "@pages/about";
import ExpiriencePage from "@pages/expirience";
import HomePage from "@pages/home";
import ProjectsPage from "@pages/projects";

function App() {
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <ExpiriencePage />
      <ProjectsPage />
    </Layout>
  );
}

export default App;
