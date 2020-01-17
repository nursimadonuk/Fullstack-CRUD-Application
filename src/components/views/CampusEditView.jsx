import React from "react";

export default function CampusEditView(props) {
  return (
    <div>
      <img src={props.image} style={({width: "150px", height: "150px"})} alt="preview" />
      <table className="form">
        <tbody>
          <tr>
            <td>College Name:</td>
            <td>
              <input
                type="text"
                onChange={props.handleName}
                value={props.initValues.name}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              <input
                type="text"
                onChange={props.handleAddress}
                value={props.initValues.address}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea onChange={props.handleDescription} value={props.initValues.description} />
            </td>
          </tr>
          <tr>
            <td>Image:</td>
            <td>
              <input type="text" onChange={props.handleImage} value={props.initValues.image}></input>
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
