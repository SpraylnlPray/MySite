import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuButton = ({ name, onClick, active, id, to, classNameLink }) => {
  let className = 'NavButton ';
  if (classNameLink) {
    className += classNameLink;
  }
  active ? (className += ' active') : (className += ' inactive');
  return (
    <Link to={to} onClick={() => onClick(name)} className={className} id={id}>
      <div height={30} width={30} alt={`${id}-icon`} />
      <span>{name}</span>
    </Link>
  );
};

MenuButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  classNameLink: PropTypes.string,
};

export default MenuButton;
