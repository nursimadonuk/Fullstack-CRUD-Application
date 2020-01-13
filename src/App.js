import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import Home from "./pages/Home.js";
import Students from "./pages/Students.js";
import Campuses from "./pages/Campuses.js";
import NotFound from "./pages/404.js";

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
      <Provider store={props.store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/campuses" component={Campuses} />
            <Route path="/student/:id/view" render={ShowID} />
            <Route path="/student/:id/edit" render={ShowID} />
            <Route path="/campus/:id/view" render={ShowID} />
            <Route path="/campus/:id/edit" render={ShowID} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
