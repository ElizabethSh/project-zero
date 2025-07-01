import "./about.scss";

type AboutPageProps = { ref?: React.Ref<HTMLDivElement> };

const AboutPage: React.FC<AboutPageProps> = ({ ref }) => (
  <section className="about" id="about" ref={ref}>
    <h2 className="section-header">About</h2>
    <div className="about__content">
      <p>
        Passionate Frontend Developer building engaging and responsive web
        applications. I prioritize user comfort and accessibility, leveraging
        React, TypeScript, and modern JavaScript. Actively engage in continuous
        learning to maintain cutting-edge skills and am excited to collaborate
        with talented teams on innovative frontend projects.
      </p>
      <p>
        Currently I'm a Software Engineer at{" "}
        <a className="link__text" href="https://www.veo.co/">
          Veo Technologies
        </a>{" "}
        centers on the{" "}
        <a className="link__text" href="https://www.veo.co/product/veo-editor">
          Veo Editor
        </a>
        , where I specialize in building and maintaining frontend UI components.
        I am dedicated to ensuring the app adheres to web accessibility
        standards and best practices, providing an inclusive and optimal
        experience for all users.
      </p>
      <p>
        Outside of work, I enjoy traveling, diving into a good book, exploring
        my creative side with coloring, tackling personal coding projects or
        simply relaxing with my three feline companions.
      </p>
    </div>
  </section>
);

export default AboutPage;
