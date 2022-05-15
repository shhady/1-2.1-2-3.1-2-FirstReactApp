import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";



class Exercise3 extends React.Component {
  render() {
    return (
      <div className="box1" style={{backgroundColor: "green", width: 400, height:400, display: "flex", justifyContent: "center", alignItems: "center" }}>
         <div className="box2" style={{backgroundColor: "blue", width: 300, height:300, display: "flex", justifyContent: "center", alignItems: "center"}}>
         <div className="box3" style={{backgroundColor: "pink", width: 200, height:200, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "2rem"}}>
           <div className="box4" style={{backgroundColor: "purple", width: 100, height:50}}></div>
           <div className="box5" style={{backgroundColor: "purple", width: 100, height:50}}></div>
         </div>
         </div>
      </div>
    );
  }
}
export default Exercise3;

ReactDOM.render(<exercise3-1 />, document.querySelector("#root"));
