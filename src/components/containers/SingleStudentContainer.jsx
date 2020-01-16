import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchAllStudentsThunk } from "../../thunks";

import { SingleStudentView, NavbarView } from "../views/";

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
      //this will hold the student's ID from the URL
      id: props.match.params.id
    };
    console.log(this.state.id);
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <NavbarView />
          <SingleStudentView 
            student={this.props.allStudents.STUDENT_LIST.filter(
              (element, index) => {
                console.log("comparing to " + this.state.id);
                console.log(element);
                return element.id == this.state.id
              }
            )} 
          />
        />
      </div>
    );
  }
}

/**
 * Used by redux to map reducers to this component's state 
*/
function mapState(state) {
  return {
    allStudents: state.rootReducer
  };
}

/**
 * Used by redux to map dispatch callbacks to props. This makes the
 * action creators available to this component with the props listed
 * below. 
*/
function mapDispatch(dispatch) {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  };
}

export default connect(mapState, mapDispatch)(SingleStudentContainer);
