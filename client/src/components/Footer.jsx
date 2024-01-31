import React from 'react'

import '../assets/styles/Footer.css'
import { dataDetails } from '../assets/data/data.jsx'
import logo from '../assets/images/logo512.png'

const Footer = () => {
    return (
        <footer>
            <div className='footer-body'>
                <div className='footer-content px-3'>
                    <div className='about'>
                        <div className='about-us-footer'>
                            <div className='logo-image my-5' >
                                <img src={logo} alt="Cool Climate" style={{ height: '80px', width: '80px' }} />
                            </div>
                            <div className='footer-description' >
                                <p>{dataDetails.aboutUs.footerDescription}</p>
                            </div>
                        </div>
                        <div className='contact-us-footer' style={{ marginTop: '5%' }}>
                            <div>
                                <h5>Contact Us</h5>
                                <hr style={{ backgroundColor: 'white' }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bolder' }}>Location : </p>
                                <hr className='new3' />
                                <p>{dataDetails.contactUs.location}</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bolder' }}>Phone Number : </p>
                                <hr className='new3' />
                                <a href="tel:8668352179" style={{textDecoration:'none', color:"white"}}><p>+91 {dataDetails.contactUs.phoneNumber[0]}</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <hr style={{ backgroundColor: 'white', margin: '0 18%' }} />
                    <div style={{ height: '50px', padding: '10px 0' }}>
                        <p>&copy; Cool Climate, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
