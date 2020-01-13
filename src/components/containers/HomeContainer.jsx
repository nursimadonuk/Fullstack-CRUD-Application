import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeContainer.css";
import TempImage from "./download.jpg";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <img alt="" src={TempImage} />
        <div id="description">
          <p>
            Full Stack Crud App <br />
            Project Description Goes Here
          </p>
        </div>
        <div>
          <button className="btn btn2" id="two">
            <Link to="/students">View Students</Link>
          </button>
          <button className="btn btn1" id="one">
            <Link to="/campuses">View Campuses</Link>
          </button>
        </div>
      </div>
    );
  }
}
