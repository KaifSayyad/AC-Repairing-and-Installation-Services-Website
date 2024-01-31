import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";


import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact.jsx";
import Home from "./components/home";
import ModalProvider from "./providers/ModalProvider.jsx";
import SupabaseProvider from './providers/SupabaseProvider.jsx';
import UserProvider from './providers/UserProvider.jsx';
import TosterProvider from './providers/TosterProvider.jsx'
import BookCustomerModal from "./components/BookCustomerModal.jsx";



function App() {


  return (
    <>
    <TosterProvider />
      <SupabaseProvider>
        <UserProvider>
          <BrowserRouter>
            <ModalProvider />
            <Navbar />
            <Routes>

          /* change the route to  = /cool-cliamte */
              <Route path="/" exact element={<Home/>} />

          /* change the route to  = /cool-cliamte/contact */
              <Route path="/contact" exact element={<Contact/>} />

          /* change the route to  = /cool-cliamte/about-cool-climate */
              <Route path="/about-cool-climate" exact element={<AboutUs/>} />

            </Routes>
          </BrowserRouter>
        </UserProvider>
      </SupabaseProvider>
      <BookCustomerModal/>
    </>
  );
}

export default App;
