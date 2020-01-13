import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StudentContainer.css";
import NoAvatarImage from "./../../images/no_avatar.png";
import TempImage from "./download.jpg";

export default class StudentContainer extends Component {
  render() {
    return (
      <div className="boxed">
        <div className="column">
          <img src={NoAvatarImage} />
        </div>
        <div className="column">
          Student Name: Lorem Ipsum <br /> Campus Name: Lorem Ipsum
        </div>
        <div className="column">
          Edit Student <br /> Delete Student
        </div>
      </div>
    );
  }
}
