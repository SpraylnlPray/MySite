import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeButton = ( { name, onClick, active } ) => {
  const blue = '#0085FC';
  const white = '#E8E8E8';

  const color = active ? blue : white;

  return (
    <Link to='/' onClick={( e ) => onClick( e, name )}>
      <AiOutlineHome color={color} size={30} />
    </Link>
  );
}

HomeButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default HomeButton;