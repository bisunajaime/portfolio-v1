import { Fragment } from "react";
import AboutMe from "./components/about/AboutMe";
import Contact from "./components/contact/Contact";
import AttendedEvents from "./components/events/attended/AttendedEvents";
import HostedEvents from "./components/events/hosted/HostedEvents";
import NavigationBar from "./components/navigation/NavigationBar";
import Organizations from "./components/organizations/Organizations";
import Projects from "./components/projects/Projects";
import TechStack from "./components/techstack/TechStack";


function App() {
  return (
    <Fragment>
      <NavigationBar />
      <AboutMe />
      <Projects />
      <TechStack />
      <HostedEvents />
      <AttendedEvents />
      <Organizations />
      <Contact />
    </Fragment>
  );
}

export default App;
