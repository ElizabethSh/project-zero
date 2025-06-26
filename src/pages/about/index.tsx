import "./about.scss";

const AboutPage: React.FC = () => (
  <section className="about" id="about">
    <h2 className="section-header">About</h2>
    <img
      className="about__image"
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Lisa Frontend developer"
      width="500"
    />
    {/* TODO: rephrase it */}
    <div className="about__content">
      <p>
        Passionate Frontend Developer building engaging and responsive web
        applications. I prioritize user comfort and accessibility, leveraging
        React, TypeScript, and modern JavaScript. Actively engage in continuous
        learning to maintain cutting-edge skills and am excited to collaborate
        with talented teams on innovative frontend projects.
      </p>
      <p>
        My current role as a Software Engineer at Veo Technologies centers on
        the Veo Editor, where I specialize in building and maintaining frontend
        UI components. I am dedicated to ensuring the platform adheres to web
        accessibility standards and best practices, providing an inclusive and
        optimal experience for all users.
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
