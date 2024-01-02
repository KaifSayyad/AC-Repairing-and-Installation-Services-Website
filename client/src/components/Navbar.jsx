import React from "react";
import logo from "../assets/images/logo192.png";
import "../assets/styles/Navbar.css";
import "animate.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary " >
        <div class="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="cool climate" id="logo" /> Cool Climate
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu animate__animated animate__fadeIn">
                <li>
                    <a class="dropdown-item" href="/">
                      AC Gas Filling
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="/">
                      Routine Service
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="/">
                    Repair Service
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="/">
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

