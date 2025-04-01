// import BlogPhoto from '../assets/BlogPhoto.png'
// import GoLangPhoto from '../assets/GolangImg.png'
// import SchoolPhoto from '../assets/School2.png'
// import BotPhoto from '../assets/Bot.png'
// import FDMScreenshot from '../assets/FDMScreenshot.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as contentful from 'contentful'


import '../styles/projects.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {

    const projects = [{
        id: 1,
        title: "API-Track",
        description: "I developed a software to help other developers track their 3rd party API usage. Implemented a full-stack web application with an interactive dashboard for users to view insigths. Engineered integrations for most modern web frameworks.",
        techstack: ["React", "Node JS", "Express", "PostgreSQL"],
        link: "https://api-track.netlify.app/"
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
        link: ""
    }

]

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    return ( 
        <div className='projects-wrapper'>
            <h1 className="exp-title"> Projects </h1>
            {projects.map((project) => (
                <div className='project-card' key={project.id}>
                    <div className='title-grp'>
                        <h2>{project.title}</h2>
                        <FontAwesomeIcon className='icon' onClick={() => openInNewTab(project.link)} icon={faGithub}></FontAwesomeIcon>
                    </div>
                    <div> {project.description} </div>
                    <ul className='tech-stack'>
                        {project.techstack.map((tech) => (
                            <li key={tech} className='tech'> {tech} </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
     );
}
 
export default Projects;