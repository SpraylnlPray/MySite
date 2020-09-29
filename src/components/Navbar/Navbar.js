import React, { useState } from "react";
import Hamburger from "./Hamburger";
import HomeButton from "../Buttons/HomeButton";
import AboutButton from "../Buttons/AboutButton";
import ProjectsButton from "../Buttons/ProjectsButton";
import ExperienceButton from "../Buttons/ExperienceButton";
import ContactButton from "../Buttons/ContactButton";
import "./Navbar.scss";
import propTypes from 'prop-types';

const Navbar = ({activeItem, handleClick}) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    document.getElementById("navbar").classList.toggle("change");
    setMenuExpanded(!menuExpanded);
  };

  return (
    <nav id="navbar">
      <HomeButton
        name="home"
        onClick={handleClick}
        active={activeItem === "home"}
      />
      <AboutButton
        name="about"
        onClick={handleClick}
        active={activeItem === "about"}
      />
      <ProjectsButton
        name="projects"
        onClick={handleClick}
        active={activeItem === "projects"}
      />
      <ExperienceButton
        name="experience"
        onClick={handleClick}
        active={activeItem === "experience"}
      />
      <ContactButton
        name="contact"
        onClick={handleClick}
        active={activeItem === "contact"}
      />
      <Hamburger menuExpanded={menuExpanded} handleClick={handleMenuToggle} />
    </nav>
  );
};

Navbar.propTypes = {
  activeItem: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
}

export default Navbar;
