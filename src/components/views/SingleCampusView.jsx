import React from "react";
import { Link } from "react-router-dom";

import "./ListView.css";

export default function SingleCampusView(props) {
  let studentDisplay = ["No Associated Student"];

  if (props.students.length !== 0) {
    studentDisplay = props.students.map(student => (
      <Link
        style={{ color: "purple" }}
        to={"/student/" + student.id + "/view/"}
        key={student.id}
      >
        {student.firstName} {student.lastName}
      </Link>
    ));
  }

  return (
    <div className="boxed" key={props.campus.id}>
      <img src={props.campus.image} alt="" />
      <br />
      {props.campus.name}
      <br />
      Address: {props.campus.address}
      <br />
      Description: {props.campus.description}
      <br />
      Students:
      <br />
      {studentDisplay.map(student => student)}
      <br />
      <Link
        style={{ color: "purple" }}
        to={"/campus/" + props.campus.id + "/edit/"}
      >
        Edit
      </Link>{" "}
      <Link
        style={{ color: "red" }}
        to="/campuses"
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          props.handleRemoveCampus(props.campus.id);
        }}
      >
        Delete
      </Link>
    </div>
  );
}
