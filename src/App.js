import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";

function App() {
  const Home = () => <h1>Home</h1>;
  const Campuses = () => <h1>Campuses</h1>;
  const Students = () => <h1>Students</h1>;
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
        <Route exact path="/" render={Home} />
        <Route exact path="/students" render={Students} />
        <Route exact path="/campuses" render={Campuses} />
        <Route path="/student/:id/view" render={ShowID} />
        <Route path="/student/:id/edit" render={ShowID} />
        <Route path="/campus/:id/view" render={ShowID} />
        <Route path="/campus/:id/edit" render={ShowID} />

        <Navbar />
      </Router>
    </div>
  );
}

export default App;
