import React from 'react';
import '../../css/mobile/Experience.css';
import jobs from '../../static/Jobs';

const Experience = () => {

  const handleMoreClick = ( e, job ) => {
    e.stopPropagation();
    document.getElementById( `mobile-${ job.key }-description` ).classList.toggle( 'show' );

    if ( document.getElementById( `mobile-${ job.key }-description` ).classList.contains( 'show' ) ) {
      document.getElementById( `mobile-${ job.key }-more-button` ).textContent = 'Less';
    }
    else {
      document.getElementById( `mobile-${ job.key }-more-button` ).textContent = 'More';
    }
  }

  const jobElements = jobs.map( job => {
    return (
      <div key={job.key} id={`mobile-${ job.key }`} className='mobile-job-container'>
        <div className='mobile-job-image-container' >
          <img src={job.imagePath} className='mobile-job-image' alt={`Logo of ${ job.companyName }`} />
          <div id={`mobile-${ job.key }-more-button`} className='mobile-more-button' onClick={( e ) => { handleMoreClick( e, job ); }}>
            More
          </div>
        </div>
        <div className='mobile-job-content'>
          <div className='mobile-job-duration'>
            {job.start} - {job.end}
          </div>
          <div className='mobile-job-header'>
            {job.companyName}, {job.location}, {job.workload} {job.position}
          </div>
          <div id={`mobile-${ job.key }-description`} className='mobile-job-description'>
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