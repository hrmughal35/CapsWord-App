// This Page is created  by myself to create the props (Short form of property)
import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


export default function Navbar(props) {
  //"Navbar is the name of function which is created in App.js"

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* In code below the word "title" is the name of property. */}
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="/about">
                About
              </a>
            </li> */}
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {/*In above statement 
             (text-${props.mode === 'light' ? 'dark' : 'light'})
              it is defined as The expression props.mode === 'light' will evaluate to either true or false, depending on the value of the mode prop.
              OR
              If the mode prop is 'light', the expression props.mode === 'light' will evaluate to true, and the string 'dark' will be concatenated to the string 'text-' to form the class name 'text-dark'. If the mode prop is 'dark', the expression props.mode === 'light' will evaluate to false, and the string 'light' will be concatenated to the string 'text-' to form the class name 'text-light'.
        */}
            <input
              onClick={props.theme}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <b>Dark Mode</b>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //It adds the restrictions about that the value shoukd be only string + should be given or it will display the error.
  about: PropTypes.string.isRequired, //It adds the restrictions about that the value shoukd be only string + should be given or it will display the error.
};

Navbar.defaultProps =
  //It is used in just a case that if veluw of your following props not given then it will display the defaulted values we gave it to him
  {
    title: "MediStack",
    about: "About Us",
  };
