import React from "react";

export default function StudentEditView(props) {
  return (
    <div>
      <img src={props.image} style={({width: "150px", height: "150px"})} alt="preview" />
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
              <select onChange={props.handleCampus} value={props.student.campus}>
                {props.campuses.map(campus => (
                  <option value={campus.id} key={campus.id}>{campus.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>GPA:</td>
            <td>
              <input type="number" onChange={props.handleGPA} value={props.student.GPA}></input>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="text" onChange={props.handleEmail} value={props.student.email}></input>
            </td>
          </tr>
          <tr>
            <td>Image:</td>
            <td>
              <input type="text" onChange={props.handleImage} value={props.student.image}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn1" id="one" onClick={props.handleSubmission}>
        Save
      </button>
    </div>
  );
}
