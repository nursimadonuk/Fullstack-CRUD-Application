import React from "react";
import { Link } from "react-router-dom";

import "./ListView.css";

export default function StudentsView(props) {
  let title =
    props.allStudents.length === 0 ? "NO STUDENTS PRESENT" : "LIST OF STUDENTS";

  return (
    <div>
      <h1>{title}</h1>
      {props.allStudents.map(student => (
        <div className="boxed" key={student.id}>
          <div className="column">
            <img src={student.image} alt="" />
          </div>
          <div className="column">Student Name: {student.name}</div>
          <div className="column">
            <Link
              style={{ color: "purple" }}
              to={"/student/" + student.id + "/view/"}
            >
              View
            </Link>
            <br />
            <Link
              style={{ color: "red" }}
              to="/students"
              onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                props.handleRemoveStudent(student.id);
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
