import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllCampusesThunk, removeCampusThunk } from "../../thunks";
import { NavbarView, CampusesView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  handleRemoveStudent = id => {
    this.props.removeACampus(id);
  };

  render() {
    return (
      <div>
        <NavbarView />
        <CampusesView
          allCampuses={this.props.Store.CAMPUS_LIST}
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
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    removeACampus: id => dispatch(removeCampusThunk(id))
  };
}

export default connect(mapState, mapDispatch)(CampusContainer);
