import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="chapNavbar">
          <ul>
            <li>
              <NavLink to="/home">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/services">services</NavLink>
            </li>
            <li>
              <NavLink to="/blog">blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="ongNavbar">
          <button>submit</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
