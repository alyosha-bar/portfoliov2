import '../styles/about.css'

const About = () => {
    return ( 
        <div className="about">
            <div className='about-text'>
                {/* <h1 className='title'> About Me </h1>    */}
                <h1 className="section-title"> About </h1>
                <p className="professional-summary">
                    I am a Full-Stack Developer focused on combining well designed software architecture with beautifully designed frontends. I am experienced in building backend APIs in <span className='highlight'> Javascript, Python </span> and <span className='highlight'> Golang </span>. Additionally, I have participated in a variety of projects using modern web frameworks like <span className='highlight'> React </span> and Vue JS. 
                    <br />
                    <br />
                    Currently I am a Co-Principal at King's Labs, a student-led software agency at King's College London. Part of this, I am one of the Executives at King's Business Club, largest student business society in the UK. In my role, I focus on overseeing and contributing to client work, meeting with clients and developing high quality software solutions.
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