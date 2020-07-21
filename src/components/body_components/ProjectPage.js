import React, { useState, useEffect } from 'react'
import Flickity from 'react-flickity-component'
import ReactPlayer from 'react-player'
import {
    useParams,
    Link
} from "react-router-dom";
import '../../assets/css/flickity.css';
import '../../assets/css/fullscreen.css';
import 'flickity-fullscreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import projects from '../utils/projects'
import placeholder from '../../assets/images/placeholder.png'


function ProjectPage() {
    const [showDemo, setShowDemo] = useState(false)
    let { id } = useParams()
    let { title, description, urls, images } = projects[id]
    const sliderOptions = {
        pageDots: true,
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

    })

    const handleClick = () => {
        setShowDemo(!showDemo);
    }

    const renderButton = (id) => {
        if (!showDemo) {
            return <button id='demo_btn' onClick={handleClick} className={`${id}`}>Play Demo</button>
        } else {
            return <button id='demo_btn' onClick={handleClick} className={`${id}`}>Close Demo</button>
        }
    }

    const renderVideo = () => {
        if (!showDemo) {
            return <Flickity
                className={"showcase_left_grid " + id}
                elementType="div"
                options={sliderOptions}
                reloadOnUpdate={true}
                static
            >
                {images.map((elem, i) => <img key={i} data-flickity-lazyload={require(`../../assets/images/${id}/${elem}`)} className="carousel-cell-image" src={placeholder} alt="Image_Here" ></img>)}
            </Flickity>
        } else {
            return <div className={`showcase_left_grid ${id} demo`}>
                <ReactPlayer muted={true} url={require(`../../assets/demo/${id}_demo.mp4`)} width='100%' height='100%' controls={true} />
            </div>
        }
    }


    return (
        <section className="showcase">
            {renderVideo()}
            <div className="showcase_right_grid">
                <div className="showcase_title">
                    <Link to='/' id={id} className={id}>
                        <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                    </Link>
                    <h1>{title}</h1>
                </div>
                <div className="showcase_details">
                    {description}
                    {renderButton(id)}
                    <div className="links">
                        <a href={urls['github']} className="circle" target='_blank' rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faGithub} size="1x" color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectPage