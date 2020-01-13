import React from "react";
import { NavbarContainer, CampusContainer } from "../containers";

export default function CampusesView(props) {
  return (
    <div>
      <NavbarContainer />
      Campus Comp <br />
      <br />
      <CampusContainer />
      <br />
      <CampusContainer />
      <br />
      <CampusContainer />
    </div>
  );
}
