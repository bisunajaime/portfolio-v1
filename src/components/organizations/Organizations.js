import data from '../../content.json'

const Organisations = () => {
    return (
        <section id="organizations">
            <div className="label">
                <small>Involved in these</small>
                <h1>Organizations</h1>
            </div>
            <div className="orgs">
                {data.organizations.map(e => {
                    return (<div className="org">
                        <img src={process.env.PUBLIC_URL + e.cover_img} alt={e.name} />
                        <div className="details">
                            <h3>{e.name}</h3>
                            <p> {e.acronym}- {e.department}</p>
                            <p>{e.year}</p>
                        </div>
                    </div>)
                })}
            </div>
        </section>)
}

export default Organisations