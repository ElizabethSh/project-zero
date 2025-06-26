import "./home.scss";

const HomePage: React.FC = () => (
  <section className="home">
    <img
      className="home__image"
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Lisa Frontend developer"
      width="500"
    />
    <div className="home__content">
      <h1 className="home__title">
        Hi, I'm Lisa <br /> Frontend developer
      </h1>
      <p>
        I build engaging and accessible web experiences with React & TypeScript.
      </p>
    </div>
  </section>
);

export default HomePage;
