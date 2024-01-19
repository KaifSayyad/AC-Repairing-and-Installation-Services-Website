import React, { useEffect } from "react";
import logo from "../assets/images/logo192.png";
import "../assets/styles/Navbar.css";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="cool climate" id="logo" /> Cool Climate
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item" href="/">
                      AC Gas Filling
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="/">
                      Routine Service
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="/">
                      Repair Service
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="/">
                      Installation & Uninstallation
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

