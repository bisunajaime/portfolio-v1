import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function AboutMe() {
    return (
        <section className="about_me" id="home">
            <div className="photo_side">
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
            </div>
            <div className="main_info">
                <div className="my_info">
                    <h1>Hello, I'm <br />Jaime Bisuña</h1>
                    <p>21 year old Junior Software Developer from <span id="csb">De La Salle - College of Saint
                        Benilde</span>
                    who believes that time is something that must not be wasted, but must be used wisely.
                    He also has a passion for creating cross-platform mobile applications with <span
                            id="flutter">Flutter</span>.
                    <br />
                        <br />
                    He has been part of school organizations such as <span id="aim">Association of Information
                        Management</span>
                    and <span id="dsc">Developer Student Clubs Philippines</span></p>
                    <button>Resume</button>
                </div>
                <div className="socials">
                    <a href="https://github.com/jose-bamboo" className="circle" target="_blank">
                        <i><FontAwesomeIcon icon={faGithub} size="2x" color="black" /></i>
                    </a>
                    <a className="circle">
                        <i><FontAwesomeIcon icon={faLinkedin} size="2x" color="black" /></i>
                    </a>
                    <a className="circle">
                        <i><FontAwesomeIcon icon={faFacebook} size="2x" color="black" /></i>
                    </a>
                    <a className="circle">
                        <i><FontAwesomeIcon icon={faInstagram} size="2x" color="black" /></i>
                    </a>
                </div>
            </div>

            <div className="scroll_down">
                <p>Scroll down</p>
                <i className="fas fa-arrow-down"></i>
            </div>

        </section>
    )
}

export default AboutMe