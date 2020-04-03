import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">Fast Facts Adventure</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
