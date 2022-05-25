import React, { Component } from 'react';

export default class Item extends Component {
  state = { title: '' };
  handleOnChange = ({ target }) => {
    this.setState({ title: target.value });
  };
  render() {
    return (
      <div
        className='item'
        // style={{
        //   border: '1px solid black',
        //   margin: '0.5rem',
        //   padding: '0.5rem',
        // }}
      >
        <input onChange={this.handleOnChange} value={this.state.title} />
        <button
          onClick={() =>
            this.props.handleUpdate(this.props.id, this.state.title)
          }
        >
          Update
        </button>
        <button onClick={() => this.props.handleDelete(this.props.id)}>
          Delete
        </button>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
