import "../styles/experience.css"

const ExperienceCard = ({timeline, title, location, description, techstack}) => {
    return ( 
        <div className="experience-card">
            <h2 className="timeline">{timeline}</h2>
            <div className="description-side">
                <h2 > {title}, {location} </h2>
                <div>{description}</div>
                <ul className="tech-used">
                    {techstack.map((tech) => (
                        <li className="tech">{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
     );
}
 
export default ExperienceCard;