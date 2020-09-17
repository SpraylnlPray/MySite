import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExperienceButton = ( { name, onClick, active, size } ) => {
  const blue = '#0085FC';
  const white = '#E8E8E8';

  const color = active ? blue : white;

  return (
    <Link to='/experience' onClick={( e ) => onClick( e, name )} className='menu-item'>
      <HiOutlineLightBulb color={color} size={size} />
    </Link>
  );
}

ExperienceButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
}

export default ExperienceButton;