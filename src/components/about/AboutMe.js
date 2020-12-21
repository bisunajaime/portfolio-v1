

const AboutMe = () => {
    return (
        <section id="about">
            <div className="content">
                <h1>Hello there,<br />I'm Jaime Bisuña.</h1>
                {/* <h1>Hello there,<br />I'm <b className="purple-text">Jaime Bisuña</b>.</h1> */}
                <small>SOFTWARE DEVELOPER</small>
                {/* <span>Welcome to my portoflio!</span> */}
                <span>
                    I have a passion for developing mobile/web applications and believe that time is something that must not be wasted, but must be used wisely.
                </span>
                <a href={process.env.PUBLIC_URL + "/files/JoseJaimeBisunaResume.pdf"} target="_blank">Download Resume</a>
            </div>
        </section>
    )
}

export default AboutMe