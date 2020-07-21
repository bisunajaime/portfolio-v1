import React, { useState } from 'react';
import Body from './components/Body'
import Footer from './components/Footer'
import ProjectPage from './components/body_components/ProjectPage'
import './assets/css/style.scss';
import './assets/css/flickity.css';
import './assets/css/fullscreen.css';
import 'flickity-fullscreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from './components/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <ProjectPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <React.Fragment>
      <NavToggler />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

function NavToggler() {

  const [isclosed, setisclosed] = useState(true)

  function toggleNav() {
    console.log('tapped')
    let nav = document.getElementById('navigation')
    let main = document.getElementById('main')
    nav.classList.toggle("closed")
    main.classList.toggle("closed")
    setisclosed(!isclosed)
  }

  return (
    <nav><FontAwesomeIcon icon={faBars} onClick={toggleNav} className="burger" />
      <Navigation /></nav>
  )
}

export default App;
