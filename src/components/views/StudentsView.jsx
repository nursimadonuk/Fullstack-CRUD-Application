import React from "react";
import { NavbarContainer, StudentContainer } from "../containers";

export default function StudentsView(props) {
  let elems = [
    {
      id: 0,
      name: "Xing Tao Shi",
      campus: "Hunter College",
      GPA: "3.95",
      email: "xshi603@gmail.com",
      image: "https://i.ya-webdesign.com/images/no-avatar-png-1.png"
    },
    {
      id: 1,
      name: "Khinshan Khan",
      campus: "Hunter College",
      GPA: "4.00",
      email: "kkhan@gmail.com",
      image: "https://i.ya-webdesign.com/images/no-avatar-png-1.png"
    }
  ];

  let results = elems.map(element => <StudentContainer student={element} />);
  return (
    <div>
      <NavbarContainer /> <br />
      {results}
    </div>
  );
}
