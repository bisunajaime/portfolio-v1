import React from 'react'
import AboutMe from './body_components/AboutMe'
import TechStack from './body_components/TechStack'
import Projects from './body_components/Projects'
import Organizations from './body_components/Organizations'
import Events from './body_components/Events'
import WebProjects from './body_components/WebProjects'

const Body = () => {

    return (
        <main id="main" >

            <AboutMe />
            <Projects />
            <WebProjects />
            <TechStack />
            <Events />
            <Organizations />
        </main>
    )
}

export default Body
