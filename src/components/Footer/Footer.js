import React from "react";
import "../../index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h4>Movie Library : React.js</h4>
      </div>

      <div className="footer__right">
        <a href="https://github.com/robdcampbell/movieLibrary" target="_blank">
          View project code.
        </a>

        <a href="https://robcampbelldev.com" target="_blank">
          rob campbell
        </a>
      </div>
    </div>
  );
};

export default Footer;
