import { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import data from '../../content.json'
import ImagesLoaded from 'react-images-loaded';
import Flickity from 'react-flickity-component'
import '../../lib_css/flickity.css'
import '../../lib_css/fullscreen.css'
import 'flickity-fullscreen'


const Projects = () => {
    return (
        <section id="projects">
            <div className="label">
                <small>Some of my</small>
                <h1>Personal Projects</h1>
            </div>
            <ProjectDemo />
        </section>
    )
}

const ProjectDemo = () => {
    const [selectedProject, setSelectedProject] = useState(0)
    const [imgsLoaded, setImgsLoaded] = useState(false)
    const [perspective, setPerspective] = useState("rotateX(0deg) rotateY(0deg)")
    const sliderOptions = {
        pageDots: false,
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        fullscreen: true,
        prevNextButtons: false,
        setGallerySize: false,
        imagesLoaded: true,
        lazyLoad: true,
        groupCells: '50%'
    }

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

        Promise.all(data.projects[selectedProject].sample_ui.map((image, index) => {
            // let length = data.images.length
            // let currentIndex = index
            // let p = ((index / length) * 100).toFixed(2)
            loadImage(process.env.PUBLIC_URL + image)
        }))
            .then(() => {
                setImgsLoaded(true)
            })
            .catch(err => console.log("Failed to load images", err))
    }, [selectedProject])

    return (
        <div className="demo">
            <div id="heads" className='heads'>
                {data.projects.map((e, i) => {
                    return (<a href="#showcase" onClick={() => setSelectedProject(i)} className="head">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + e.cover_img} />
                        </div>
                    </a>)
                })}
            </div>
            <div id="showcase" className="project">
                <Flickity
                    className="image"
                    elementType="div"
                    options={sliderOptions}
                    reloadOnUpdate={true}
                    key={data.projects[7].name}
                >
                    {data.projects[selectedProject].sample_ui.map((e, i) => <img key={`${data.projects[selectedProject].name}_${i}`} alt={data.projects[selectedProject].name} data-flickity-lazyload={process.env.PUBLIC_URL + e} src={process.env.PUBLIC_URL + "/assets/images/loading.png"} className="" />)}
                </Flickity>

            </div>
            <div className="selected">
                <div className="details">
                    <small style={{ borderBottomColor: `${data.projects[selectedProject].color}` }}>More about the project</small>
                    <h1>{data.projects[selectedProject].name}</h1>
                    <ul>
                        {data.projects[selectedProject].stack.map(e => {
                            return (
                                <li style={{
                                    border: `1px solid ${data.projects[selectedProject].color}`,
                                    color: data.projects[selectedProject].color
                                }}>{e}</li>
                            )
                        })}
                    </ul>
                    <p>{data.projects[selectedProject].description}</p>
                    <div className="links">
                        <a
                            style={{ color: data.projects[selectedProject].color, textDecoration: 'none', margin: data.projects[selectedProject].demo_video ? '' : 0 }}
                            href={data.projects[selectedProject].git_url ?? '#showcase'}
                            target={data.projects[selectedProject].git_url ?? '#'}
                        >
                            {data.projects[selectedProject].git_url ? 'Code' : ''}
                        </a>
                        <a
                            style={{ color: data.projects[selectedProject].color, textDecoration: 'none', margin: data.projects[selectedProject].demo_video ? '' : 0 }}
                            href={data.projects[selectedProject].demo_video ?? '#showcase'}
                            target={data.projects[selectedProject].demo_video ?? '#'}
                        >
                            {data.projects[selectedProject].demo_video ? 'Demo' : ''}
                        </a>
                        <a
                            style={{ color: data.projects[selectedProject].color, textDecoration: 'none', margin: data.projects[selectedProject].demo_video ? '' : 0 }}
                            href={data.projects[selectedProject].demo_url ?? '#showcase'}
                            target={data.projects[selectedProject].demo_url ?? '#'}
                        >
                            {data.projects[selectedProject].demo_url ? 'Live Demo' : ''}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects