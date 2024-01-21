import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";
import Home from "./components/home";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          /* change the route to  = /cool-cliamte */
          <Route path="/"  element={<Home />} />
          /* change the route to  = /cool-cliamte/contact */
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
