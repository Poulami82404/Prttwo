import Nav from "./common/Nav";
import Home from "./Pages/Home";
import "./common/Commoncss.css";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Jsprojects from "./Pages/Jsprojects";
import Learn from "./common/Learn";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
      <Learn />
      {/* <Home
      <About />
      <Services/>s
      <Education/>
      <Work/>
      <Contact/> */}
      <Routes>
        <Route exact="true" path="/myportfolio" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/projects" element={<Jsprojects />}/>      
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;