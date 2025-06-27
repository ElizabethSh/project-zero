import { expirience } from "data/expirience";

const ExpiriencePage: React.FC = () => (
  <section>
    <ul>
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
          <li key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p>
                {startDate} - {endDate || "present"}
              </p>
              <h3>{`${position}, ${company}`}</h3>
              <p>{description}</p>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </a>
          </li>
        )
      )}
    </ul>
  </section>
);

export default ExpiriencePage;
