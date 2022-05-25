import { Component } from "react";
import Item from "./components/item/Item";
import { data } from "./constants/fakeDate";
//* CRUD
//? Create
//? Read
//? Update
//? Deletes

export default class MainApp extends Component {
  state = { arrOfObj: [], itemTitleValue: "" };

  //! CREATE
  handleCreate = () => {
    const newItem = {
      title: this.state.itemTitleValue,
      id: Math.random().toString(),
    };
    this.setState((prev) => {
      return { arrOfObj: [...prev.arrOfObj, newItem], itemTitleValue: "" };
    });
  };

  //! READ
  componentDidMount() {
    this.setState({ arrOfObj: data });
  }

  //! UPDATE
  handleUpdate = (id, title) => {
    this.setState((prevState) => {
      const arrOfObjAfterDelete = prevState.arrOfObj.map((obj) => {
        if (obj.id === id) {
          return { id, title };
        } else {
          return obj;
        }
      });
      return { arrOfObj: arrOfObjAfterDelete };
    });
  };

  //! DELETE
  handleDelete = (id) => {
    this.setState((prevState) => {
      //? remove the specified obj from the arrOfObj state by filtering
      const arrOfObjAfterDelete = prevState.arrOfObj.filter(
        (obj) => obj.id !== id
      );
      return { arrOfObj: arrOfObjAfterDelete };
    });
  };

  //? Controlled add item input
  handleOnChange = ({ target }) => {
    this.setState({ itemTitleValue: target.value });
  };

  //? Painting data on the screen by calling Item component
  insertData = () => {
    return this.state.arrOfObj.map((obj) => (
      <Item
        handleUpdate={this.handleUpdate}
        handleDelete={this.handleDelete}
        key={obj.title}
        title={obj.title}
        id={obj.id}
      />
    ));
  };
  render() {
    return (
      <div className="wrapper">
        <label>Add Item</label>
        <input
          value={this.state.itemTitleValue}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleCreate}>Add</button>
        <div className="item-wrapper">{this.insertData()}</div>
      </div>
    );
  }
}
