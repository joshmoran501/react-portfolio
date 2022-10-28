import React, { useState } from "react";
import Header from "./components/Header";
// import Container from "./components/Container";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Resume from "./components/pages/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const styles = {
  containerStyle: {
    height: "fit-content",
    margin: "2%",
  },
};

const Container = () => {
  return (
    <div style={styles.containerStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState("about");
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}