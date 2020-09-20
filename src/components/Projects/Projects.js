import React from 'react';
import './Projects.scss';
import projects from '../../static/Projects';

const Projects = () => {

  const handleMoreClick = ( e, project ) => {
    e.stopPropagation();
    document.getElementById( `${ project.key }-description` ).classList.toggle( 'show' );

    if ( document.getElementById( `${ project.key }-description` ).classList.contains( 'show' ) ) {
      document.getElementById( `${ project.key }-more-button` ).textContent = 'Less';
    }
    else {
      document.getElementById( `${ project.key }-more-button` ).textContent = 'More';
    }
  }

  const projectElements = projects.map( project => {
    return (
      <div key={project.key} className='project-container'>
        <div className='project-top-container'>
          <div className='project-title'>{project.title}</div>
          <div id={`${ project.key }-more-button`} className='project-more-button' onClick={( e ) => { handleMoreClick( e, project ); }}>More</div>
        </div>
        <div className='project-sub'>{project.sub}</div>
        <div id={`${ project.key }-description`} className='project-description'>{project.description}</div>
        <a href={project.source.default ? project.source.default : project.source} download={project.source_type}>{project.source_text}</a>
      </div>
    );
  } );

  return (
    <div id='projects-container'>
      <div id='projects-header'>My Work</div>
      <div id='projects-caption'>Things I created during the years. Documents as well as Code. For more visit my <a href='https://github.com/SpraylnlPray'>GitHub</a> profile.</div>
      <div id='projects-list'>
        {projectElements}
      </div>
    </div>
  );
}

export default Projects;