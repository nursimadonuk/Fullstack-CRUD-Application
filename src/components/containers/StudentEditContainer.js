import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllStudentsThunk, fetchAllCampusesThunk, editStudentThunk, addStudentThunk } from "../../thunks";
import { NavbarView, StudentEditView } from "../views";

import "./NavbarContainer.css";

class StudentEditContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.modes = {EDIT: "Editing Student", NEW: "Enter information for the new student", INVALID: "This student was not found"}
    this.state = {
      firstName: "",
      lastName: "",
      campus: "",
      GPA: "",
      email: "",
      image: "",
      id: null,
      /* A boolean that indicates whether we have initialized this 
      component with values from the current student's values yet. 
      Will be set to true if the student is found in the database 
      and the redux store is updated. Used to prevent an infinite 
      loop in componentDidUpdate */
      initialized: false,
      mode: ""
    };
    this.props.fetchAllCampuses();
    /* Tests whether the url parameter (not query string) "id" is a
    number or not. Uses built-in javascript isNaN() function. If no
    "id" was provided, it will be defined, and therefore not a number.
    In this case, we can assume that you are adding a new student. */
    if(this.props.match.params.id == undefined) {
      this.state.mode = this.modes.NEW;
    }
    else if(!isNaN(this.props.match.params.id)) {
      this.state.id = parseInt(this.props.match.params.id);
      this.props.fetchAllStudents();
      this.state.mode = this.modes.EDIT;
    }
    else {
      this.state.mode = this.modes.INVALID;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.initialized == false && this.props.students.length > 0) {
      let student = this.props.students.filter(
        student => student.id === this.state.id
      );
      console.log(`Results: ${student.length}`);
      if(student.length != 0) {
        this.setState({
          ...student[0], 
          initialized: true
        });
      }
    }
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
  handleSubmission = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(this.state.id);
    if(this.state.id != null) {
      this.props.editStudent(this.state);
    } else {
      this.props.addStudent(this.state);
    }
  }

  render() {
    
    return (
      <div>
        <NavbarView />
        <h1>{this.state.mode}</h1>
        {(this.state.mode != this.modes.INVALID) && (
        <StudentEditView 
            student={this.state} 
            campuses={this.props.campuses}
            handleFirstName={this.handleFirstName}
            handleLastName={this.handleLastName}
            handleCampus={this.handleCampus}
            handleGPA={this.handleGPA}
            handleEmail={this.handleEmail}
            handleImage={this.handleImage}
            handleSubmission={this.handleSubmission}
        />
        )}
      </div>
    );
  }
}

function mapState(state) {
  return {
    students: state.rootReducer.STUDENT_LIST,
    campuses: state.rootReducer.CAMPUS_LIST
  };
}

function mapDispatch(dispatch) {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    editStudent: (changes) => dispatch(editStudentThunk(changes)),
    addStudent: (student) => dispatch(addStudentThunk(student))
  };
}

export default connect(mapState, mapDispatch)(StudentEditContainer);
