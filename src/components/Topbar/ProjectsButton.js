import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectsButton = ( { name, onClick, active } ) => {
  const blue = '#0085FC';
  const white = '#E8E8E8';

  const color = active ? blue : white;

  return (
    <Link onClick={( e ) => onClick( e, name )} to='/projects' className='hidden-menu-item'>
      <AiOutlineEye color={color} size={30} />
    </Link>
  );
}

ProjectsButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default ProjectsButton;