import React, { useState } from "react";
import NavBar from "./NavBar";

const styles = {
  headerStyles: {
    background: "#23415a",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "2em",
    paddingBottom: "2em",
    paddingLeft: "1em",
  },
};

export default function Header() {
  // const [currentPage, setCurrentPage] = useState("About");
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.headerStyles}>
      <h1>Joshua Moran</h1>
      <NavBar />
    </div>
  );
}
