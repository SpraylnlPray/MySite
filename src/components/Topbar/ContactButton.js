import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactButton = ( { name, onClick, active } ) => {
  const blue = '#0085FC';
  const white = '#E8E8E8';

  const color = active ? blue : white;

  return (
    <Link to='/contact' onClick={( e ) => onClick( e, name )} className='hidden-menu-item'>
      <RiMailSendLine color={color} size={30} />
    </Link>
  );
}

ContactButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default ContactButton;