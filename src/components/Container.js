import React from "react";
import About from "./pages/About.js";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Container() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </Router>
  );
}
