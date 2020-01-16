import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllStudentsThunk } from "../../thunks";
import { NavbarView, StudentsView } from "../views";

import "./StudentContainer.css";

class StudentContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  delete = () => {
    console.log(this.props.student);
  };

  render() {
    console.log("Hii");
    console.log(this.props.allStudents);
    return (
      <div>
        <NavbarView />
        <StudentsView
          allStudents={this.props.allStudents.STUDENT_LIST}
          handleRemoveStudent={this.delete}
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
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  };
}

export default connect(mapState, mapDispatch)(StudentContainer);
