import React, { useState } from 'react';
import '../../css/pc/Sidebar.css'
import HomeButton from '../Buttons/HomeButton';
import AboutButton from '../Buttons/AboutButton';
import ProjectsButton from '../Buttons/ProjectsButton';
import ExperienceButton from '../Buttons/ExperienceButton';
import ContactButton from '../Buttons/ContactButton';

const Sidebar = () => {
  const pathName = window.location.pathname;
  const path = pathName === '/' ? 'home' : pathName.substr( 1 );
  const [ activeItem, setActiveItem ] = useState( path );

  const handleClick = ( e, name ) => {
    setActiveItem( name )
  };

  return (
    <nav id='pc-side-bar'>
      <HomeButton name='home' onClick={handleClick} active={activeItem === 'home'} size={50} />
      <AboutButton name='about' onClick={handleClick} active={activeItem === 'about'} size={50} />
      <ProjectsButton name='projects' onClick={handleClick} active={activeItem === 'projects'} size={50} />
      <ExperienceButton name='experience' onClick={handleClick} active={activeItem === 'experience'} size={50} />
      <ContactButton name='contact' onClick={handleClick} active={activeItem === 'contact'} size={50} />
    </nav>
  )
}

export default Sidebar;