import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../views/Profile.css"

/**
 * This class will be a smart container for the Single Student View.
 * It will extract the student's ID from the url /student/:id/view,
 * get the appropriate information from the store, then pass the
 * information to the Single Student View as props. This will also
 * try to get information about the campus this student belongs to.
*/
export default class SingleStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id //this will hold the student's ID from the URL
    };
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-body">
          <img className="profile-image" src={this.props.S}></img>
          <div className="profile-description">{this.state.id}</div>
        </div>
      </div>
    );
  }
}
