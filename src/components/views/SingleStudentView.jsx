import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

export default function SingleStudentView(props) {
  return (
	  <div className="profile-container">
      {(props.student.length) == 1 ?
        (<div className="profile-body">
          <img className="profile-image" src={props.student[0].image}></img>
          <div className="profile-description">{props.student[0].firstName}</div>
        </div>)
     :
     (<h1>Student Not Found {props.student}</h1>)}
    </div>
  );
}

