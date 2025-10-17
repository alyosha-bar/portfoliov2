import "../styles/experience.css"

const ExperienceCard = ({ timeline, title, location, description, techstack }) => {
  return (
    <div className="experience-card">
      <div className="description-side">
        <div className="exp-header">
          <h2 className="exp-title">{title}</h2>
          <span className="exp-location">• {location}</span>
          <span className="timeline">{timeline}</span>
        </div>

        <div className="exp-description">{description}</div>

        <ul className="tech-stack">
          {techstack.map((tech) => (
            <li className="tech" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

 
export default ExperienceCard;