import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";

function App() {

  return (
    <BrowserRouter>
      <div className="bg-deep-blue">
        <div><NavBar /></div>
        <div><Home /></div>
        <div><About /></div>
        <div><Projects /></div>
        <div><Experience /></div>
        <div><Contact /></div>
        <SocialLinks />
      </div>
    </BrowserRouter>
  );
}

export default App;
