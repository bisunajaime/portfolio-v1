import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/images/logo.svg'


function AboutMe() {
    return (
        <section className="about_me" id="home">
            <div className="main_info">
                <div className="my_info">
                    <h1>Hello, I'm <br />Jaime Bisuña</h1>
                    <div className="divider">
                        <hr />
                        <img src={logo} alt="logo_here" />
                        <hr />
                    </div>
                    <p>I am a <b>Software Developer</b> who has a passion for developing mobile/web applications and believes that time is something that must not be wasted, but must be used wisely.
                    <br />
                        <br />
                    I have been part of school organizations such as <span id="aim">Association of Information
                        Management </span>
                    and <span id="dsc">Developer Student Clubs Philippines</span></p>

                    <div className="socials" target='_blank' rel="noopener">
                        <a href="https://github.com/jose-bamboo" className="circle" target="_blank" rel="noopener noreferrer">
                            <i><FontAwesomeIcon icon={faGithub} size="2x" color="black" /></i>
                        </a>
                        <a className="circle" href="https://www.facebook.com/DefinitelyNotJaime25" target='_blank' rel="noopener noreferrer">
                            <i><FontAwesomeIcon icon={faFacebook} size="2x" color="black" /></i>
                        </a>
                        <a className="circle" href="https://www.instagram.com/camboo_babbage/" target='_blank' rel="noopener noreferrer">
                            <i><FontAwesomeIcon icon={faInstagram} size="2x" color="black" /></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCNSVSg0tXQI9CnBOaOzRDIA' target='_blank' rel="noopener noreferrer" className="circle">
                            <i><FontAwesomeIcon icon={faYoutube} size="2x" color="black" /></i>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default AboutMe