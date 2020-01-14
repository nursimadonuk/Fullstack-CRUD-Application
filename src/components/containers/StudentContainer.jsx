import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./StudentContainer.css";
import NoAvatarImage from "./../../images/no_avatar.png";

export default class StudentContainer extends Component {
  delete = () => {
    console.log("Deleting");
  };

  render() {
    return (
      <div className="boxed">
        <div className="column">
          <img alt="" src={NoAvatarImage} />
        </div>
        <div className="column">
          Student Name: Lorem Ipsum <br /> Campus Name: Lorem Ipsum
        </div>
        <div className="column">
          <Link style={{ color: "purple" }} to="/campuses">
            View
          </Link>
          <br />
          <Link style={{ color: "red" }} onClick={this.delete}>
            Delete
          </Link>
        </div>
      </div>
    );
  }
}
