// import React from "react";
// import "./style.css";

// const todoList = [
//   { do: "Meditation", id: 1 },
//   { do: "Sport", id: 2 },
//   { do: "Study", id: 3 },
//   { do: "Eat", id: 4 },
//   { do: "Walk", id: 5 },
// ];
// class Todo extends React.Component {
//   state = { arrOfToDo: [] };

//   componentDidMount() {
//     this.setState({ arrOfToDo: todoList });
//   }

//   AddTaskToTasks(e) {
//     e.preventDefault();
//   }
//   handleDelete = (id) => {
//     this.setState((prevState) => {
//       //? remove the specified obj from the arrOfObj state by filtering
//       const arrOfObjAfterDelete = prevState.arrOfToDo.filter(
//         (obj) => obj.id !== id
//       );
//       return { arrOfToDo: arrOfObjAfterDelete };
//     });
//   };
//   render() {
//     return (
//       <div className="toDoContainer">
//         <form>
//           <input type="text" onChange={this.AddTaskToTasks}></input>
//           <button onClick={this.AddTaskToTasks}>Add Task</button>
//         </form>
//         <div>
//         {props.myProp.map((element) => {
//         return (
//           <div key={element.id} className="eachTodo">
//             Do: {element.do} <input className="inputUpdate"></input>
//             <button className="deletebtn" onclick={this.handleDelete}>
//               Delete
//             </button>
//             <button>Update</button>
//           </div>
//         );
//       })}
//       </div>
//     );
//   }
// }

// function Child(props) {
//   return (
//     <div>
//       {props.myProp.map((element) => {
//         return (
//           <div key={element.id} className="eachTodo">
//             Do: {element.do} <input className="inputUpdate"></input>
//             <button className="deletebtn" onclick={this.handleDelete}>
//               Delete
//             </button>
//             <button>Update</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Todo;
