import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faBowlingBall, faPaintBrush, faCode, faBook } from '@fortawesome/free-solid-svg-icons'

export default function Hobbies() {
    return (
        <section className="hobbies" id="hobbies">
            <div className="hobbies_title">
                <h1>Hobbies</h1>
                <p>These are some things that I like to do when I'm not busy.</p>
            </div>
            <div className="hobbies_list">
                <div className="hobby_box">
                    <FontAwesomeIcon icon={faCode} color="white" fixedWidth className="fa_icon" />
                    <p>Code</p>
                </div>
                <div className="hobby_box">
                    <FontAwesomeIcon icon={faBowlingBall} color="grey" fixedWidth className="fa_icon" />
                    <p>Bowl</p>
                </div>
                <div className="hobby_box">
                    <FontAwesomeIcon icon={faTv} color="rgb(255, 90, 90)" fixedWidth className="fa_icon" />
                    <p>Netflix</p>
                </div>
                <div className="hobby_box">
                    <FontAwesomeIcon icon={faBook} color="rgb(218, 173, 173)" fixedWidth className="fa_icon" />
                    <p>Learn</p>
                </div>
                <div className="hobby_box">
                    <FontAwesomeIcon icon={faPaintBrush} color="rgb(255, 252, 209)" fixedWidth className="fa_icon" />
                    <p>Design</p>
                </div>
            </div>
        </section>
    )
}