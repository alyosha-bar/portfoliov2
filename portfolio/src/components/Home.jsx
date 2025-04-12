import '../styles/home.css'
import pdfUrl from '../assets/CV.pdf'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import Experience from './Experience'
import About from './About'
import Projects from './Projects'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {


    const onButtonClick = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "AleksejBarysnikov_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const sections = ["about", "experience", "projects"];
  const [activeSection, setActiveSection] = useState("about");

  // Scroll to section on click
  const handleScrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this value to trigger earlier/later
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


    return ( 
        <>
        <div className="home">
            <div className="home-text">
                <div className="intro-title">
                    <h1 className="name"> Aleksej Barysnikov. </h1>
                    <h2 className="small"> Full Stack Developer </h2>
                    <p className='short-description'>
                        I build complex full-stack web applications.
                    </p>
                </div>
                <div>
                <nav className="side-nav">
                    {sections.map((section) => (
                    <div
                        key={section}
                        className={`hover-line ${activeSection === section ? "active" : ""}`}
                        onClick={() => handleScrollTo(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </div>
                    ))}
                </nav>
                </div>
                <div className=''>
                    <ul className='socials'>
                        <li className='social'>
                            <a href="https://github.com/alyosha-bar">
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                <span className="tooltip"> GitHub </span>
                            </a>
                        </li>
                        
                        <li className='social'>
                            <a href="https://www.linkedin.com/in/aleksej-barysnikov-b93426255/">
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                <span className="tooltip"> LinkedIn </span>
                            </a>
                        </li>
                        
                        <li className='social'>
                            <a href="">
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span className="tooltip"> alohahoy@gmail.com </span>
                            </a>
                        </li>

                        <li className='social'> 
                            <Link to="/blog">
                                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                                <span className="tooltip"> Blog </span>
                            </Link>
                        </li>
                        
                        
                        <li>
                        <button className="btn" onClick={onButtonClick}> Download My Resume </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='static'>
                <div id="about" className="section"><About/></div>
                <div id="experience" className="section"><Experience/></div>
                <div id="projects" className="section"><Projects/></div>
            </div>
        </div>
        
        </>
     );
}

export default Home;