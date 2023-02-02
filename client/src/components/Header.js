import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../helpers/auth";


import { isAuthenticated } from "../helpers/auth";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = evt => {
    logout(() => {
      navigate("/login")
    });
  };

  // create views

  const showNavigation = () => (

    <nav >

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">[LOGO]</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
            aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">


            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {

                !isAuthenticated() && (
                  <Fragment>
                    <li className="nav-item">

                      <Link to="/" className="nav-link active"><i className="fa-solid fa-house"></i> Home  </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/login" className="nav-link active"><i className="fa-solid fa-right-to-bracket"></i>  Signin  </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link active"> <i className="fa-solid fa-pen-to-square"></i>  Signup </Link>
                    </li>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <Link to="/" className="nav-link active dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Shop
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><Link to="/" className="dropdown-item">Action</Link></li>
                            <li><Link to="/" className="dropdown-item">Another action</Link></li>
                            <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div> */}


                  </Fragment>

                )
              }

              {
                isAuthenticated() && isAuthenticated().role === 0 && (
                  <Fragment>
                    <li className="nav-item">

                      <Link to="/user/dashboard" className="nav-link active"  >
                        <i className="fa-solid fa-house"></i>   Dashboard </Link>
                    </li>


                  </Fragment>

                )
              }
              {
                isAuthenticated() && isAuthenticated().role === 1 && (
                  <Fragment>
                    <li className="nav-item">

                      <Link to="/admin/dashboard" className="nav-link active" >
                        <i className="fa-solid fa-house"></i>   Home </Link>
                    </li>


                  </Fragment>

                )
              }
              {
                isAuthenticated() && (
                  <Fragment>
                    <li className="nav-item">

                      <button className="btn btn-link text-secondary text-decoration-none ps-0"
                        onClick={handleLogout} > <i className="fa-solid fa-right-from-bracket"></i>  Logout </button>
                    </li>


                  </Fragment>
                )
              }

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