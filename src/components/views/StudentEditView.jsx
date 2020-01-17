import React from "react";
import { Link } from "react-router-dom";

export default function StudentEditView(props) {
  return (
    <div>
      <table className="form">
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>
              <input
                type="text"
                onChange={props.handleFirstName}
                value={props.student.firstName}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>
              <input
                type="text"
                onChange={props.handleLastName}
                value={props.student.lastName}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Campus:</td>
            <td>
              <select onChange={props.handleCampus}>
                {props.campuses.map(campus => (
                  <option value={campus.id}>{campus.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>GPA:</td>
            <td>
              <input type="number" onChange={props.handleGPA}></input>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="text" onChange={props.handleEmail}></input>
            </td>
          </tr>
          <tr>
            <td>Image:</td>
            <td>
              <input type="text" onChange={props.handleImage}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn1" id="one" onClick={props.handleSubmission}>
        Submit
      </button>
    </div>
  );
}
