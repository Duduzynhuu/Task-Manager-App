import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Footer = () => {
  return (
    <footer>
      <h4 className="copyRight">Copyright &copy; 2022</h4>
      <Link className="link" to="/about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
