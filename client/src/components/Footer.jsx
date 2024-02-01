import React from "react";
import { Icon } from "@iconify/react";

import "../assets/styles/Footer.css";
import { dataDetails } from "../assets/data/data.jsx";
import logo from "../assets/images/logo512.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-content px-3">
          <div className="about">
            <div className="about-us-footer">
              <div className="logo-image my-5">
                <img
                  src={logo}
                  alt="Cool Climate"
                  style={{ height: "80px", width: "80px" }}
                />
              </div>
              <div className="footer-description">
                <p>{dataDetails.aboutUs.footerDescription}</p>
              </div>
            </div>
            <div className="contact-us-footer" style={{ marginTop: "5%" }}>
              <div>
                <h5>Contact Us</h5>
                <hr style={{ backgroundColor: "white" }} />
              </div>
              <div>
                <p>
                  <Icon
                    icon="zondicons:location"
                    style={{ color: "#f3ecec" }}
                  />
                  <span style={{ fontWeight: "bold", margin: "0 3px" }}>
                    Location :
                  </span>
                  {dataDetails.contactUs.location}
                </p>
              </div>
              <div>
                <p>
                  <Icon icon="ic:baseline-phone" />
                  <span style={{ fontWeight: "bold", margin: "0 3px" }}>
                    Phone Number :
                  </span>
                  <a
                    href="tel:+918668352179"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: "0px 5px",
                    }}
                  >
                    <span>+91 {dataDetails.contactUs.phoneNumber[0]}</span>
                  </a>
                  <a
                    href="tel:+919579880719"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: "0px 5px",
                    }}
                  >
                    <span>+91 9579880719</span>
                  </a>
                  <div className="my-3">
                  <Icon icon="tabler:location-filled"  style={{color: '#f3ecec'}} />
                    <span style={{fontWeight: "bold",  margin: "0 3px"}}>Follow Us :</span>
                   <a className="mx-3" href="https://www.instagram.com/cool_climate0001?igsh=MWZyYmF2enF6NDN2bg==" style={{textDecoration:'none', color:"white"}} target="_blank">
                    <Icon icon="bi:instagram" style={{width:'5%', height:'2%'}}/>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <hr style={{ backgroundColor: "white", margin: "0 18%" }} />
          <div style={{ height: "50px", padding: "10px 0" }}>
            <p>&copy; Cool Climate, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
