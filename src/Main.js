import React, { useState, useEffect } from 'react'
import data from './assets/content/content.json'
import Flickity from 'react-flickity-component'
import './assets/css/flickity.css'
import './assets/css/fullscreen.css'
import 'flickity-fullscreen'
import 'rodal/lib/rodal.css';


const Main = () => {
    return (
        <main className="">
            <MyInfo />
            <PersonalProjects />
            <TechStack />
            <HostedEvents />
            <AttendedEvents />
            <Organizations />
            {/* <ContactMe /> */}
        </main>
    )
}

const MyInfo = () => {
    return (
        <section id="my__info" className=" h__auto column-flex">
            <h1>Jaime Bisuña</h1>
            <p>
                I am a Software Developer who has a passion for developing mobile/web applications and believes that time is something that must not be wasted, but must be used wisely.
            </p>
            {/* <div className="socials row-flex" >
                <a href="" >I</a>
                <a href="" >I</a>
                <a href="" >I</a>
            </div> */}
        </section>
    )
}

const PersonalProjects = () => {
    return (
        <section id="personal__projects" className="box m__auto  h__auto">
            <h1 className="light-title">PERSONAL PROJECTS</h1>
            <Projects />
        </section>
    )
}

const Projects = () => {
    const [projectShow, setProjectShow] = useState(false)
    const [currentProject, setCurrentProject] = useState(null)
    const [projectIndex, setProjectIndex] = useState(null)
    const sliderOptions = {
        pageDots: false,
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        fullscreen: true,
        prevNextButtons: true,
        setGallerySize: false,
        imagesLoaded: true,
        lazyLoad: true
    }
    useEffect(() => {
        if (projectIndex != null) {
            setCurrentProject(data.projects[projectIndex])
        } else {
            hideProject()
        }
        if (projectIndex < 0) {
            setProjectIndex(data.projects.length - 1)
        }
        if (projectIndex > data.projects.length - 1) {
            setProjectIndex(0)
        }
    }, [currentProject, projectIndex, projectShow])

    const showProject = index => {
        setProjectShow(true)
        setProjectIndex(index)
        setCurrentProject(data.projects[index])
    }

    const hideProject = () => {
        setProjectIndex(null)
        setProjectShow(false)
        setCurrentProject(null)
    }

    const nextProject = (e, index) => {
        e.preventDefault()
        setProjectIndex(index + 1)

    }

    const prevProject = (e, index) => {
        e.preventDefault()
        setProjectIndex(index - 1)
    }

    const currentProjectInfo = () => {
        return (
            <div id="project__info">
                <Flickity
                    className="project__demo"
                    elementType="div"
                    options={sliderOptions}
                    reloadOnUpdate={true}
                    key={currentProjectInfo.name}
                >
                    {currentProject.sample_ui.map((e, i) => <img key={`${currentProjectInfo.name}_${i}`} alt={currentProjectInfo.name} src={e} />)}
                </Flickity>
                <div className="project__info column-flex">
                    {/* project info grid */}
                    {/* <img src={currentProject.cover_img} /> */}
                    <div className="info">
                        <h3>{currentProject.name}</h3>
                        <p>{currentProject.description}</p>
                        <ul className="row-flex">
                            {currentProject.stack.map(e => <li>{e}</li>)}
                        </ul>
                    </div>
                    <div className="row-flex buttons">
                        <img src={data.icons.prev} onClick={(e) => prevProject(e, projectIndex)} alt="prev_btn" />
                        <img src={data.icons.close} onClick={() => hideProject()} alt="close_btn" />
                        <img src={data.icons.next} onClick={(e) => nextProject(e, projectIndex)} alt="next_btn" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="column-flex">
            {currentProject == null ? null : currentProjectInfo()}
            <div className="projects row-flex width-100">
                {data['projects'].map((e, i) => <div className="project__item column-flex">
                    <div className="project__image">
                        <img src={e.cover_img} alt={e.name} />
                    </div>
                    <div className="project__description h__auto">
                        <h3>{e.name}</h3>
                        <div className="links row-flex">
                            <a href="https://github.com/jose-bamboo"  >Code</a>
                            <a href="https://github.com/jose-bamboo"  >Demo</a>
                            <a href="#personal__projects" id={e.name} onClick={() => showProject(i)} >More</a>
                        </div>
                        <p>{e.short_description}</p>
                        <ul className="row-flex">
                            {e.stack.map(tech => <li>{tech}</li>)}
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

const TechStack = () => {
    return (
        <section id="tech__stack" className="box m__auto  h__auto">
            <h1 className="light-title">TECH STACK</h1>
            <div className="tech__stack__items">
                <div className="tech__stack__item">
                    <img src={data.techstacks.frontend.cover_img} alt="frontend_techstack" />
                    <h3>Frontend</h3>
                    <ul className="row-flex">
                        {data.techstacks.frontend.stacks.map(e => (
                            <li>{e}</li>
                        ))}
                    </ul>
                </div>
                <div className="tech__stack__item">
                    <img src={data.techstacks.backend.cover_img} alt="backend_techstack" />
                    <h3>Backend</h3>
                    <ul className="row-flex">
                        {data.techstacks.backend.stacks.map(e => (
                            <li>{e}</li>
                        ))}
                    </ul>
                </div>
                <div className="tech__stack__item">
                    <img src={data.techstacks.tools.cover_img} alt="tools_techstack" />
                    <h3>Tools</h3>
                    <ul className="row-flex">
                        {data.techstacks.tools.stacks.map(e => (
                            <li>{e}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

const HostedEvents = () => {
    return (
        <section id="hosted__events" className="box m__auto  h__auto">
            <h1 className="light-title">HOSTED EVENTS</h1>
            <div className="hosted__events__items">
                {data.events.hosted.map(e => (
                    <div className="hosted__event__item">
                        <div className="hosted_event_image">
                            <img src={e.cover_img} alt={e.name} />
                        </div>
                        <h3>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="links">
                            <a href="https://github.com/jose-bamboo">Event</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
const AttendedEvents = () => {
    return (
        <section id="hosted__events" className="box m__auto  h__auto">
            <h1 className="light-title">ATTENDED EVENTS</h1>
            <div className="hosted__events__items">
                {data.events.attended.map(e => (
                    <div className="hosted__event__item">
                        <div className="hosted_event_image">
                            <img src={e.cover_img} alt={e.name} />
                        </div>
                        <h3>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="links">
                            <a href="https://github.com/jose-bamboo">Event</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const Organizations = () => {
    return (
        <section id="joined__organizations" className="box m__auto">
            <h1 className="light-title" >ORGANIZATIONS</h1>
            <div className="organizations__list" >
                {data.organizations.map(e => (
                    <div className="organization__item column-flex">
                        <div className="organization__image">
                            <img src={e.cover_img} alt={e.name} />
                        </div>
                        <h3>{e.name}</h3>
                        <span>{e.acronym} - {e.department}</span>
                        <span>{e.year}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

const ContactMe = () => {
    return (
        <section id="contact__me" className="m__auto">
            <div className="contact__bg row-flex">
                <h1>CONTACT</h1>
            </div>
            <div className="contact__form">

            </div>
        </section>
    )
}

export default Main
