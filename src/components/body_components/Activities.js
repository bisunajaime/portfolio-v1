import React from 'react'

function Activities() {
    return (
        <section className='activities'>
            <div className='activities_header'>
                <h1>Activities</h1>
                <p>Some of the activities I have done, including some workshops I attended.</p>
            </div>
            <ActivitiesList />
        </section>
    )
}

function ActivitiesList() {
    return (
        <div className='activities_list'>
            <Activity title="Solution Challenge" description="Participated in Developer Student Club Solution Challenge, where we had to make an app that solves local problems." />
            <Activity title="DSC Benilde RnD" description="Role of Research and Development in Developer Student Club Benilde Organization" />
            <Activity title="Guest Speaker" description="Guest speaker at Flutter for Starters Webinar hosted by Developer Student Clubs." />
            <Activity title="Samsung Workshop" description="Attended Samsung Workshop hosted by AIM: Benilde where we made our own apps for Samsung Galaxy Watch" />
            <Activity title="Flutter Study Jam 1" description="Speaker at DSC Benilde's Flutter Study Jam, where I taught the basics of Flutter." />
            <Activity title="Flutter Study Jam 2" description={`Speaker at DSC Benilde's Flutter Study Jam, where I taught how to create a QR scanner mobile application with Flutter.`} />
        </div>
    )
}

function Activity(props) {
    let { title, description } = props

    return (
        <div className="activity">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}


export default Activities