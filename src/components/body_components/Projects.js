import React from 'react'
import '../../assets/css/flickity.css'
import {
    Link
} from "react-router-dom";
import Fade from 'react-reveal/Fade'


function Projects() {
    return (
        <section className="project_body" id='projects'>
            <Fade cascade bottom>
                <div className='header'>
                    <h1>Projects</h1>
                </div>
            </Fade>
            <ProjectsList />
        </section>
    )
}

function ProjectsList() {
    return (
        <div className="list_projects">
            <ProjectItem name="WhatsCookn" src={require("../../assets/images/whatscookn.png")} id="whatscookn" />
            <ProjectItem name="BayanihanPH" src={require("../../assets/images/bayanihanph.png")} id="bayanihanph" />
            <ProjectItem name="Covid19-Tracker" src={require("../../assets/images/covidtracker.png")} id="covidtracker" />
            <ProjectItem name="Travel Design" src={require("../../assets/images/uichallenge.png")} id="traveldesign" />
            <ProjectItem name="Furniture Design" src={require("../../assets/images/furnituredesign.png")} id="furnituredesign" />
        </div>
    )
}

function ProjectItem(props) {
    let { name, src, id } = props
    return (
        <Link to={`/project/${id}`} className="link">
            <Fade bottom>
                <div className="project_object">
                    <div className={`project_image ${id}`}>
                        <img src={src} alt="project_image" alt="Project_Image" />
                    </div>
                    <div className="project_label">{name}</div>
                </div>
            </Fade>
        </Link>
    )
}


export default Projects