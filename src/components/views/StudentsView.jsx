import React from "react";
import { NavbarContainer, StudentContainer } from "../containers";

export default function StudentsView(props) {
  return (
    <div>
      <NavbarContainer />
      <br />
      <StudentContainer />
      <br />
      <StudentContainer />
      <br />
      <StudentContainer />
    </div>
  );
}
