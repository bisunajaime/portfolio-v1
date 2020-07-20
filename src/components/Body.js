import React from 'react'
import AboutMe from './body_components/AboutMe'
import TechStack from './body_components/TechStack'
import Projects from './body_components/Projects'
import Organizations from './body_components/Organizations'
import Events from './body_components/Events'

const Body = () => {
    return (
        <main>

            <AboutMe />
            <TechStack />
            <Projects />
            <Events />
            <Organizations />
            {/* <Certificates /> */}
        </main>
    )
}

export default Body
