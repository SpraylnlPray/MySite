import React from 'react';
import '../../css/mobile/Experience.css';
import jobs from '../../static/Jobs';

const Experience = () => {

  const jobElements = jobs.map( ( job, i ) => {
    let containerClasses = 'mobile-job-container';
    if ( ( i + 1 ) % 2 === 0 ) containerClasses += ' flex-dir-rev';
    return (
      <div key={job.key} className={containerClasses}>
        <img src={job.imagePath} className='mobile-job-image' alt='image of the company' />
        <div className='mobile-job-content'>
          <div className='mobile-job-duration'>
            {job.start} - {job.end}
          </div>
          <div className='mobile-job-header'>
            {job.companyName}, {job.location}, {job.workload} {job.position}
          </div>
          <div className='mobile-job-description'>
            {job.description}
          </div>
        </div>
      </div>
    );
  } );

  return (
    <div id='mobile-experience-container'>
      {jobElements}
    </div>
  );
}

export default Experience;