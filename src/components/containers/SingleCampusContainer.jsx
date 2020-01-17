import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchAllCampusesThunk,
  fetchAllStudentsThunk,
  removeCampusThunk
} from "../../thunks";

import { NavbarView, SingleCampusView } from "../views";

import "../views/ListView.css";

class SingleCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id)
    };
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
    this.props.fetchAllStudents();
  }

  handleRemoveStudent = id => {
    this.props.removeACampus(id);
  };

  render() {
    let campus = this.props.Store.CAMPUS_LIST.filter(
      campus => campus.id === this.state.id
    );

    if (campus.length === 0) {
      return (
        <div>
          <NavbarView />
          <h1>Invalid id!</h1>
        </div>
      );
    } else {
      campus = campus[0];

      let students = this.props.Store.STUDENT_LIST.filter(
        student => campus.id === student.campus
      );

      return (
        <div>
          <NavbarView />
          <br />
          <SingleCampusView
            campus={campus}
            handleRemoveCampus={this.handleRemoveCampus}
            students={students}
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
    removeACampus: id => dispatch(removeCampusThunk(id))
  };
}

export default connect(mapState, mapDispatch)(SingleCampusContainer);
