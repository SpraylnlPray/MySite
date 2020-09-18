import React, { useState } from 'react';
import Hamburger from './Hamburger';
import HomeButton from '../Buttons/HomeButton';
import AboutButton from '../Buttons/AboutButton';
import ProjectsButton from '../Buttons/ProjectsButton';
import ExperienceButton from '../Buttons/ExperienceButton';
import ContactButton from '../Buttons/ContactButton';
import './Navbar.css';

const Navbar = () => {
  const [ menuExpanded, setMenuExpanded ] = useState( false );
  const pathName = window.location.pathname;
  const path = pathName === '/' ? 'home' : pathName.substr( 1 );
  const [ activeItem, setActiveItem ] = useState( path );

  const handleMenuToggle = ( e ) => {
    e.stopPropagation();
    document.getElementById( 'navbar' ).classList.toggle( 'change' );
    setMenuExpanded( !menuExpanded );
  }

  const handleClick = ( e, name ) => {
    setActiveItem( name )
  };

  return (
    <nav id='navbar'>
      <HomeButton name='home' onClick={handleClick} active={activeItem === 'home'} size={30} />
      <AboutButton name='about' onClick={handleClick} active={activeItem === 'about'} size={30} />
      <ProjectsButton name='projects' onClick={handleClick} active={activeItem === 'projects'} size={30} />
      <ExperienceButton name='experience' onClick={handleClick} active={activeItem === 'experience'} size={30} />
      <ContactButton name='contact' onClick={handleClick} active={activeItem === 'contact'} size={30} />
      <Hamburger menuExpanded={menuExpanded} handleClick={handleMenuToggle} />
    </nav>
  );
}

export default Navbar;