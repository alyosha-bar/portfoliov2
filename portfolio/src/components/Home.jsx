import '../styles/home.css'

import ME from '../assets/ME.jpg'

import pdfUrl from '../assets/CV.pdf'

const Home = () => {

    const onButtonClick = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "AleksejBarysnikov_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return ( 
        <div className="home">
            <div className="home-text">
                <div className="intro-title">
                    <span className="small"> Hello, my name is </span>
                    <h1 className="name"> Aleksej Barysnikov. </h1>
                    <h2 className="short-description"> I am a Full-Stack Web Developer </h2>
                </div>
                <div className="detail-area">
                    <p className="long-description">
                        I'm a second year Computer Science student with a keen interest in developing
                        beautiful, useful and real-world web applications.
                    </p>
                    {/* <a href="../assets/CV.pdf" download='AleksejBarysnikov_CV'> */}
                        <button className="btn" onClick={onButtonClick}> Download My Resume </button>
                    {/* </a> */}
                </div>
            </div>
            <div className="about-img">
                <img loading='lazy' src={ME} alt="" />
            </div>
        </div>
     );
}
 
export default Home;