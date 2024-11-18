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

const Projects = () => {

    const space = import.meta.env.VITE_SPACE
    const token = import.meta.env.VITE_CONTENTFUL_TOKEN

    // set to env variables
    const client = contentful.createClient({
        space: space,
        environment: 'master', // defaults to 'master' if not set
        accessToken: token,
    })

    const [projects, setProjects] = useState([])

    useEffect( () => {
        client.getEntries().then( (entries) => {
            console.log(entries)
            setProjects(entries.items)
        }).catch( (err) => {
            console.error(err)
        })
    }, [])


    return ( 
        <div className='projects-wrapper'>
            <div className="projects-container">
                {/* <button onClick={test}> test content </button> */}

                {projects && projects.map( (project) => (
                    <div className="projects-card">
                        {/* <button onClick={() => {console.log(project.fields)}}> Project </button> */}
                        <div className="top-half">
                            <img src={project.fields.thumbnail.fields.file.url} alt="" />
                        </div>
                        <div className="bottom-half">
                            <div className="title-group">
                                <h3 className='title'> {project.fields.title} </h3>
                                <a className='project-link' href={`https://github.com/alyosha-bar/${project.fields.githubLink}`}> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                            </div>
                            <p> {project.fields.description} 
                            </p>
                            <ul className="tech-stack">
                                {project.fields.techstack.map( (tech) => (
                                    <li className="tech"> <p> {tech} </p></li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Projects;