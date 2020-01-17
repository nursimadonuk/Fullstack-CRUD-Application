import React from "react";
import { Link } from "react-router-dom";

import "./ListView.css";

export default function StudentsView(props) {
  return (
    <div className="boxed" key={props.student.id}>
    <img src={props.student.image} alt="" />
    <br/>
    {props.student.firstName} {props.student.lastName}
    <br />
    Campus:
    {" "}
    <Link
      style={{ color: "purple" }}
      to={"/campus/" + props.student.campus + "/view/"}
    >{props.campusName}
      </ Link>
      <br />
      GPA: {props.student.GPA}
      <br />
      Email: {props.student.email}
      <br />
      <Link
        style={{ color: "purple" }}
        to={"/student/" + props.student.id + "/edit/"}
      >
        Edit
      </Link>
      {" "}
      <Link
        style={{ color: "red" }}
        to="/students"
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          props.handleRemoveStudent(props.student.id);
        }}
      >
        Delete
      </Link>
    </div>
  );
}
