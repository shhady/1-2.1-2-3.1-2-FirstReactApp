// import React, { Component } from "react";
// import axios from "axios";
// import Avatar from "./Avatar";
// import Input from "./Input";
// import MappingAvatars from "./MappingAvatars";
// //https://randomuser.me/api/?results=10
// export default class Main extends Component {
//   state = { avatarsArr: [], userInput: "" };

//   //? 1) constructor create reactElement
//   //? 2) render the reactElement to the real DOM
//   //? 3) componentDidMount - component did mount to the real dom?

//   getAvatar = () => {};
//   async componentDidMount() {
//     const arr = [];
//     for (let i = 0; i < 10; i++) {
//       const f = axios.get("https://api.ipstack.com/134.201.250.155");
//       arr.push(f);
//     }

//     console.log(await Promise.all(arr));
//   }
//   //   insertAvatars = () => {
//   //     return this.state.avatarsArr.map((avatar) => (
//   //       <Avatar
//   //         key={avatar.id}
//   //         imgUrl={avatar.img}
//   //         firstName={avatar.firstName}
//   //         lastName={avatar.lastName}
//   //       />
//   //     ));
//   //   };
//   render() {
//     return (
//       <>
//         <Input
//           userInput={this.state.userInput}
//           onInputChange={({ target }) => {
//             this.setState({ userInput: target.value });
//           }}
//         />
//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//           <MappingAvatars
//             avatarsArr={this.state.avatarsArr}
//             userInput={this.state.userInput}
//           />
//         </div>
//       </>
//     );
//   }
// }
