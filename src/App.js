import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import "./scss/App.scss";

const App = () => {
  const [activeItem, setActiveItem] = useState(getCurrentPath());

  function getCurrentPath() {
    const pathName = window.location.hash.substr(1);
    const path = pathName === "/" ? "home" : pathName.substr(1);
    return path;
  }
  const handleClick = (e, name) => {
    setActiveItem(name);
  };

  return (
    <div id="container">
      <Navbar handleClick={handleClick} activeItem={activeItem} />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} handleClick={handleClick} toName='contact' />} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
