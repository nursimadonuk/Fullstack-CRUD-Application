import React, { Component } from 'react'
import { connect } from "react-redux";

import { fetchAllStudentsThunk } from "../../thunks";
import { NavbarView, StudentEditView } from "../views";

import "./NavbarContainer.css";

class StudentEditContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id)
        }
    } 
    render() {
        return (
            <div>
                <NavbarView />
                <StudentEditView student={"hi"} />
            </div>
        )
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
