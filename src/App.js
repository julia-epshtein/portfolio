import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, ScrollRestoration } from 'react-router-dom';

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
    <Router>
        <div className="app bg-deep-blue">
          <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Routes strict={true}>
            <Route path="/home" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/portfolio" exact element={<Portfolio />} />
            <Route path="/experience" exact element={<Experience />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
          <SocialLinks />
        </div>
    </Router>
  );
}

export default App;
