import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import aboutBlueIcon from '../../../icons/person_blue.png';
import aboutWhiteIcon from '../../../icons/person_white.png';

const AboutButton = ( { name, onClick, active } ) => {
  const src = () => {
    if (active) {
      return aboutBlueIcon;
    }
    else {
      return aboutWhiteIcon;
    }
  }

  return (
    <Link to='/about' onClick={( e ) => onClick( e, name )} className='menu-item'>
      <img src={src()} />
    </Link>
  );
}

AboutButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default AboutButton;