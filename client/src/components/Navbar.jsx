import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";


import logo from "../assets/images/logo192.png";
import "../assets/styles/Navbar.css";


;

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
    <nav className="navbar navbar-expand-lg  " ref={navbarRef} id='topNavbar'>
      <div className="container-fluid" >
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
              <Link className={`nav-link ${location.pathname === '/' ? 'active bold-text' : ''}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active bold-text' : ''}`} to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about-cool-climate' ? 'active bold-text' : ''}`} to="/about-cool-climate">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="btn btn-secondary"
              > Book now</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

