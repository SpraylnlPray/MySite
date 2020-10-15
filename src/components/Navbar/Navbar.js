import React, { useState } from "react";
import Hamburger from "./Hamburger";
import "./Navbar.scss";
import propTypes from "prop-types";
import MenuButton from "../MenuButton";

const Navbar = ({ activeItem, handleClick }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    document.getElementById("navbar").classList.toggle("change");
    setMenuExpanded(!menuExpanded);
  };

  return (
    <nav id="navbar">
      <MenuButton
        name="home"
        onClick={handleClick}
        active={activeItem === "home"}
        to="/"
        id="HomeButton"
      />
      <MenuButton
        name="about"
        onClick={handleClick}
        active={activeItem === "about"}
        to="/about"
        id="AboutButton"
        classNameLink="menu-item"
      />
      <MenuButton
        name="projects"
        onClick={handleClick}
        active={activeItem === "projects"}
        to="/projects"
        id="ProjectsButton"
        classNameLink="menu-item"
      />
      <MenuButton
        name="experience"
        onClick={handleClick}
        active={activeItem === "experience"}
        to="/experience"
        id="ExperienceButton"
        classNameLink="menu-item"
      />
      <MenuButton
        name="contact"
        onClick={handleClick}
        active={activeItem === "contact"}
        to="/contact"
        id="ContactButton"
        classNameLink="menu-item"
      />
      <Hamburger menuExpanded={menuExpanded} handleClick={handleMenuToggle} />
    </nav>
  );
};

Navbar.propTypes = {
  activeItem: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Navbar;
