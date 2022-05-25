import React from "react";
import axios from "axios";
import Player from "./Player";
import playersAPI from "./API";
import "./style.css";
class MainAPI extends React.Component {
  state = { players: [], newPlayer: "", playerimage: "" };

  async componentDidMount() {
    const data = await playersAPI.get("/");
    this.setState({ players: data.data }, () => {
      console.log(this.state.players);
    });
  }
  paintOnScreen = () => {
    return this.state.players.map(({ name, img, id }) => {
      return (
        <Player
          name={name}
          img={img}
          id={id}
          key={id}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          //   addPlayerToTeam={this.addPlayerToTeam}
        />
      );
    });
  };

  handleMainInput = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  handleCreatePlayer = async () => {
    const newPlayer = {
      name: this.state.newPlayer,
      img: this.state.playerimage,
    };
    try {
      const newPostedData = await axios.post(
        "https://628e674e368687f3e71667e9.mockapi.io/team",
        newPlayer
      );
      this.setState((prev) => {
        return {
          players: [...prev.players, newPostedData.data],
          newPlayer: "",
          playerimage: "",
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://628e674e368687f3e71667e9.mockapi.io/team/${id}`
      );
      this.setState((prev) => {
        const newPlayersArr = prev.players.filter((p) => p.id !== id);
        return { players: newPlayersArr };
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleUpdate = async (id, newName) => {
    const personToUpdate = this.state.players.find(
      (person) => person.id === id
    );
    const updatedPerson = { ...personToUpdate, name: newName };
    const { data } = await axios.put(
      `https://628e25fba339dfef87a87ada.mockapi.io/people/${id}`,
      updatedPerson
    );
    this.setState((prev) => {
      return {
        players: prev.players.map((person) => {
          if (person.id === id) {
            return data;
          }
          return person;
        }),
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            id="newPlayer"
            onChange={this.handleMainInput}
            value={this.state.newPlayer}
            placeholder="New user name"
          />
          <input
            id="playerimage"
            onChange={this.handleMainInput}
            value={this.state.playerimage}
            placeholder="New user image"
          />

          <button onClick={this.handleCreatePlayer}>Add Player</button>
        </div>
        <div className="Container">{this.paintOnScreen()}</div>;
      </div>
    );
  }
}

export default MainAPI;
