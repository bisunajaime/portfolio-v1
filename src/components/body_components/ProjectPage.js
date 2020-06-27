import React, { Component } from 'react'
import Flickity from 'react-flickity-component'
import {
    useParams,
    useHistory
} from "react-router-dom";
import '../../assets/css/flickity.css';
import '../../assets/css/fullscreen.css';
import 'flickity-fullscreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectPage(props) {
    let { id } = useParams()
    let { title, description, urls, images } = props.data[id]
    let history = useHistory()
    const sliderOptions = {
        pageDots: true,
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        fullscreen: true,
        pageDots: true,
        prevNextButtons: true,
        setGallerySize: false,
        imagesLoaded: true,
        lazyLoad: true
    }
    const baseURL = `../../assets/images/${id}/`
    return (
        <section className="showcase">
            <Flickity
                className={"showcase_left_grid " + id}
                elementType="div"
                options={sliderOptions}
                reloadOnUpdate={true}
                static
            >
                {images.map((elem, i) => <img key={i} src={require(`../../assets/images/${id}/${elem}`)} data-flickity-lazyload={require(`../../assets/images/${id}/${elem}`)}  ></img>)}
            </Flickity>
            <div className="showcase_right_grid">
                <div className="showcase_title">
                    <a onClick={history.goBack} className={id} >
                        <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                    </a>
                    <h1>{title}</h1>
                </div>
                <div className="showcase_details">
                    {description}
                    <div className="links">
                        <a href={urls['github']} className="circle">
                            <FontAwesomeIcon icon={faGithub} size="1x" color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectPage