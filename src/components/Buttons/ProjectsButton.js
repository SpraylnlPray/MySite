import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import projectsBlueIcon from '../../../icons/folders_blue.png';
import projectsWhiteIcon from '../../../icons/folders_white.png';

const ProjectsButton = ( { name, onClick, active } ) => {
  const src = () => {
    if (active) {
      return projectsBlueIcon;
    }
    else {
      return projectsWhiteIcon;
    }
  }

  return (
    <Link to='/projects' onClick={( e ) => onClick( e, name )} className='menu-item'>
      <img src={src()} />
    </Link>
  );
}

ProjectsButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default ProjectsButton;