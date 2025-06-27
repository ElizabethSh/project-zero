import { expirience } from "data/expirience";

import "./expirience.scss";

const ExpiriencePage: React.FC = () => (
  <section className="experience" id="experience">
    <h2 className="section-header">Experience</h2>
    <ul className="experience__list">
      {expirience.map(
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
                <p className="experience__description">{description}</p>
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
    </ul>
  </section>
);

export default ExpiriencePage;
