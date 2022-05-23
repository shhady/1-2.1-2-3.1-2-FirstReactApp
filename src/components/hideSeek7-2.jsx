import React from "react";

class Exercise7_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "block" };
  }
  changeDisplay = () => {
    const value = this.state.display === "block" ? "none" : "block";
    this.setState({ display: value });
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          width: 300,
          height: 300,
          marginLeft: 100,
        }}
      >
        <button onClick={this.changeDisplay}>Hide/Show</button>
        <div
          style={{
            display: `${this.state.display}`,
            border: "1px solid black",
            width: 200,
            height: 200,
            backgroundColor: "yellow",
            margin: "auto",
          }}
        ></div>
      </div>
    );
  }
}
export default Exercise7_2;
