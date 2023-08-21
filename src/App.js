import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <BrowserRouter>
        <div className="app bg-deep-blue">
          <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Home />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <SocialLinks />
        </div>
    </BrowserRouter>
  );
}

export default App;
