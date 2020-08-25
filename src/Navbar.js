import React, { useEffect } from 'react'

const Navbar = () => {


    useEffect(() => {
        let button = document.getElementById('btn')
        button.addEventListener('click', () => {
            let root = document.documentElement
            root.style.setProperty('--theme-color', '#151515')
        })
        return () => {

        }
    }, [])

    return (
        <nav className="container m__auto">
            <h1>Nav</h1>
            <button id="btn">MOde</button>
        </nav>
    )
}

export default Navbar