import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuButton = ({ name, onClick, active, id, to, classNameLink }) => {
  return(
    <Link to={to} onClick={(e) => onClick(e, name)} className={classNameLink}>
      <img id={id} className={active ? "active" : ""} />
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
}

export default MenuButton;