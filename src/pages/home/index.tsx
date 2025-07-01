import "./home.scss";

type HomePageProps = { ref: React.Ref<HTMLDivElement> };

const HomePage: React.FC<HomePageProps> = ({ ref }) => (
  <section className="home" id="home" ref={ref}>
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
