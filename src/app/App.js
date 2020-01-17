import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./../store";
import { NotFoundView } from "./../components/views";

import {
  HomeContainer,
  CampusContainer,
  StudentContainer,
  SingleCampusContainer,
  SingleStudentContainer,
  StudentEditContainer
} from "../components/containers";

import "./App.css";

/**
 * This component is just a wrapper for Router and Redux. Expects
 * a "store" prop. Rendered in src/index.js
 */
function App(props) {
  const ShowID = props => {
    console.log(props);
    return (
      <div>
        <h1>Path: {props.location.pathname} </h1>{" "}
        <h1>ID: {props.match.params.id}</h1>
      </div>
    );
  };

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/students" component={StudentContainer} />
            <Route exact path="/campuses" component={CampusContainer} />
            <Route exact path="/students/add" component={StudentEditContainer} />
            <Route path="/student/:id/view" component={SingleStudentContainer} />
            <Route path="/student/:id/edit" component={StudentEditContainer} />
            <Route path="/campus/:id/view" component={SingleCampusContainer} />
            <Route path="/campus/:id/edit" render={ShowID} />
        
            <Route component={NotFoundView} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
