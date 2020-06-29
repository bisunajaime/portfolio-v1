import React from 'react'
import AboutMe from './body_components/AboutMe'
import TechStack from './body_components/TechStack'
import Activities from './body_components/Activities'
import Projects from './body_components/Projects'
import Organizations from './body_components/Organizations'
import Certificates from './body_components/Certificates'

const Body = () => {
    return (
        <main>

            <AboutMe />
            <TechStack />
            <Projects />
            <Activities />
            <Organizations />
            <Certificates />
        </main>
    )
}

export default Body
