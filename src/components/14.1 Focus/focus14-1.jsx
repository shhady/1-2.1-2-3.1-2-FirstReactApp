import React from "react";

class Exercise14_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <label>Focus on input</label>
        <input ref={this.textInput}></input>
      </div>
    );
  }
}
export default Exercise14_1;
