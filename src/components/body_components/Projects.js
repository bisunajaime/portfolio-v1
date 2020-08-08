import React from 'react'
import '../../assets/css/flickity.css'
import {
    Link
} from "react-router-dom";


function Projects() {
    return (
        <section className="project_body" id='projects'>
            <div className='header'>
                <h1><span role="img" aria-label="projects">🚧</span> Mobile Projects</h1>
            </div>
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
            <ProjectItem name="TMDB" src={require("../../assets/images/tmdb.png")} id="tmdb" />
            <ProjectItem name="Furniture Shop UI" src={require("../../assets/images/furnituredesign.png")} id="furnituredesign" />
            <ProjectItem name="Travel App UI" src={require("../../assets/images/traveldesign.png")} id="traveldesign" />
        </div>
    )
}

function ProjectItem(props) {
    let { name, src, id } = props
    return (
        <Link to={`/${id}`} className="link">
            <div className="project_object">
                <div className={`project_image ${id}`}>
                    <img src={src} alt="Project_Image" />
                </div>
                <div className="project_label">{name}</div>
            </div>
        </Link>
    )
}


export default Projects