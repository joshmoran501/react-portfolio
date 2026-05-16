import React from "react";
import { Link } from "react-router-dom";
import NavTab from "./NavBar";
import LemurLogo from "../assets/images/lemur-logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-brand" aria-label="Home">
        <img src={LemurLogo} alt="" className="site-logo" />
        <h1>Joshua Moran</h1>
      </Link>
      <NavTab />
    </header>
  );
}
