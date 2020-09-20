import React from 'react';
import './Experience.scss';
import jobs from '../../static/Jobs';

const Experience = () => {

  const handleMoreClick = ( e, job ) => {
    e.stopPropagation();
    document.getElementById( `${ job.key }-description` ).classList.toggle( 'show' );

    if ( document.getElementById( `${ job.key }-description` ).classList.contains( 'show' ) ) {
      document.getElementById( `${ job.key }-more-button` ).textContent = 'Less';
    }
    else {
      document.getElementById( `${ job.key }-more-button` ).textContent = 'More';
    }
  }

  const jobElements = jobs.map( job => {
    return (
      <div key={job.key} id={`${ job.key }`} className='job-container'>
        <div className='job-image-container' >
          <img src={job.image.default} className='job-image' alt={`Logo of ${ job.companyName }`} />
          <div id={`${ job.key }-more-button`} className='more-button' onClick={( e ) => { handleMoreClick( e, job ); }}>
            More
          </div>
        </div>
        <div className='job-content'>
          <div className='job-duration'>
            {job.start} - {job.end}
          </div>
          <div className='job-header'>
            {job.companyName}, {job.location}, {job.workload} {job.position}
          </div>
          <div id={`${ job.key }-description`} className='job-description'>
            {job.description}
          </div>
        </div>
      </div>
    );
  } );

  return (
    <div id='experience-container'>
      <div id='experience-header'>Experience</div>
      <div id='job-list'>
        {jobElements}
      </div>
    </div>
  );
}

export default Experience;