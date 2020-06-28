import React from 'react'
import AboutMe from './body_components/AboutMe'
import TechStack from './body_components/TechStack'
import Activities from './body_components/Activities'
import Projects from './body_components/Projects'

const Body = () => {
    return (
        <main>

            <AboutMe />
            <TechStack />
            <Projects />
            <Activities />
        </main>
    )
}

export default Body
