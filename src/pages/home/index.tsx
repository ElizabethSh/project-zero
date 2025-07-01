import "./home.scss";

const HomePage: React.FC = () => (
  <section className="home" id="home">
    <div className="home__content">
      <h1 className="home__title">
        Hi, I'm Lisa <br /> Frontend developer
      </h1>
      <p className="home__description">
        I build engaging and accessible web experiences with React & TypeScript.
      </p>
    </div>
    <img
      className="home__image"
      src="/images/photo.jpg"
      alt="Lisa Frontend developer"
      width="500"
    />
  </section>
);

export default HomePage;
