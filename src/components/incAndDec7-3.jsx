import { render } from "@testing-library/react";
import React, { createFactory } from "react";
import ReactDOM from "react-dom";


class Exercise7_3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: 0, color: 'black' };
    }
    handleCount = () => {
        if (this.state.val === 10) return;
        let newColor = this.state.color;
        if (this.state.val === 0) newColor = "green";
        if (this.state.val === -1) newColor = "black";
        this.setState({ val: this.state.val + 1, color: newColor });
      };
      handleCount1 = () => {
        if (this.state.val === -10) return;
    let newColor = this.state.color;
    if (this.state.val === 0) newColor = "red";
    if (this.state.val === 1) newColor = "black";
    this.setState({ val: this.state.val - 1, color: newColor });
  };



  render() {
    return (
      <div>
           <button onClick={this.handleCount}>increment</button>
           <button onClick={this.handleCount1}>decrement</button>
          <label style={{color:this.state.color}}>{this.state.val}</label>
      </div>
    );
  }
}
export default Exercise7_3;
