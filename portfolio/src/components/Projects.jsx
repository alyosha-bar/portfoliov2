import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



import '../styles/projects.css'

const Projects = () => {

    const projects = [
    // {
    //     id: 1,
    //     title: "Project Management Web App",
    //     description: "I developed a software to help other developers track their 3rd party API usage. Implemented a full-stack web application with an interactive dashboard for users to view insigths. Engineered integrations for most modern web frameworks.",
    //     techstack: ["Golang", "Gin", "React", "Typescript", "PostgreSQL"],
    //     link: "https://github.com/alyosha-bar/trello-clone/"
    // },
    // {
    //     id: 2,
    //     title: "Developer Productivity (Desktop App)",
    //     description: "I developed a desktop application to aid developers in organisation. Using OAuth Login I aim to integrate with the GitHub API to provide specific insights for the user.",
    //     techstack: ["Golang", "Wails", "React", "Typescript", "SQLite"],
    //     link: "https://github.com/alyosha-bar/dev-productivity"
    // },
    {
        id: 1,
        title: "API-Track",
        description: "I developed a software to help other developers track their 3rd party API usage. Implemented a full-stack web application with an interactive dashboard for users to view insigths. Engineered integrations for most modern web frameworks.",
        techstack: ["React", "Node JS", "Express", "PostgreSQL"],
        link: "https://api-track.dev"
    },
    {
        id: 2,
        title: "Android Privacy Data Tracking App",
        description: "I developed an Android application which helps non-technical users analyse how apps on their phone use their sensitive data. I utilised an MVVM design pattern to write clean and testable code. Additionally, I implemnented a SpringBoot server to run Taint Analysis processes.",
        techstack: ["Kotlin", "Java", "SpringBoot", "Jetpack"],
        link: ""
    },
    {
        id: 3,
        title: "Employee Portal",
        description: "I worked with a team of 8 developers to create a Employee Portal for FDM. The project was a full-stack web application which handled authentication, submission of HR and admin management issues. I was responsible to developing the backend infrastructure and database design.",
        techstack: ["Node Js", "Express", "React", "PostgreSQL"],
        link: "https://github.qmul.ac.uk/ec22468/ecs506"
    }

]

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    return ( 
        <div className="projects-wrapper">
            <h1 className="section-title">Projects</h1>

            {projects.map((project) => (
                <div className="project-card" key={project.id}>
                <div className="project-header">
                    <div className="project-main">
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-location">{project.location}</p>
                    </div>

                    <div className="project-meta">
                    <span className="timeline">{project.timeline}</span>
                    <FontAwesomeIcon
                        className="icon"
                        onClick={() => openInNewTab(project.link)}
                        icon={faGithub}
                    />
                    </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <ul className="tech-stack">
                    {project.techstack.map((tech) => (
                    <li key={tech} className="tech">
                        {tech}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            {/* <div> Visit Full Project Archive </div> */}
            </div>

    );
}
 
export default Projects;