import React from "react";

import { QuizTitle } from "./QuizTitle";
import { Q1 } from "./Q1";
import { Q1Input } from "./Range";
import { Q2 } from "./Q2";
import { Q2Input } from "./Input";

class Exercise4 extends React.Component {
  render() {
    return (
      <div
        className="Quiz"
        style={{
          width: 400,
          height: 400,
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <QuizTitle />
        <Q1 />
        <Q1Input />
        <Q2 />
        <Q2Input />
      </div>
    );
  }
}
export default Exercise4;

// ReactDOM.render(<exercise3-2 />, document.querySelector("#root"));
