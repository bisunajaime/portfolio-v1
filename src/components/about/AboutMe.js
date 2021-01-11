import { faGit, faGithub, faGithubSquare, faLinkedin, faLinkedinIn, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const AboutMe = () => {
    return (
        <section id="about">
            <div className="content">
                <h1>Hello there,<br />I'm Jaime Bisuña.</h1>
                {/* <h1>Hello there,<br />I'm <b className="purple-text">Jaime Bisuña</b>.</h1> */}
                <small>SOFTWARE DEVELOPER</small>
                {/* <span>Welcome to my portoflio!</span> */}
                <span>
                    I have a passion for developing mobile/web applications and believe that time is something that must not be wasted, but must be used wisely.
                </span>
                <div className="links">
                    <a href="https://www.linkedin.com/in/jose-jaime-bisu%C3%B1a-29733a202/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" color="white" /></a>
                    <a href="https://github.com/jose-bamboo" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className="icon" color="white" /></a>
                    <a href="https://twitter.com/lamboo_cetteuce" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="icon" color="white" /></a>
                </div>
                <a href={process.env.PUBLIC_URL + "/files/JoseJaimeBisunaResume.pdf"} target="_blank">Find my resume here.</a>
            </div>
        </section>
    )
}

export default AboutMe