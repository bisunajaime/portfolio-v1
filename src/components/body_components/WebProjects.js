import React from 'react'

function WebProjects() {
    return (<section className="webprojects">
        <div className='header'>
            <h1><span role="img" aria-label="projects">🚧</span> Web Projects</h1>
            <WebProjectsList />
        </div>
    </section>)
}

function WebProjectsList() {
    return (
        <div className="webprojects_list">
            <WebProjectItem name="Weather App" src={require('../../assets/images/webapps/weatherapp/weatherapp.png')} id="weatherapp" />
        </div>
    )
}

function WebProjectItem(props) {
    let { name, src, id } = props
    let url = "https://bisunajaime-weatherapp.netlify.app/"
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="webproject_item">
                <div className={`webproject_image ${id}`}>
                    <img src={src} alt="Web Project" />
                </div>
                <div className="webproject_label">{name}</div>
            </div>
        </a>
    )
}

export default WebProjects