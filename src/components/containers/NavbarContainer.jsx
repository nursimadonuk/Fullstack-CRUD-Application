import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavbarContainer.css";
import logo from "./../../images/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="yes" />
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/students">Students</Link>
          </li>
          <li className="nav-item">
            <Link to="/campuses">Campuses</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
