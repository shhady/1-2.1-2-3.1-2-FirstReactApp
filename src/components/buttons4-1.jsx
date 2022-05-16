import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";


function MyApp (props){
    console.log(props)
    return (
        <div>
            <button style={{fontWeight:props.font}}>{props.name}</button>
        </div>

    )
}
class Exercise4_1 extends React.Component {
  render() {
    return (
      <div>
        <MyApp name="bold" font="bold"/>
        <MyApp name="regular"/> 
      </div>
    );
  }
}
export default Exercise4_1;

