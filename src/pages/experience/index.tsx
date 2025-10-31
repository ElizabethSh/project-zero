import { experience } from "@data/experience";

import "./experience.scss";

type ExperiencePageProps = {
  ref: React.Ref<HTMLDivElement>;
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ ref }) => (
  <section className="experience" id="experience" ref={ref}>
    <h2 className="section-header">Experience</h2>
    <ol className="experience__list">
      {experience.map(
        ({
          id,
          company,
          link,
          position,
          startDate,
          endDate,
          description,
          skills,
        }) => (
          <li key={id} className="experience__item">
            <a
              className="experience__company-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="experience__date">
                {startDate} - {endDate || "present"}
              </p>
              <div className="experience__content">
                <h3 className="experience__title">{`${position}, ${company}`}</h3>
                <ul className="experience__description-list">
                  {description.map((description) => (
                    <li
                      className="experience__description"
                      key={description.slice(0, 5)}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
                <ul className="experience__skills skills">
                  {skills.map((skill) => (
                    <li className="skill" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        )
      )}
    </ol>
  </section>
);

export default ExperiencePage;
