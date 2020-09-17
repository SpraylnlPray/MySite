import React, { useState } from 'react';
import Hamburger from './Hamburger';
import HomeButton from './HomeButton';
import AboutButton from './AboutButton';
import ProjectsButton from './ProjectsButton';
import ExperienceButton from './ExperienceButton';
import ContactButton from './ContactButton';
import '../../css/mobile/Topbar.css';

const Topbar = () => {
  const [ menuExpanded, setMenuExpanded ] = useState( false );
  const pathName = window.location.pathname;
  const path = pathName === '/' ? 'home' : pathName.substr( 1 );
  const [ activeItem, setActiveItem ] = useState( path );

  const handleMenuToggle = ( e ) => {
    e.stopPropagation();
    document.getElementById( 'mobile-top-bar' ).classList.toggle( 'change' );
    setMenuExpanded( !menuExpanded );
  }

  const handleClick = ( e, name ) => {
    setActiveItem( name )
  };

  return (
    <nav id='mobile-top-bar'>
      <HomeButton name='home' onClick={handleClick} active={activeItem === 'home'} />
      <AboutButton name='about' onClick={handleClick} active={activeItem === 'about'} />
      <ProjectsButton name='projects' onClick={handleClick} active={activeItem === 'projects'} />
      <ExperienceButton name='experience' onClick={handleClick} active={activeItem === 'experience'} />
      <ContactButton name='contact' onClick={handleClick} active={activeItem === 'contact'} />
      <Hamburger menuExpanded={menuExpanded} handleClick={handleMenuToggle} />
    </nav>
  );
}

export default Topbar;