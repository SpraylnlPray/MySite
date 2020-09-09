import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ContactButton = () => {
  return (
    <Link to='/contact' className='hidden-menu-item'>
      <RiMailSendLine color={'#E8E8E8'} size={30} />
    </Link>
  );
}

export default ContactButton;