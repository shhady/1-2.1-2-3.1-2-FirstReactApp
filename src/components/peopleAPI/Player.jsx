import React from "react";
import "./style.css";
class Player extends React.Component {
  state = { value: "" };
  handleOnChange = ({ target }) => {
    this.setState({ value: target.value });
  };
  handleUpdateClick = () => {
    this.props.handleUpdate(this.props.id, this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <div>
        <div></div>
        <div className="playerClass">
          <h2>{this.props.name}</h2>
          <h2>{this.props.age}</h2>
          <img src={this.props.img} alt="#" />
          <div>
            <input onChange={this.handleOnChange} value={this.state.value} />
          </div>
          <div>
            <button onClick={() => this.props.handleDelete(this.props.id)}>
              DELETE
            </button>
            <button onClick={this.handleUpdateClick}>Update</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Player;
