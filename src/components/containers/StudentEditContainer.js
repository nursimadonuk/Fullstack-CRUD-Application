import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllStudentsThunk } from "../../thunks";
import { NavbarView, StudentEditView } from "../views";

import "./NavbarContainer.css";

class StudentEditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      firstName: "",
      lastName: "",
      campus: "",
      GPA: "",
      email: "",
      image: ""
    };
  }
  handleFirstName = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastName = e => {
    this.setState({ lastName: e.target.value });
  };
  handleCampus = e => {
    this.setState({ campus: e.target.value });
  };
  handleGPA = e => {
    this.setState({ GPA: e.target.value });
  };
  handleEmail = e => {
    this.setState({ email: e.target.value });
  };
  handleImage = e => {
    this.setState({ image: e.target.value });
  };
  render() {
    return (
      <div>
        <NavbarView />
        <StudentEditView student={"hi"} />
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

export default connect(mapState, mapDispatch)(StudentEditContainer);
