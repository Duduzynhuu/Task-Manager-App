import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Index";
import { useLocation } from "react-router-dom";
import "./Style.css";

const Header = ({ title, onShow, text, color }) => {
  const location = useLocation();
  return (
    <div className="task-header">
      <h2>{title}</h2>
      {location.pathname === "/" && (
        <Button onClick={onShow} text={text} color={color} />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
