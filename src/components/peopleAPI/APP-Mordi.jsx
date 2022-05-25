import axios from "axios";
import React, { Component } from "react";
import Person from "./components/person/Person";
import { API } from "./api/personApi";
//* CRUD

//? API to work with

//* HTTP requests
//? GET - Read - get data from server
//? POST - Create - Send something to server
//? DELETE - Delete something from server
//? PUT - Update - update some data on server

export default class App extends Component {
  state = { peopleArr: [], newUserName: "", newUserImg: "", isSpinning: true };

  //? GET
  async componentDidMount() {
    try {
      const { data } = await API.get("/people");
      this.setState(
        { peopleArr: data, isSpinning: false }
        //    () => {
        //   console.log(this.state.peopleArr);
        // }
      );
    } catch (e) {
      console.log(e);
    }
  }

  //? POST
  handleCreate = async () => {
    this.setState({ isSpinning: true });
    const newPerson = {
      name: this.state.newUserName,
      img: this.state.newUserImg,
    };
    try {
      const postedData = await axios.post(
        "https://628e25fba339dfef87a87ada.mockapi.io/people",
        newPerson
      );
      this.setState((prev) => {
        return {
          peopleArr: [...prev.peopleArr, postedData.data],
          newUserName: "",
          newUserImg: "",
          isSpinning: false,
        };
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  //? DELETE
  handleDelete = async (id) => {
    this.setState({ isSpinning: true });
    try {
      await axios.delete(
        `https://628e25fba339dfef87a87ada.mockapi.io/people/${id}`
      );
      this.setState((prev) => {
        const newPeopleArr = prev.peopleArr.filter((p) => p.id !== id);
        return { peopleArr: newPeopleArr, isSpinning: false };
      });
    } catch (e) {
      console.log(e);
    }
  };

  //? PUT
  handleUpdate = async (id, newName) => {
    this.setState({ isSpinning: true });
    const personToUpdate = this.state.peopleArr.find(
      (person) => person.id === id
    );
    const updatedPerson = { ...personToUpdate, name: newName };
    const { data } = await axios.put(
      `https://628e25fba339dfef87a87ada.mockapi.io/people/${id}`,
      updatedPerson
    );
    this.setState((prev) => {
      return {
        peopleArr: prev.peopleArr.map((person) => {
          if (person.id === id) {
            return data;
          }
          return person;
        }),
        isSpinning: false,
      };
    });
  };

  //?UI
  paintPeople = () => {
    return this.state.peopleArr.map(({ name, img, id }) => {
      return (
        <Person
          key={id}
          name={name}
          img={img}
          id={id}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      );
    });
  };
  handleInputChange = ({ target }) => {
    this.setState({ [target.id]: target.value, isSpinning: false });
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.isSpinning ? (
          <h1>Spinner</h1>
        ) : (
          <>
            <input
              id="newUserName"
              onChange={this.handleInputChange}
              value={this.state.newUserName}
              placeholder="New user name"
            />
            <input
              id="newUserImg"
              onChange={this.handleInputChange}
              value={this.state.newUserImg}
              placeholder="New user image"
            />
            <button onClick={this.handleCreate}>Create</button>
            <div className="item-wrapper">{this.paintPeople()}</div>
          </>
        )}
      </div>
    );
  }
}
