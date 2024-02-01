import React from "react";
import { Icon } from "@iconify/react";

import Footer from "./Footer";
import { dataDetails } from "../assets/data/data.jsx";

const Contact = () => {
  return (
    <>
      <div className="bg-white mx-5" style={{ marginTop: "100px" }}>
        <div className="my-5">
          <h3 className="text-center">Contact Us</h3>
          <div className="contact-us-details">
            <div className="px-5">
              <h5>Request a Call back :-</h5>
              <p style={{ fontSize: "medium" }}>
                In case of any queries regarding our products or services,
                kindly fill in the form to place a request for a callback or
                call on this number{" "}
                <span>
                  <a style={{ textDecoration: "none" }} href="tel:8668352179">
                    8668352179
                  </a>
                </span>
                . Our representatives will get in touch shortly.
              </p>
            </div>
            <div className="contact-us-footer no-display-mobile" style={{ marginTop: "5%", marginLeft:'-80px' }}>
              <div>
                <h5>Contact Us</h5>
                <hr style={{ backgroundColor: "white" }} />
              </div>
              <div>
                <p>
                  <Icon icon="zondicons:location" />
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
                      color: "black",
                      margin: "0px 5px",
                    }}
                  >
                    <span>{dataDetails.contactUs.phoneNumber[0]}</span>
                  </a>
                  <a
                    href="tel:+919579880719"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      margin: "0px 5px",
                    }}
                  >
                    <span>9579880719</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <iframe
            id="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.553092388979!2d79.29668407468637!3d19.943229024176798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d52cad9cbc39%3A0xaaca3dbd3a893474!2sDadmahal%20ward%2C%20near%20shalwan%20budhha%20vihar!5e0!3m2!1sen!2sin!4v1706634953914!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
        <div style={{ height: "20px" }}></div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
