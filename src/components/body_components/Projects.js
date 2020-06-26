import React, { Component } from 'react'
import Flickity from 'react-flickity-component'
import '../../assets/css/flickity.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects_title">
                <h1>Here are some of my projects.</h1>
            </div>
            <ProjectsList />

        </section>
    )
}

function ProjectsList() {

    const sliderOptions = {
        pageDots: false,
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        setGallerySize: false,
        imagesLoaded: true,
        lazyLoad: true
    }
    return <Flickity
        className="projects_list"
        elementType="div"
        options={sliderOptions}
        reloadOnUpdate
        static
    >
        <div className="project_item whatscookn">
            <div className="tech_used">
                <img src={require('../../assets/images/flutterlogo.png')} alt="" />
                <img src={require('../../assets/images/firebase.png')} alt="" />
            </div>
            <img src={require('../../assets/images/whatscookn.png')} alt="" />
            <div className="project_card">
                <h1>WhatsCook'n</h1>
                <p>One of the projects I made during quarantine for small businesses found in BF Homes Paranaque to
                advertise their products. Having a list of categories ready for the regular user to pick from,
                            making them decide quicker when thinking of buying something.</p>
                <Link to="/project/whatscookn">See more</Link>
            </div>
        </div>
        <div className="project_item bayanihanph">
            <div className="tech_used">
                <img src={require('../../assets/images/flutterlogo.png')} alt="" />
                <img src={require('../../assets/images/firebase.png')} alt="" />
            </div>
            <img src={require('../../assets/images/bayanihanph.png')} alt="" />
            <div className="project_card">
                <h1>BayanihanPH</h1>
                <p>This app was made for relief centers and people who are looking to help others during calamities,
                where they can find the nearest relief center for donating things the relief center needs. The
                app was made during quarantine,
                together with my org mates from Developer Student Clubs for
                        our Solution Challenge proposal.</p>
                <Link to="/project/bayanihanph">See more</Link>
            </div>
        </div>
        <div className="project_item covidtracker">
            <div className="tech_used">
                <img src={require('../../assets/images/flutterlogo.png')} alt="" />
                <img src={require('../../assets/images/node.png')} alt="" />
            </div>
            <img src={require('../../assets/images/covidtracker.png')} alt="" />
            <div className="project_card">
                <h1>Covid19-Tracker</h1>
                <p>This app was made to keep track of the covid-19 cases realtime so that I would stay updated with
                the current status of the virus. Also, I had nothing else to do so why not code this. At the
                time I was also learning ExpressJS, so I made a json API and hosted it on heroku. Instead of
                        using an API someone else made hehe.</p>
                <Link to="/project/covidtracker">See more</Link>
            </div>
        </div>
        <div className="project_item needl">
            <div className="tech_used">
                <img src={require('../../assets/images/flutterlogo.png')} alt="" />
                <img src={require('../../assets/images/restApi.png')} alt="" />
                <img src={require('../../assets/images/laravel.png')} alt="" />
            </div>
            <img src={require('../../assets/images/needl.png')} alt="" />
            <div className="project_card">
                <h1>NeedL</h1>
                <p>A mobile application for blood test booking, where patients can look for nearby clinics that
                offer the blood test their looking for, and be able to see and generate results in the
                        application. Submitted by Capstone Group Jacobs Angels.</p>
                <a href="#">See more</a>
            </div>
        </div>
        <div className="project_item uichallenge">
            <div className="tech_used">
                <img src={require('../../assets/images/flutterlogo.png')} alt="" />
            </div>
            <img src={require('../../assets/images/uichallenge.png')} alt="" />
            <div className="project_card">
                <h1>Travel Design</h1>
                <p>Not a major app, but it was just to test and practice Flutter animations and I was bored...</p>
                <a href="#">See more</a>
            </div>
        </div>
    </Flickity>

}


function Project() {
    return (
        <div style={{ height: '100vh', width: '100%', backgroundColor: 'red' }}>

        </div>
    )
}

export default Projects