import logo from "../assets/images/logo192.png";
import "../assets/styles/Navbar.css";


import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {

  let prevScrollPos = window.scrollY
  const navbarRef = useRef(null);
  const location = useLocation();


  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {

    const currentScrollPos = window.scrollY
    const navbar = navbarRef.current;


    if (navbar) {
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("topNavbar").style.top = "0";
      } else {
        document.getElementById("topNavbar").style.top = "-100px";
      }
    }

    prevScrollPos = currentScrollPos;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " ref={navbarRef} id='topNavbar'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="cool climate" id="logo" /> Cool Climate
          </Link>
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
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown" >
                <Link
                  className={`nav-link dropdown-toggle ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item" to="/">
                      AC Gas Filling
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" to="/">
                      Routine Service
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" to="/">
                      Repair Service
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" to="/">
                      Installation & Uninstallation
                    </Link>
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

