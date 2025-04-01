import "../styles/experience.css"
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return ( 
        <section className="experience-section">
            {/* <div>
                <div> Frontend Developer <span>Dustid</span> </div>
                <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt.</div>
            </div>
            <div>
                <div> App Development Intern <span>Unlocking Language</span> </div>
                <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt.</div>
            </div> */}
            <h1 className="exp-title"> Experience</h1>
            <ExperienceCard title="Frontend Developer" timeline="March 2025 - Present" location={"Dustid"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt."} techstack={["Vue JS", "Node JS", "Shopify API"]}/>
            <ExperienceCard title="App Development Intern" timeline="Spring 2023" location={"Unlocking Langauge"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque odit quo velit ad nesciunt."} techstack={["Figma"]}/>
        </section>
    );
}
 
export default Experience;