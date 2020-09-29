import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import experienceBlueIcon from '../../../icons/bag_blue.png';
import experienceWhiteIcon from '../../../icons/bag_white.png';

const ExperienceButton = ( { name, onClick, active } ) => {
  const src = () => {
    if (active) {
      return experienceBlueIcon;
    }
    else {
      return experienceWhiteIcon;
    }
  }

  return (
    <Link to='/experience' onClick={( e ) => onClick( e, name )} className='menu-item'>
      <img src={src()} />
    </Link>
  );
}

ExperienceButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default ExperienceButton;