import React from 'react';
import './Experience.scss';
import jobs from '../../static/Jobs';
import Card from '../Card/Card';
import '../../scss/CardList.scss';

const Experience = () => {
  const jobCards = jobs.map( job => {
    return (
      <Card key={job.key} details={job}></Card>
    );
  } );

  return (
    <div className='route-container'>
      <div className='route-top-container'>
        <div className='route-header'>Experience</div>
        <div className='route-caption'>Companies I have worked at, with a short description of what I worked on.</div>
      </div>
      <div className='card-list'>
        {jobCards}
      </div>
    </div>
  );
}

export default Experience;