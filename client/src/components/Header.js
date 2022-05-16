import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  // create views

  const showNavigation = () => (
    <nav >

      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid wh-4">
          <p> Here will come our infos and the social media icons</p>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">MT-GE Global Energy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link active" aria-current="page">Signin</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link active" aria-current="page">Signup</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </nav>

  );
  //  render the views 

  return (
    <header id="header">
      {showNavigation()}

    </header>
  );
};




export default Header;