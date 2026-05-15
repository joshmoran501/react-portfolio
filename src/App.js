import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Resume from "./components/pages/Resume";
import AICybersecurity from "./components/pages/AICybersecurity";
import AcceptableUsePolicy from "./components/pages/AcceptableUsePolicy";
import ChimpanzeeSubgroups from "./components/pages/ChimpanzeeSubgroups";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function Container() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio/ai-cybersecurity" element={<AICybersecurity />} />
        <Route path="/portfolio/authorized-use-policy" element={<AcceptableUsePolicy />} />
        <Route path="/portfolio/chimpanzee-subgroups" element={<ChimpanzeeSubgroups />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="app-layout">
        <Header />
        <div className="site-main">
          <Container />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
