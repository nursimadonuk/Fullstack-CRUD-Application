import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllCampusesThunk, editCampusThunk, addCampusThunk } from "../../thunks";
import { NavbarView, CampusEditView } from "../views";

class CampusEditContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.modes = {EDIT: "Editing Campus", NEW: "Enter information for the new campus", INVALID: "This campus was not found"}
    this.state = {
      name: "",
      address: "",
      description: "",
      image: "",
      id: null,
      /* A boolean that indicates whether we have initialized this 
      component with values from the current campus's values yet. 
      Will be set to true if the campus is found in the database 
      and the redux store is updated. Used to prevent an infinite 
      loop in componentDidUpdate */
      initialized: false,
      mode: ""
    };
    /* Tests whether the url parameter (not query string) "id" is a
    number or not. Uses built-in javascript isNaN() function. If no
    "id" was provided, it will be defined, and therefore not a number.
    In this case, we can assume that you are adding a new campus. */
    console.log("Constructor: ", this.props.match.params.id);
    if(this.props.match.params.id == undefined) {
      this.state.mode = this.modes.NEW;
    }
    else if(!isNaN(this.props.match.params.id)) {
      this.state.id = parseInt(this.props.match.params.id);
      this.props.fetchAllCampuses();
      this.state.mode = this.modes.EDIT;
    }
    else {
      this.state.mode = this.modes.INVALID;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.initialized == false && this.props.campuses.length > 0) {
      let campusById = this.props.campuses.filter(
        campus => campus.id === this.state.id
      );
      if(campusById.length != 0) {
        this.setState({
          ...campusById[0], 
          initialized: true
        });
      }
      else {
        this.setState({
          mode: this.modes.INVALID,
          initialized: true
        })
      }
    }
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };
  handleAddress = e => {
    this.setState({ address: e.target.value });
  };
  handleDescription = e => {
    this.setState({ description: e.target.value });
  };
  handleImage = e => {
    this.setState({ image: e.target.value });
  };
  handleSubmission = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(this.state.id != null) {
      this.props.editCampus(this.state);
    } else {
      this.props.addCampus(this.state);
    }
  }

  render() {
    
    return (
      <div>
        <NavbarView />
        <h1>{this.state.mode}</h1>
        {(this.state.mode != this.modes.INVALID) && (
        <CampusEditView 
            initValues={this.state} 
            campuses={this.props.campuses}
            handleName={this.handleName}
            handleAddress={this.handleAddress}
            handleDescription={this.handleDescription}
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
    campuses: state.rootReducer.CAMPUS_LIST
  };
}

function mapDispatch(dispatch) {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    editCampus: (changes) => dispatch(editCampusThunk(changes)),
    addCampus: (newCampus) => dispatch(addCampusThunk(newCampus))
  };
}

export default connect(mapState, mapDispatch)(CampusEditContainer);
