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

  const handleMenuToggle = ( e ) => {
    e.stopPropagation();
    document.getElementById( 'mobile-top-bar' ).classList.toggle( 'change' );
    setMenuExpanded( !menuExpanded );
  }

  return (
    <nav id='mobile-top-bar'>
      <HomeButton />
      <AboutButton />
      <ProjectsButton />
      <ExperienceButton />
      <ContactButton />
      <Hamburger menuExpanded={menuExpanded} handleClick={handleMenuToggle} />
    </nav>
  );
}

export default Topbar;