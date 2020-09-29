import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import emailBlueIcon from '../../../icons/email_blue.png';
import emailWhiteIcon from '../../../icons/email_white.png';

const ContactButton = ( { name, onClick, active } ) => {
  const src = () => {
    if (active) {
      return emailBlueIcon;
    }
    else {
      return emailWhiteIcon;
    }
  }

  return (
    <Link to='/contact' onClick={( e ) => onClick( e, name )} className='menu-item'>
      <img src={src()}/>
    </Link>
  );
}

ContactButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default ContactButton;