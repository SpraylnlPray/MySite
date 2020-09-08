import React, { useState } from 'react';
import Hamburger from './Hamburger';
import HomeButton from './HomeButton';
import AboutButton from './AboutButton';
import ProjectsButton from './ProjectsButton';
import ContactButton from './ContactButton';
import '../css/mobile/Topbar.css';

const Topbar = () => {
  const [ menuExpanded, setMenuExpanded ] = useState( false );

  const handleMenuToggle = ( e ) => {
    e.stopPropagation();
    console.log( 'asdf' );
    setMenuExpanded( !menuExpanded );
  }

  return (
    <nav id='mobile-top-bar'>
      <HomeButton />
      {menuExpanded &&
        <AboutButton />}
      {menuExpanded &&
        <ProjectsButton />}
      {menuExpanded &&
        <ContactButton />}      
      <Hamburger menuExpanded={menuExpanded} handleClick={handleMenuToggle} />
    </nav>
  );
}

export default Topbar;