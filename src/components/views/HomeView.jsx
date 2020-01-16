import React from "react";
import { Link } from "react-router-dom";

import "./HomeView.css";
import logo from "./../../images/logo.png";

export default function HomeView(props) {
  return (
    <div className="wrapper">
      <Link to="/" className="logo">
        <img src={logo} alt="yes" />
      </Link>
      <div id="description">
        <p>
          Full Stack Crud App <br />
          Project Description Goes Here
        </p>
      </div>
      <div>
        <Link to="/students">
          <button className="btn btn2" id="two">
            View Students
          </button>
        </Link>
        <Link to="/campuses">
          <button className="btn btn1" id="one">
            View Campuses
          </button>
        </Link>
        <Link to="/edit">
          edit
        </Link>

      </div>
    </div>
  );
}
