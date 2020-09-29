import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeBlueIcon from '../../../icons/house_blue.png';
import HomeWhiteIcon from '../../../icons/house_white.png';

const HomeButton = ( { name, onClick, active } ) => {

  const src = () => {
    if (active) {
      return HomeBlueIcon;
    }
    else {
      return HomeWhiteIcon;
    }
  }

  return (
    <Link to='/' onClick={( e ) => onClick( e, name )}>
      <img src={src()} />
    </Link>
  );
}

HomeButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default HomeButton;