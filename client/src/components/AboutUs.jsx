import React from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';

import useAuthModal from '../hooks/useAuthModal'
import { useUser } from '../hooks/useUser'
import Settings from './Settings'
import { dataDetails } from '../assets/data/data'
import img from '../assets/images/2.jpg'
import Footer from './Footer';



const AboutUs = () => {

  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();


  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Successfully logged out!');
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    }
  };

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <div className="home-about-us my-4 mx-3 bg-white">
          <div>
            <img src={img} alt="image" className="home-about-img" />
          </div>
          <div className="home-about my-2 mx-2">
            <h5 className="p-2" style={{ color: '#09d' }}>ABOUT COMPANY</h5>
            <h3 className="p-2" >We Offer A Complete Maintenance Service On All Air Condition Equipment</h3>
            <p className="p-2" style={{ fontSize: 'medium' }}>{dataDetails.aboutUs.intorStart}</p>
            <ul>
              <li>Highly skilled & experienced engineers</li>
              <li>Work guaranteed for 2 year</li>
              <li>Emergency call outs 24/7</li>
            </ul>
          </div>
        </div>
        <div className="my-4 mx-3 bg-white">
          <div style={{ height: '20px' }}>
          </div>
          <h2 className="text-center">ABOUT US</h2>
          <h6 className="text-center my-1" >Cool Climate: A Leading Online Platform For All Air Conditioner Sales And Services</h6>
          <div className="container my-3">
            <p className="my-2" style={{ fontSize: 'medium' }}>{dataDetails.aboutUs.startingDescription}</p>
            <h6 className="my-2">Why Consider {

              user ?
                (<span onClick={handleLogout} style={{color: '#09d'}}>Cool Climate?</span>) : (<span onClick={authModal.onOpen} >Cool Climate?</span>)

            }</h6>
            <p className="my-3">{dataDetails.aboutUs.whyCoolClimate}</p>
          </div>
          <div style={{ height: '20px' }}>
          </div>
        </div >
      </div>
      {
        user ? (<>
          <hr />
          <Settings />
        </>) : (<></>)
      }
      <Footer/>
    </>
  )
}

export default AboutUs
