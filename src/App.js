import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About"
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Contact from "./components/Contact";

import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState()

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
