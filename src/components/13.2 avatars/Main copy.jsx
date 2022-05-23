import React, { Component } from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Input from "./Input";
import MappingAvatars from "./MappingAvatars";
//https://randomuser.me/api/?results=10
export default class Exercise14_2 extends Component {
  state = { avatarsArr: [], userInput: "" };

  //? 1) constructor create reactElement
  //? 2) render the reactElement to the real DOM
  //? 3) componentDidMount - component did mount to the real dom?

  async componentDidMount() {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      //? name
      //? last
      //? img
      //? cell
      const relevantData = data.results.map((avatarObj) => {
        return {
          id: avatarObj.cell,
          img: avatarObj.picture.large,
          firstName: avatarObj.name.first,
          lastName: avatarObj.name.last,
        };
      });
      this.setState({ avatarsArr: relevantData });
    } catch (e) {
      console.log(e);
    }
  }
  //   insertAvatars = () => {
  //     return this.state.avatarsArr.map((avatar) => (
  //       <Avatar
  //         key={avatar.id}
  //         imgUrl={avatar.img}
  //         firstName={avatar.firstName}
  //         lastName={avatar.lastName}
  //       />
  //     ));
  //   };
  render() {
    return (
      <>
        <Input
          userInput={this.state.userInput}
          onInputChange={({ target }) => {
            this.setState({ userInput: target.value });
          }}
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <MappingAvatars
            avatarsArr={this.state.avatarsArr}
            userInput={this.state.userInput}
          />
        </div>
      </>
    );
  }
}
