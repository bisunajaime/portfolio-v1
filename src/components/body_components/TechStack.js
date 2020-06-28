import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faDatabase, } from '@fortawesome/free-solid-svg-icons'
import { faJava, faJs, faHtml5, faCss3, faPhp, faReact, faAndroid, faNodeJs, faLaravel, } from '@fortawesome/free-brands-svg-icons'

export default function TechStack() {
    return (
        <section className="techstack" id="techstack">
            <div className="techstack_title">
                <h1>Tech Stack</h1>
                <p>Some things I know that I can use to create projects.</p>
            </div>
            <div className="techstack_list">
                <div className="techstack_box orange">
                    <FontAwesomeIcon icon={faJava} color="orange" fixedWidth className="fa_icon" />
                    <p>Java</p>
                </div>
                <div className="techstack_box orange">
                    <FontAwesomeIcon icon={faHtml5} color="#ff8e25" fixedWidth className="fa_icon" />
                    <p>HTML</p>
                </div>
                <div className="techstack_box blue">
                    <FontAwesomeIcon icon={faCss3} color="lightblue" fixedWidth className="fa_icon" />
                    <p>CSS</p>
                </div>
                <div className="techstack_box orange">
                    <FontAwesomeIcon icon={faJs} color="orange" fixedWidth className="fa_icon" />
                    <p>JS</p>
                </div>
                <div className="techstack_box green">
                    <FontAwesomeIcon icon={faNodeJs} color="lightgreen" fixedWidth className="fa_icon" />
                    <p>Node</p>
                </div>
                <div className="techstack_box purple">
                    <FontAwesomeIcon icon={faPhp} color="#dfa8ff" fixedWidth className="fa_icon" />
                    <p>PHP</p>
                </div>
                <div className="techstack_box red">
                    <FontAwesomeIcon icon={faDatabase} color="#ffa9a9" fixedWidth className="fa_icon" />
                    <p>MS SQL</p>
                </div>
                <div className="techstack_box orange">
                    <FontAwesomeIcon icon={faFire} color="orange" fixedWidth className="fa_icon" />
                    <p>Firebase</p>
                </div>
                <div className="techstack_box blue">
                    <FontAwesomeIcon icon={faReact} color="#b0e6ff" fixedWidth className="fa_icon" />
                    <p>React</p>
                </div>
                <div className="techstack_box green">
                    <FontAwesomeIcon icon={faAndroid} color="#b8ffbc" fixedWidth className="fa_icon" />
                    <p>Android</p>
                </div>
                <div className="techstack_box blue">
                    <FontAwesomeIcon icon={faDatabase} color="lightblue" fixedWidth className="fa_icon" />
                    <p>MySQL</p>
                </div>
                <div className="techstack_box red">
                    <FontAwesomeIcon icon={faLaravel} color="red" fixedWidth className="fa_icon" />
                    <p>Laravel</p>
                </div>
            </div>
        </section>
    )
}