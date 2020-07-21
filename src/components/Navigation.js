import React, { Component } from 'react'
import logo from '../assets/images/logo.svg'


function Navigation() {

    function toggleNav() {
        let nav = document.getElementById('navigation')
        nav.classList.toggle("closed")
    }

    return (
        <section className="navigation closed" id="navigation">
            <ul>
                <li><a href="#aboutme" onClick={toggleNav}>About</a></li>
                <li><a href="#techstack" onClick={toggleNav}>Techstack</a></li>
                <li><a href="#projects" onClick={toggleNav}>Projects</a></li>
                <li><a href="#events" onClick={toggleNav}>Events</a></li>
                <li><a href="#organizations" onClick={toggleNav}>Organizations</a></li>
            </ul>
            <div className="card">
                <img src={logo} alt="Logo" />
                <div className="card_info">
                    <h4>Jose Jaime Bisuna</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </section>
    )
}

export default Navigation