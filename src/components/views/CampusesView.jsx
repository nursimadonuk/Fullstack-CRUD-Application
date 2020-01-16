import React from "react";
import { Link } from "react-router-dom";

import "./ListView.css";

export default function CampusesView(props) {
  let title =
    props.allCampuses.length === 0 ? "NO CAMPUSES PRESENT" : "LIST OF CAMPUSES";

  return (
    <div>
      <h1>{title}</h1>

      {props.allCampuses.map(campus => (
        <div className="boxed" key={campus.id}>
          <div className="column">
            <img src={campus.image} alt="" />
          </div>
          <div className="column">Student Name: {campus.name}</div>
          <div className="column">
            <Link
              style={{ color: "purple" }}
              to={"/campus/" + campus.id + "/view/"}
            >
              View
            </Link>
            <br />
            <Link
              style={{ color: "red" }}
              to="/campuses"
              onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                props.handleRemoveStudent(campus.id);
              }}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
