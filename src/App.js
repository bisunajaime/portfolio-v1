import React from 'react';
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer'
import ProjectPage from './components/body_components/ProjectPage'
import projects from './components/utils/projects'
import './assets/css/style.scss';
import './assets/css/flickity.css';
import './assets/css/fullscreen.css';
import 'flickity-fullscreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:id">
          <ProjectPage data={projects} />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <React.Fragment>
      <Menu />
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}


function Menu() {
  return (
    <div class="menu_items_mobile closed" id="menu_items_mobile">
      <a href="#home" class="active">Home</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
      <a href="#activities">Activities</a>
    </div>
  )
}

export default App;
