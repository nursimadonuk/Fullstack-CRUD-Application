import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./CampusContainer.css";
import NoAvatarImage from "./../../images/no_avatar.png";

export default class CampusContainer extends Component {
  delete = () => {
    console.log(this.props.campus);
  };

  render() {
    return (
      <div className="boxed">
        <div className="column">
          <img alt="" src={this.props.campus.image} />
        </div>
        <div className="column">
          Campus Name: {this.props.campus.name}
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

CampusContainer.propTypes = {campus: PropTypes.object}