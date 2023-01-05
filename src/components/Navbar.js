import "./Navbar.css"

import React from 'react'
import { Link } from "react-router-dom"
import caricatura from "../img/caricatura.png"

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="caricatura" src= {caricatura} ></img>
      </Link>
      <ul className="nav-menu">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">about</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
