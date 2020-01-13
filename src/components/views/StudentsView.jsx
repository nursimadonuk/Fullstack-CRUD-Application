import React from "react";
import { NavbarContainer, StudentContainer } from "../containers";

export default function StudentsView(props) {
  return (
    <div>
      <NavbarContainer />
      Students Comp <br />
      <br />
      <StudentContainer />
      <br />
      <StudentContainer />
      <br />
      <StudentContainer />
    </div>
  );
}
