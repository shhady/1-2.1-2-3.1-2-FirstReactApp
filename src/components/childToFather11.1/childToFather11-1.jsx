import React from "react";

const colors = ["red", "green", "yellow"];

class Exercise11_1 extends React.Component {
  state = { favoriteColor: "blue" };

  handleClick = (event) => {
    this.setState({ favoriteColor: event.target.innerText });
  };

  render() {
    return (
      <div>
        {/* <Func /> */}
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: colors[0] }}
        >
          {colors[0]}
        </button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: colors[1] }}
        >
          {colors[1]}
        </button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: colors[2] }}
        >
          {colors[2]}
        </button>
        <h1>My favorite color is: {this.state.favoriteColor}</h1>
      </div>
    );
  }
}
export default Exercise11_1;
