import { render } from "@testing-library/react";
import React, { createFactory } from "react";
import ReactDOM from "react-dom";


class Exercise7_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    handleCount = () => {
        this.setState({count: this.state.count + 1})
      };

  render() {
    return (
      <div>
           <button onClick={this.handleCount}>increment</button>
          <label>{this.state.count}</label>
      </div>
    );
  }
}
export default Exercise7_1;
