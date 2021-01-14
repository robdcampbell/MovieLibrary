import React from "react";
import "./Error.css";
import "../../index.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error__page">
      <div className="error_container">
        <h1>Oops, looks like we're a little lost.</h1>
        <h3>
          Let's head back
          <Link className="home__link" to="/">
            ( ...home... )
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
