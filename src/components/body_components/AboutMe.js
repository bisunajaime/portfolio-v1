import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function AboutMe() {
    return (
        <section className="about_me" id="home">
            <img src={require('../../assets/images/main_image.png')} alt="Main_Image" />
            {/* <div className="photo_side">
                <div className="photo">
                    <h1>Some Photo</h1>
                </div>
                <div className="pages">
                    <div className="circle active"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="quote">

                    <p>“I like my photos black and white to cover my <span>yellow teeth</span>”</p>
                </div>
            </div> */}
            <div className="main_info">
                <div className="my_info">
                    <h1>Hello, I'm <br />Jaime Bisuña</h1>
                    <p>21 year old Junior Software Developer from <span id="csb">De La Salle - College of Saint
                        Benilde</span> who believes that time is something that must not be wasted, but must be used wisely.
                    <br />
                        <br />
                    He has been part of school organizations such as <span id="aim">Association of Information
                        Management </span>
                    and <span id="dsc">Developer Student Clubs Philippines</span></p>
                </div>
                <div className="socials">
                    <a href="https://github.com/jose-bamboo" className="circle" target="_blank" rel="noopener">
                        <i><FontAwesomeIcon icon={faGithub} size="2x" color="black" /></i>
                    </a>
                    <a className="circle">
                        <i><FontAwesomeIcon icon={faFacebook} size="2x" color="black" /></i>
                    </a>
                    <a className="circle">
                        <i><FontAwesomeIcon icon={faInstagram} size="2x" color="black" /></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCNSVSg0tXQI9CnBOaOzRDIA' target='_blank' rel="noopener" className="circle">
                        <i><FontAwesomeIcon icon={faYoutube} size="2x" color="black" /></i>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default AboutMe