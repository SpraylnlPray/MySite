import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExperienceButton = ( { name, onClick, active } ) => {
  const blue = '#0085FC';
  const white = '#E8E8E8';

  const color = active ? blue : white;

  return (
    <Link to='/experience' onClick={( e ) => onClick( e, name )} className='hidden-menu-item'>
      <HiOutlineLightBulb color={color} size={30} />
    </Link>
  );
}

ExperienceButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default ExperienceButton;