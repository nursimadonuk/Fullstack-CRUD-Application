import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchAllCampusesThunk,
  fetchAllStudentsThunk,
  removeStudentThunk
} from "../../thunks";

import { NavbarView, SingleStudentView } from "../views";

import "../views/ListView.css";

/**
 * This class will be a smart container for the Single Student View.
 * It will extract the student's ID from the url /student/:id/view,
 * get the appropriate information from the store, then pass the
 * information to the Single Student View as props. This will also
 * try to get information about the campus this student belongs to.
 */
class SingleStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id) //this will hold the student's ID from the URL
    };
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
    this.props.fetchAllStudents();
  }

  handleRemoveStudent = id => {
    this.props.removeAStudent(id);
  };

  render() {
    let student = this.props.Store.STUDENT_LIST.filter(
      student => student.id === this.state.id
    );

    if (student.length !== 1) {
      return (
        <div>
          <NavbarView />
          <h1>Invalid id!</h1>
        </div>
      );
    } else {
      student = student[0];
      let campus = this.props.Store.CAMPUS_LIST.filter(
        campus => campus.id === student.campus
      );

      let campusName =
        campus.length === 1 ? campus[0].name : "No Associated Campus";

      return (
        <div>
          <NavbarView />
          <br />
          <SingleStudentView
            student={student}
            handleRemoveStudent={this.handleRemoveStudent}
            campusName={campusName}
          />
        </div>
      );
    }
  }
}

function mapState(state) {
  return {
    Store: state.rootReducer
  };
}

function mapDispatch(dispatch) {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    removeAStudent: id => dispatch(removeStudentThunk(id))
  };
}

export default connect(mapState, mapDispatch)(SingleStudentContainer);
