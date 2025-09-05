import "../styles/experience.css"
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return ( 
        <section className="experience-section">
            <h1 className="exp-title"> Experience</h1>
            <ExperienceCard 
                title="Frontend Developer" 
                timeline="March 2025 - July 2025" 
                location={"Dustid"} 
                description={"I joined Dustid, an early stage startup as a Frontend Developer, working on modernising current web systems using Vue JS. I worked in a self-paced and organised environment which helped me develop organisational and communication skills with my team. "} 
                techstack={["Vue JS", "Node JS", "Shopify API"]}/>
            <ExperienceCard 
                title="App Development Intern" 
                timeline="Spring 2023" 
                location={"Unlocking Langauge"} 
                description={"I worked with Figma to design a Wireframe of an interactive learning tool. I focused on following the Laws of UI/UX to ensure a positive experience for users."} 
                techstack={["Figma"]}/>
        </section>
    );
}
 
export default Experience;