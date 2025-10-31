import "./about.scss";

type AboutPageProps = { ref?: React.Ref<HTMLDivElement> };

const AboutPage: React.FC<AboutPageProps> = ({ ref }) => (
  <section className="about" id="about" ref={ref}>
    <h2 className="section-header">About</h2>
    <div className="about__content">
      <p>
        I’m a frontend developer who loves turning ideas into fast, intuitive,
        and visually polished web experiences. I work primarily with React,
        TypeScript, and modern JavaScript to build scalable, accessible
        interfaces that perform smoothly across devices and browsers. I’m
        passionate about crafting digital experiences that prioritize user
        comfort and accessibility while maintaining clean, reliable, and
        maintainable code.
      </p>
      <p>
        At{" "}
        <a className="link__text" href="https://www.veo.co/">
          Veo Technologies
        </a>{" "}
        I work as a Software Engineer on the{" "}
        <a className="link__text" href="https://www.veo.co/product/veo-editor">
          Veo Editor
        </a>
        , an AI-powered platform for recording, analyzing, and sharing sports
        games. My role focuses on developing new features and maintaining
        frontend components that improve usability and accessibility. I built a
        design system using React, TypeScript, and Storybook, which improved
        development speed and product consistency. I also implemented testing
        strategies with Jest and React Testing Library to improve code
        reliability and reduce post-release bugs. Beyond code, I enjoy
        collaborating with designers, backend developers, and product managers
        to bring ideas to life.
      </p>
      <p>
        Outside of work, I love traveling, getting lost in a good book,
        exploring my creative side with coloring, experimenting with personal
        coding projects, or just relaxing with my three cats. I’m always
        curious, always learning, and always excited about creating products
        that make people’s lives a little better.
      </p>
    </div>
  </section>
);

export default AboutPage;
