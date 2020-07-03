import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, } from '@fortawesome/free-solid-svg-icons'
import { faJava, faJs, faHtml5, faCss3, faPhp, faReact, faAndroid, faNodeJs, faLaravel, faGithub, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade'
import anime from 'animejs'


export default function TechStack() {

    return (
        <section className="techstack" id="techstack">
            <Fade cascade bottom>
                <div className="header">
                    <h1>Tech Stack</h1>
                    <p>Some things I know that I can use to create projects.</p>\
                </div>
            </Fade>
            <Fade bottom >
                <div className="techstack_list" id="info" >
                    <div className="techstack_box blue" id='box'>
                        <img alt='flutter_logo' src={require('../../assets/svg/flutter.svg')} className="fa_icon" />
                        <p>Flutter</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box orange" >
                        <img alt='firebase_logo' src={require('../../assets/svg/firebase.svg')} className="fa_icon" />
                        <p>Firebase</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box orange" >
                        <FontAwesomeIcon icon={faJava} color="orange" fixedWidth className="fa_icon" />
                        <p>Java</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box orange" >
                        <FontAwesomeIcon icon={faHtml5} color="#ff8e25" fixedWidth className="fa_icon" />
                        <p>HTML</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box blue" >
                        <FontAwesomeIcon icon={faCss3} color="lightblue" fixedWidth className="fa_icon" />
                        <p>CSS</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box red" >
                        <FontAwesomeIcon icon={faSass} color="lightpink" fixedWidth className="fa_icon" />
                        <p>SASS</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box orange" >
                        <FontAwesomeIcon icon={faJs} color="orange" fixedWidth className="fa_icon" />
                        <p>JS</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box purple" >
                        <FontAwesomeIcon icon={faBootstrap} color="#dfa8ff" fixedWidth className="fa_icon" />
                        <p>Bootstrap</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box green" >
                        <FontAwesomeIcon icon={faNodeJs} color="lightgreen" fixedWidth className="fa_icon" />
                        <p>Node</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box purple" >
                        <FontAwesomeIcon icon={faPhp} color="#dfa8ff" fixedWidth className="fa_icon" />
                        <p>PHP</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box red" >
                        <FontAwesomeIcon icon={faDatabase} color="#ffa9a9" fixedWidth className="fa_icon" />
                        <p>MS SQL</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box blue" >
                        <FontAwesomeIcon icon={faReact} color="#b0e6ff" fixedWidth className="fa_icon" />
                        <p>React</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box green" >
                        <FontAwesomeIcon icon={faAndroid} color="#b8ffbc" fixedWidth className="fa_icon" />
                        <p>Android</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box blue" >
                        <FontAwesomeIcon icon={faDatabase} color="lightblue" fixedWidth className="fa_icon" />
                        <p>MySQL</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box red" >
                        <FontAwesomeIcon icon={faLaravel} color="red" fixedWidth className="fa_icon" />
                        <p>Laravel</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                    <div className="techstack_box white" >
                        <FontAwesomeIcon icon={faGithub} color="white" fixedWidth className="fa_icon" />
                        <p>Github</p>
                        <div className='lang_info hide' id='flutter_knowledge'>
                            <h1>50%</h1>
                            <p>Flutter</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}