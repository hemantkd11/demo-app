import React from "react";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="navbar-wrapper">
        <div className="logo-nav" onClick={() => Navigate("/")}>
          FuN
        </div>
      </div>
    </div>
  );
};

export default Navbar;
