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
            <a href="#" className="cv">
                Download CV
            </a>
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
                <ProjectCarousel currentProjectInfo={currentProject} />
                <div className="project__info column-flex">
                    <div className="info">
                        <h3>{currentProject.name}</h3>
                        <ul className="row-flex">
                            {currentProject.stack.map(e => <li>{e}</li>)}
                        </ul>
                        <p>{currentProject.description}</p>
                        <div className="row-flex btn-group" >
                            <a href="#">Code</a>
                            <a href="#">Demo</a>
                        </div>
                    </div>
                    <div className="row-flex buttons">
                        <div className="row-flex control">
                            <img src={data.icons.prev} onClick={(e) => prevProject(e, projectIndex)} alt="prev_btn" />
                            <img src={data.icons.next} onClick={(e) => nextProject(e, projectIndex)} alt="next_btn" />
                        </div>
                        <img src={data.icons.close} onClick={() => hideProject()} alt="close_btn" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="column-flex">
            {currentProject == null ? null : currentProjectInfo()}
            <div className="projects row-flex width-100">
                {data['projects'].map((e, i) => <div key={e.name} className="project__item column-flex">
                    <div key={e.name} className="project__image">
                        <img src={e.cover_img} alt={e.name} />
                    </div>
                    <div className="project__description h__auto">
                        <h3>{e.name}</h3>
                        <div className="links row-flex">
                            <a href="https://github.com/jose-bamboo"  >Code</a>
                            <a href="#personal__projects" id={e.name} onClick={() => showProject(i)} >More</a>
                        </div>
                        <p>{e.short_description}</p>
                        <ul className="row-flex">
                            {e.stack.map(tech => <li key={`${e.name}_${tech}`} >{tech}</li>)}
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

const ProjectCarousel = props => {
    let { currentProjectInfo } = props
    const [imgsLoaded, setImgsLoaded] = useState(false)

    // preload project image
    useEffect(() => {
        const loadImage = image => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image
                loadImage.key = image
                // wait 2 seconds to simulate loading time
                loadImg.onload = () =>
                    resolve(image.url)
                loadImg.onerror = err => reject(err)
            })
        }

        Promise.all(currentProjectInfo.sample_ui.map((image, index) => {
            // let length = data.images.length
            // let currentIndex = index
            // let p = ((index / length) * 100).toFixed(2)
            loadImage("https://bisunajaime-portfolio.netlify.app" + image)
        }))
            .then(() => {
                setImgsLoaded(true)
            })
            .catch(err => console.log("Failed to load images", err))
    }, [])

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
    if (!imgsLoaded) {
        return <h1>Loading</h1>
    }
    if (currentProjectInfo.sample_ui.length == 1) {
        return <img className="web__demo" src={currentProjectInfo.sample_ui[0]} />
    } else {
        return <Flickity
            className="project__demo"
            elementType="div"
            options={sliderOptions}
            reloadOnUpdate={true}
            key={currentProjectInfo.name}
        >
            {currentProjectInfo.sample_ui.map((e, i) => <img key={`${currentProjectInfo.name}_${i}`} alt={currentProjectInfo.name} data-flickity-lazyload={e} className="carousel-cell-image" />)}
        </Flickity>
    }
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
                            <li key={`frontend_${e}`}>{e}</li>
                        ))}
                    </ul>
                </div>
                <div className="tech__stack__item">
                    <img src={data.techstacks.backend.cover_img} alt="backend_techstack" />
                    <h3>Backend</h3>
                    <ul className="row-flex">
                        {data.techstacks.backend.stacks.map(e => (
                            <li key={`backend_${e}`}>{e}</li>
                        ))}
                    </ul>
                </div>
                <div className="tech__stack__item">
                    <img src={data.techstacks.tools.cover_img} alt="tools_techstack" />
                    <h3>Tools</h3>
                    <ul className="row-flex">
                        {data.techstacks.tools.stacks.map(e => (
                            <li key={`tools_${e}`}>{e}</li>
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
                    <div key={e.name} className="hosted__event__item">
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
                    <div key={e.name} className="hosted__event__item">
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
                    <div key={e.name} className="organization__item column-flex">
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
