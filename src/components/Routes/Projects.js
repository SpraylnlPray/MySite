import React from 'react';
import '../../css/mobile/Projects.css';
import projects from '../../static/Projects';

const Projects = () => {

  const handleMoreClick = ( e, project ) => {
    e.stopPropagation();
    document.getElementById( `mobile-${ project.key }-description` ).classList.toggle( 'show' );

    if ( document.getElementById( `mobile-${ project.key }-description` ).classList.contains( 'show' ) ) {
      document.getElementById( `mobile-${ project.key }-more-button` ).textContent = 'Less';
    }
    else {
      document.getElementById( `mobile-${ project.key }-more-button` ).textContent = 'More';
    }
  }

  const projectElements = projects.map( project => {
    return (
      <div key={project.key} className='mobile-project-container'>
        <div className='mobile-project-top-container'>
          <div className='mobile-project-title'>{project.title}</div>
          <div id={`mobile-${ project.key }-more-button`} className='mobile-project-more-button' onClick={( e ) => { handleMoreClick( e, project ); }}>More</div>
        </div>
        <div className='mobile-project-sub'>{project.sub}</div>
        <div id={`mobile-${ project.key }-description`} className='mobile-project-description'>{project.description}</div>
        <a href={project.source} download={project.source_type}>{project.source_text}</a>
      </div>
    );
  } );

  return (
    <div id='mobile-projects-container'>
      <div id='mobile-projects-header'>My Work</div>
      <div id='mobile-projects-caption'>A list of things I created during the years. Documents as well as Code. For more visit my <a href='https://github.com/SpraylnlPray'>GitHub</a>.</div>
      <div id='mobile-projects-list'>
        {projectElements}
      </div>
    </div>
  );
}

export default Projects;