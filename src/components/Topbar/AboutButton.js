import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AboutButton = ( { name, onClick, active } ) => {
  const blue = '#0085FC';
  const white = '#E8E8E8';

  const color = active ? blue : white;

  return (
    <Link to='/about' onClick={( e ) => onClick( e, name )} className='hidden-menu-item'>
      <BsPerson color={color} size={30} />
    </Link>
  );
}

AboutButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default AboutButton;