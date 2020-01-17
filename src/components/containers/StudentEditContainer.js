import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllStudentsThunk, fetchAllCampusesThunk, editStudentThunk } from "../../thunks";
import { NavbarView, StudentEditView } from "../views";

import "./NavbarContainer.css";

class StudentEditContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
      initialized: false
    };
    this.props.fetchAllCampuses();
    console.log(parseInt(this.props.match.params.id));
    try {
      this.state.id = parseInt(this.props.match.params.id);
      this.props.fetchAllStudents();
    } 
    catch(error) {
      //do nothing, because this just means no student ID was specified
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated state:");
    console.log(prevState);
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
    if(this.state.id != null) {
      this.props.editStudent(this.state);
    } else {
      //planned: this.props.addStudent(this.state);
    }
  }

  render() {
    
    return (
      <div>
        <NavbarView />
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
    editStudent: (changes) => dispatch(editStudentThunk(changes))
  };
}

export default connect(mapState, mapDispatch)(StudentEditContainer);
