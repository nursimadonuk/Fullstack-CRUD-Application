import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllStudentsThunk, removeStudentThunk } from "../../thunks";
import { NavbarView, StudentsView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleRemoveStudent = id => {
    this.props.removeAStudent(id);
  };

  render() {
    return (
      <div>
        <NavbarView />
        <StudentsView
          allStudents={this.props.Store.STUDENT_LIST}
          handleRemoveStudent={this.handleRemoveStudent}
        />
      </div>
    );
  }
}

function mapState(state) {
  return {
    Store: state.rootReducer
  };
}

function mapDispatch(dispatch) {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    removeAStudent: id => dispatch(removeStudentThunk(id))
  };
}

export default connect(mapState, mapDispatch)(StudentContainer);
