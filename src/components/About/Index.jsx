import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const About = () => {
  return (
    <div className="about">
      Version 1.0.0
      <Link className="link" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default About;
