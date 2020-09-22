import React from 'react';
import './Projects.scss';
import projects from '../../static/Projects';
import Card from '../Card/Card';
import '../../scss/CardList.scss';

const Projects = () => {
  const projectCards = projects.map( project => {
    return (
      <Card key={project.key} details={project}></Card>
    )
  } );

  return (
    <div className='route-container'>
      <div className='route-top-container'>
        <div className='route-header'>My Work</div>
        <div className='route-caption'>Things I created over the time. Documents as well as Code. For more visit my <a rel='noreferrer' target='_blank' href='https://github.com/SpraylnlPray'>GitHub</a> profile.</div>
      </div>
      <div className='card-list'>
        {projectCards}
      </div>
    </div>
  );
}

export default Projects;