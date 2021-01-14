import React from "react";
import "../../index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h4>Movie Library : React.js</h4>
        <p>
          Other projects:{" "}
          <a href="https://google.com" target="_blank">
            (link)
          </a>
        </p>
      </div>

      <div className="footer_right">
        <p>
          View project code:{" "}
          <a href="https://google.com" target="_blank">
            {" "}
            Source Code{" "}
          </a>
        </p>

        <a href="https://google.com" target="_blank">
          rob campbell
        </a>
      </div>
    </div>
  );
};

export default Footer;
