import React from 'react';
import '../../css/mobile/Experience.css';
import jobs from '../../static/Jobs';

const Experience = () => {

  const jobElements = jobs.map( job => {
    return (
      <div key={job.key} className='mobile-job-container'>
        <div className='mobile-job-image-container'>
          <img src={job.imagePath} className='mobile-job-image' alt={`Logo of ${ job.companyName }`} />
        </div>
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
      <div id='mobile-experience-header'>Experience</div>
      <div id='mobile-job-list'>
        {jobElements}
      </div>
    </div>
  );
}

export default Experience;