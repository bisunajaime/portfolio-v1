import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import '../assets/css/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.clickFunc = this.clickFunc.bind(this)
    }

    clickFunc() {

        const menu_mobile = document.getElementById('menu_items_mobile')
        menu_mobile.classList.toggle('open')
        menu_mobile.classList.toggle('closed')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <nav className="header">
                <img src={logo} alt="" />
                <h1>Jaime Bisuna</h1>
                <i onClick={this.clickFunc} id="menu_bars" ><FontAwesomeIcon icon={this.state.isOpen ? faTimes : faBars} color="white" /></i>
                <div className="menu_items">
                    <a href="#home" className="active">Home</a>
                    <a href="#hobbies">Hobbies</a>
                    <a href="#projects">Projects</a>
                    <a href="#resume">Resume</a>
                    <a href="#activities">Activities</a>
                </div>
            </nav>
        )
    }

}

// function Header() {
//     var times = false
//     const clickFunc = () => {
//         const menu_mobile = document.getElementById('menu_items_mobile')
//         menu_mobile.classList.toggle('open')
//         menu_mobile.classList.toggle('closed')
//         times = !times
//     }

//     const checkMenuState = (isOpen) => {
//         return isOpen ? faBars : faTimes
//     }

//     return (
//         <nav className="header">
//             <img src={logo} alt="" />
//             <h1>Jaime Bisuna</h1>
//             <i onClick={clickFunc} id="menu_bars" ><FontAwesomeIcon icon={checkMenuState(times)} color="white" /></i>
//             <div className="menu_items">
//                 <a href="#home" className="active">Home</a>
//                 <a href="#hobbies">Hobbies</a>
//                 <a href="#projects">Projects</a>
//                 <a href="#resume">Resume</a>
//                 <a href="#activities">Activities</a>
//             </div>
//         </nav>
//     )
// }

export default Header