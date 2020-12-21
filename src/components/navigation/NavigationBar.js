import { useState, useEffect, Fragment } from 'react'

const NavigationBar = () => {
    const [selected, setSelected] = useState([
        {
            'label': 'About',
            'active': true,
            'tag': '#about'
        },
        {
            'label': 'Projects',
            'active': false,
            'tag': '#projects'
        },
        {
            'label': 'Techstack',
            'active': false,
            'tag': '#techstack'
        },
        {
            'label': 'Events',
            'active': false,
            'tag': '#events'
        },
        {
            'label': 'Orgs',
            'active': false,
            'tag': '#organizations'
        },
        {
            'label': 'Contact',
            'active': false,
            'tag': '#contact'
        },
    ])
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        changeActive(selectedIndex)
    }, [selected])

    const changeActive = (index) => {
        setSelectedIndex(index)
        let newSelected = selected
        selected.forEach((e, i) => {
            if (i == index) {
                newSelected[index].active = true
            } else {
                newSelected[i].active = false
            }
        })
        setSelected(newSelected)
    }

    return (
        <Fragment />
        // <nav id="nav">
        //     <div className="logo"></div>
        //     <div className="nav_items">
        //         <ul>
        //             {selected.map((e, i) => <li onClick={() => changeActive(i)}>
        //                 <a className={e.active ? "active" : ""} href={e.tag}>{e.label}</a>
        //             </li>)}
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default NavigationBar