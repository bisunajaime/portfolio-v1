import React from 'react'
import Fade from 'react-reveal/Fade'
import flutter_sj from '../../assets/images/activities/flutter_sj.JPG'
import dsc from '../../assets/images/dsc_small.png'


function Activities() {
    return (
        <section className='activities' id='activities'>
            <Fade cascade bottom>
                <div className='header'>
                    <h1>Activities</h1>
                    <p>Some of the activities I have done, including some workshops I attended.</p>
                </div>
            </Fade>
            <ActivitiesList />
        </section>
    )
}

function ActivitiesList() {
    return (
        <Fade>
            <div className='activities_list'>
                <Activity title="Solution Challenge" description="Participated in Developer Student Club Solution Challenge, where we had to make an app that solves local problems." link="https://github.com/jose-bamboo/solution-challenge" imgUrl={flutter_sj} />
                <Activity title="DSC Benilde RnD" description="Role of Research and Development in Developer Student Club Benilde Organization" link="https://www.facebook.com/dsccsb" imgUrl={dsc} />
                <Activity title="Guest Speaker" description="Guest speaker at Flutter for Starters Webinar hosted by Developer Student Clubs." link="https://www.facebook.com/dsc.philippines/videos/1617848895036898" imgUrl={flutter_sj} />
                <Activity title="Samsung Workshop" description="Attended Samsung Workshop hosted by AIM: Benilde where we made our own apps for Samsung Galaxy Watch" link="" imgUrl={flutter_sj} />
                <Activity title="Flutter Study Jam 1" description="Speaker at DSC Benilde's Flutter Study Jam, where I taught the basics of Flutter." link="https://www.facebook.com/dsccsb/photos/a.158427545551051/195971265130012" imgUrl={flutter_sj} />
                <Activity title="Flutter Study Jam 2" description={`Speaker at DSC Benilde's Flutter Study Jam, where I taught how to create a QR scanner mobile application with Flutter.`} link="https://www.facebook.com/dsccsb/photos/pcb.191954185531720/191953975531741/" imgUrl={flutter_sj} />
            </div>
        </Fade>
    )
}
function Activity(props) {
    let { title, description, imgUrl, link } = props

    return (
        <div className="activity">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} alt="image_here" />
                <div className="description">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </a>

        </div>
    )
}


export default Activities