import Layout from "@components/layout";
import AboutPage from "@pages/about";
import ExpiriencePage from "@pages/expirience";
import HomePage from "@pages/home";

function App() {
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <ExpiriencePage />
    </Layout>
  );
}

export default App;
