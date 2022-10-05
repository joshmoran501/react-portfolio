import React, { useState } from "react";
import NavTab from "./NavBar";

const styles = {
  headerStyles: {
    background: "#23415a",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "2em",
    paddingBottom: "2em",
    paddingLeft: "1em",
    position: "relative",
    width: "100%",
  },
  h1Styles: {
    marginBottom: "0",
    paddingTop: "8px",
    paddingBottom: "8px",
  },
};

export default function Header() {
  // const [currentPage, setCurrentPage] = useState("About");
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.headerStyles}>
      <h1 style={styles.h1Styles}>Joshua Moran</h1>
      <NavTab />
    </div>
  );
}
