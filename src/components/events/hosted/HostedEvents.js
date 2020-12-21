import data from '../../../content.json'

const HostedEvents = () => {
    return (
        <section id="events" className="eventslist">
            <div className="label">
                <small>Here are some of the</small>
                <h1>Events I Hosted</h1>
            </div>
            <div className="events">
                {data.events.hosted.map(e => {
                    return (
                        <div className="event">
                            <div className="image">
                                <img src={e.cover_img} alt={e.name} />
                            </div>
                            <div className="details">
                                <h3>{e.name}</h3>
                                <p>{e.description}</p>
                            </div>
                        </div>)
                })}
            </div>
        </section>
    )
}

export default HostedEvents