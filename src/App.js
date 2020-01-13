import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import {
  HomeView,
  StudentsView,
  CampusesView,
  NotFoundView
} from "./components/views";

function App() {
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
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/students" component={StudentsView} />
          <Route exact path="/campuses" component={CampusesView} />
          <Route path="/student/:id/view" render={ShowID} />
          <Route path="/student/:id/edit" render={ShowID} />
          <Route path="/campus/:id/view" render={ShowID} />
          <Route path="/campus/:id/edit" render={ShowID} />
          <Route component={NotFoundView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
