import data from '../../../content.json'

const AttendedEvents = () => {
    return (
        <section id="" className="eventslist">
            <div className="label">
                <small>These are some</small>
                <h1>Events I Attended</h1>
            </div>
            <div className="events">
                {data.events.attended.map(e => {
                    return (
                        <div className="event">
                            <div className="image">
                                <img className="hide-shadow" src={e.cover_img} alt={e.name} />
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

export default AttendedEvents