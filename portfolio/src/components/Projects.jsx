import BlogPhoto from '../assets/BlogPhoto.png'
import WorkoutPhoto from '../assets/WorkoutBuddyScreenshot.png'
import SchoolPhoto from '../assets/School2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import '../styles/projects.css'

const Projects = () => {
    return ( 
        <div>
            
            <div className="projects-container">
                <div className="newProjects">
                    <div className="projects-card">
                        <div className="top-half">
                            <img src={SchoolPhoto} alt="" />
                        </div>
                        <div className="bottom-half">
                            <div className="title-group">
                                <h3 className='title'> Music & Quotes Discord Bot </h3>
                                <a className='project-link' href=""> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                            </div>
                            <p> Simple discord bot that can play, pause and queue music, as well as save quotes to a 
                                database. Can fetch quotes by user and word.
                            </p>
                            <ul className="tech-stack">
                                <li className="tech"> <p> Python </p></li>
                                <li className="tech"> <p> Discord Py </p> </li>
                                <li className="tech"> <p> Youtube Download </p> </li>
                                <li className="tech"> <p> SQLite </p> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="top-half">
                            <img src={BlogPhoto} alt="" />
                        </div>
                        <div className="bottom-half">
                            <div className="title-group">
                                <h3 className='title'> Blog Application </h3>
                                <a className='project-link' href=""> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                            </div>
                            <p> Blog Application to host a client's blog. Allows users to make an account and for one user to 
                                write new blog posts. Each blog post can have a photo gallery. Uses Firebase for data and file storage and React for the frontend.
                            </p>
                            <ul className="tech-stack">
                                <li className="tech"> <p> React JS </p></li>
                                <li className="tech"> <p> Firebase </p> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="top-half">
                            <img src={WorkoutPhoto} alt="" />
                        </div>
                        <div className="bottom-half">
                            <div className="title-group">
                                <h3 className='title'> Workout Buddy </h3>
                                <a className='project-link' href=""> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                            </div>
                            <p> Website for users to be able to create workout plans for themselves and track their progress. 
                                Allows for user authentication and authorization. PostgreSQL for DB,
                                Express JS for API routes and React for the U.I. 
                            </p>
                            <ul className="tech-stack">
                                <li className="tech"> <p> React JS </p></li>
                                <li className="tech"> <p> Express JS </p> </li>
                                <li className="tech"> <p> Node JS </p> </li>
                                <li className="tech"> <p> PostgreSQL </p> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="top-half">
                            <img src={SchoolPhoto} alt="" />
                        </div>
                        <div className="bottom-half">
                            <div className="title-group">
                                <h3 className='title'> School Management System </h3>
                                <a className='project-link' href=""> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                            </div>
                            <p> Simple discord bot that can play, pause and queue music, as well as save quotes to a 
                                database. Can fetch quotes by user and word.
                            </p>
                            <ul className="tech-stack">
                                <li className="tech"> <p> Java </p></li>
                                <li className="tech"> <p> Java Swing </p> </li>
                                <li className="tech"> <p> MySql DB </p> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="top-half">
                            <img src={SchoolPhoto} alt="" />
                        </div>
                        <div className="bottom-half">
                            <div className="title-group">
                                <h3 className='title'> Personal Banking App </h3>
                                <a className='project-link' href=""> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                            </div>
                            <p> Desktop app for expense and savings tracking. Uses SQLite for Database and Python for the U.I. 
                                As well as graphing libraries for better data visualization and a clear user experience.
                            </p>
                            <ul className="tech-stack">
                                <li className="tech"> <p> Python </p></li>
                                <li className="tech"> <p> SQLite </p> </li>
                                <li className="tech"> <p> MatplotLib </p> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="projects">
                <div className="projects-area">
                    <div className="text-area">
                        <h1 className="title"> Blog Application <span className='clarification'> Personal Project </span> </h1>
                        <p className="project-description">
                        I made this project to practice my skills in React and Firebase. This project is on going and I am to have it deployed soon. 
                        My aim when starting this project 
                        was to create a Blog Platform for my client to put their blogs on, as they previously used Facebook for that.
                        <br />
                        <br />
                        This project has some unique requirements that I needed to fulfill. For example, my client was imperitive on having each blog
                        is paired with a photo gallery. Additionally, each entry has to be able to translated from Russian (original) to English.
                        Furthermore, the website had to be able to authenticate users, allowing each user a unique experience with commenting and 
                        saved posts functionality. To achieve these requirements I used React as the Frontend and Firebase to handle image file 
                        storage, blog content & other information, and authentication.
                        <br />
                        <br />
                        This is the GitHub repo: <a href=""> Project Repo </a>
                        <br />
                        This is the Project Demo Video: <a href=""> Project Demo </a>
                        </p>

                        <ul className="tech-stack">
                            <li className="tech"> <p> React JS </p></li>
                            <li className="tech"> <p> CSS </p> </li>
                            <li className="tech"> <p> Firebase </p> </li>
                        </ul>
                    </div>
                    <div className="image-area">
                        <img className='long-photo' src={BlogPhoto} alt="" />
                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="projects-area">
                    <div className="text-area">
                        <h1 className="title"> Workout Buddy <span className='clarification'> Personal Project </span> </h1>
                        <p className="project-description">
                        I made this project to start learning the MERN tech-stack. I had already started with React was
                        seeking to expand my knowledge to progress to Full-Stack Development. I decided to use a NoSQL database
                        like MongoDB, as I already had experience with SQL.
                        <br />
                        <br />
                        This project was a simple CRUD application, however the challenge was implementing full user authentication 
                        and authorization. Using JWT tokens. This was a huge challenge for me and still is a difficult feature to implement. 
                        This project was instrumental in teaching me how http request routes work in practice, and implementing them using express, 
                        testing using postman was a great learning experience for me.
                        <br />
                        <br />
                        This is the GitHub repo: <a href=""> Project Repo </a>
                        <br />
                        This is the Project Demo Video: <a href=""> Project Demo </a>
                        </p>

                        <ul className="tech-stack">
                            <li className="tech"> <p> React JS </p></li>
                            <li className="tech"> <p> MongoDB </p> </li>
                            <li className="tech"> <p> Express </p> </li>
                            <li className="tech"> <p> Node JS </p> </li>
                        </ul>
                    </div>
                    <div className="image-area">
                        <img src={WorkoutPhoto} alt="" />
                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="projects-area">
                    <div className="text-area">
                        <h1 className="title"> School Management System <span className='clarification'> Coursework Project </span> </h1>
                        <p className="project-description">
                            This project was part of my coursework in my final year of high school. I made it using Java and MySql. It was an introduction
                            to Object Oriented Programming using Java and served as a foundation for my programming moving forward.
                            This project, although, not the greatest taught me a great deal on how GUIs and OOP apps are made.
                            <br />
                            <br />
                            The project was a coursework so it had requirements from the marking criteria forcing me to use best OOP practices 
                            such as Inheritence, Encapsulation, Abstraction and Polymorphism. Addtionally, it taught me the basics of GUI development, which
                            was very important as it is different to console based programmes I was building before. Furthermore, it was a first introduction to
                            SQL and databases, which are skills that I actively use to this day. 
                            <br />
                            <br />
                            This is the GitHub repo: <a href=""> Project Repo </a>
                            <br />
                            This is the Project Demo Video: <a href="https://youtu.be/bAPGfz2smSM"> Project Demo </a>
                        </p>

                        <ul className="tech-stack">
                            <li className="tech"> <p> Java </p></li>
                            <li className="tech"> <p> Java Swing </p> </li>
                            <li className="tech"> <p> MySQL </p> </li>
                        </ul>
                    </div>
                    <div className="image-area">
                        <img src={SchoolPhoto} alt="" />
                    </div>
                </div>
            </div> */}
        </div>
     );
}
 
export default Projects;