import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About.js";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");

  function renderPage(param) {
    switch (param) {
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      default:
        return <About />;
    }
  }

  // const renderPage = () => {
  //   if (currentPage === "About") {
  //     return <About />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   if (currentPage === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   return <Resume />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {renderPage(currentPage)}
      <Footer />
    </div>
  );
}
