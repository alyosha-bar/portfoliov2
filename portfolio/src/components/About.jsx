import '../styles/about.css'

const About = () => {
    return ( 
        <div className="about">
            <div className='about-text'>
                {/* <h1 className='title'> About Me </h1>    */}
                <p className="professional-summary">
                    I am a Full-Stack Developer focused on combining well designed software architecture with beautifully designed frontends. I am experienced in building backend APIs in Javascript, Python and Golang. Additionally, I have participated in a variety of projects using modern web frameworks like React and Vue JS. 
                    <br />
                    <br />
                    I am currently working as a <span className='highlight'> Frontend Developer </span> in an early stage startup - <a href=""> Dustid </a>. In my work here I am focused on maintaining and modernising existing systems and contributing to the developement of new systems.
                    <br />
                    <br />
                    Additionally, I work as a <span className='highlight'> Full Stack Engineer </span>, developing my API tracking software for other developers. This software aims to aid developers track how much monthly usage they have consumed of a particular API and provide valuable insights through data visualisation.
                    <br />
                    <br />
                </p>
            </div>
        </div>
     );
}
 
export default About;