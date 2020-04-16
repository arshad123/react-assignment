import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getUser, logOut } from "./service/dataServices";

const NavBar = (props) => {
  const userdata = getUser();
  const logoutHandle = () => {
    logOut();
    toast.success("Successfully LogedOut");
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Navbar</span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {!userdata.isLogedIn && (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </React.Fragment>
          )}
          {userdata.isLogedIn && (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={logoutHandle}>
                  Logout
                </span>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
