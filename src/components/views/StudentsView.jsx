import React from "react";
import { Link } from "react-router-dom";

export default function StudentsView(props) {
  return (
    <div>
      <h1>ALLSTUDENTSVIEW IS RENDERING HERE</h1>
      {props.allStudents.map(student => (
        <div className="boxed">
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
              onClick={() => props.handleRemoveStudent(student.id)}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
