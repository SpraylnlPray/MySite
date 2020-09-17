import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AboutButton = ( { name, onClick, active, size } ) => {
  const blue = '#0085FC';
  const white = '#E8E8E8';

  const color = active ? blue : white;

  return (
    <Link to='/about' onClick={( e ) => onClick( e, name )} className='menu-item'>
      <BsPerson color={color} size={size} />
    </Link>
  );
}

AboutButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
}

export default AboutButton;