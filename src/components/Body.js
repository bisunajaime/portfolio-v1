import React, { Component } from 'react'
import AboutMe from './body_components/AboutMe'
import Hobbies from './body_components/Hobbies'
import Projects from './body_components/Projects'

const Body = () => {
    return (
        <React.Fragment>
            <AboutMe />
            <Hobbies />
            <Projects />
        </React.Fragment>
    )
}

export default Body