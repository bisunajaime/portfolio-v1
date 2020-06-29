import React from 'react'


function Organizations() {
    return (
        <section id='organizations' className='organizations'>
            <div className='header'>
                <h1>Organizations</h1>
                <p>Organizations I have joined</p>
            </div>
            <OrganizationsList />
        </section>
    )
}


function OrganizationsList() {
    return (

        <div className='organizations_list'>
            <Organization img={require('../../assets/images/dsc.png')} />
        </div>
    )
}

function Organization(props) {
    let { img } = props
    return (
        <div className='organization'>
            <img src={img} alt={img} />
        </div>
    )
}

export default Organizations