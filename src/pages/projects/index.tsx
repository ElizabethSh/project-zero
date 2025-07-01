import { projects } from "data/projects";

import "./projects.scss";

const ProjectsPage = () => (
  <section className="projects" id="projects">
    <h1 className="section-header">Projects</h1>
    <ol className="projects__list">
      {projects.map(({ title, id, description, link, image, technologies }) => (
        <li className="projects__item project" key={id}>
          <a
            className="project__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project__image"
              src={image}
              alt={title}
              width="200"
            />
            <div className="project__content">
              <h3 className="project_title">{title}</h3>
              <p className="project__description">{description}</p>
              <ul className="project__technologies technologies">
                {technologies.map((tech) => (
                  <li className="technologies_item" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </li>
      ))}
    </ol>
  </section>
);

export default ProjectsPage;
