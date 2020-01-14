import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./StudentContainer.css";
import NoAvatarImage from "./../../images/no_avatar.png";

export default class StudentContainer extends Component {
  delete = () => {
    console.log(this.props.student);
  };

  render() {
    let viewURL = "/student/" + this.props.student.id + "/view/";
    return (
      <div className="boxed">
        <div className="column">
          <img src={this.props.student.image} alt="" />
        </div>
        <div className="column">Student Name: {this.props.student.name}</div>
        <div className="column">
          <Link style={{ color: "purple" }} to={viewURL}>
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

StudentContainer.propTypes = { student: PropTypes.object };
