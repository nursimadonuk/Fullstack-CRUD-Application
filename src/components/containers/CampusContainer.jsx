import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CampusContainer.css";
import NoAvatarImage from "./../../images/no_avatar.png";
import TempImage from "./download.jpg";

export default class CampusContainer extends Component {
  render() {
    return (
      <div className="boxed">
        <div className="column">
          <img src={NoAvatarImage} />
        </div>
        <div className="column">
          Campus Name: Lorem Ipsum <br /> Location Name: Lorem Ipsum
        </div>
        <div className="column">
          View Campus <br /> Delete Campus
        </div>
      </div>
    );
  }
}
