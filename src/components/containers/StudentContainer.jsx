import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllStudentsThunk, removeStudentThunk } from "../../thunks";
import { NavbarView, StudentsView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleRemoveStudent = id => {
    console.log(id);
    this.props.removeAStudent(id);
  };

  render() {
    console.log("Hii");
    console.log(this.props.allStudents);
    return (
      <div>
        <NavbarView />
        <StudentsView
          allStudents={this.props.allStudents.STUDENT_LIST}
          handleRemoveStudent={this.handleRemoveStudent}
        />
      </div>
    );
  }
}

function mapState(state) {
  return {
    allStudents: state.rootReducer
  };
}

function mapDispatch(dispatch) {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    removeAStudent: id => dispatch(removeStudentThunk(id))
  };
}

export default connect(mapState, mapDispatch)(StudentContainer);
