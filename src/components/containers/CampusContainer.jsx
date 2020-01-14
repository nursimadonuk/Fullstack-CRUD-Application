import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CampusContainer.css";
import NoAvatarImage from "./../../images/no_avatar.png";

export default class CampusContainer extends Component {
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
          Campus Name: Lorem Ipsum <br /> Location Name: Lorem Ipsum
        </div>
        <div className="column">
          <Link style={{ color: "purple" }} to="/campuses">
            View
          </Link>
          <br />
          <Link style={{ color: "red" }} onlick={this.delete}>
            Delete
          </Link>
        </div>
      </div>
    );
  }
}
