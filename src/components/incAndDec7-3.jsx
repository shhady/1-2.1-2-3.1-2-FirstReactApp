import { render } from "@testing-library/react";
import React, { createFactory } from "react";
import ReactDOM from "react-dom";


// class Exercise7_3 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0, color: 'black' };
//     }
//     handleCount = () => {
//         this.setState({count: this.state.count + 1})
//       };
//       handleCount1 = () => {
          
//         this.setState({count: this.state.count - 1})
//       };

//       changeDisplay = () =>{
          
//         if(this.state.count > 0){
//             this.setState({ color : "green" }); 
//         }
//         else if(this.state.count === 0){
//             this.setState({ color : "black" });
//         } else if(this.state.count < 0){
//             this.setState({ color : "red" });
//         } 
      
//     }


//   render() {
//     return (
//       <div>
//            <button onClick={this.handleCount}>increment</button>
//            <button onClick={this.handleCount1}>decrement</button>
//           <label style={{color: `${this.state.color}`}}>{this.state.count}</label>
//       </div>
//     );
//   }
// }



// import { render } from "@testing-library/react";
// import React, { createFactory } from "react";
// import ReactDOM from "react-dom";


// class Exercise7_3 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { val: 0, color: 'black' };
//     }
//     handleCount = () => {
//         if (this.state.val === 10) return;
//         let newColor = this.state.color;
//         if (this.state.val === 0) newColor = "green";
//         if (this.state.val === -1) newColor = "black";
//         this.setState({ val: this.state.val + 1, color: newColor });
//       };
//       handleCount1 = () => {
//         if (this.state.val === -10) return;
//     let newColor = this.state.color;
//     if (this.state.val === 0) newColor = "red";
//     if (this.state.val === 1) newColor = "black";
//     this.setState({ val: this.state.val - 1, color: newColor });
//   };



//   render() {
//     return (
//       <div>
//            <button onClick={this.handleCount}>increment</button>
//            <button onClick={this.handleCount1}>decrement</button>
//           <label style={{color:this.state.color}}>{this.state.val}</label>
//       </div>
//     );
//   }
// }


 class Ex7_3 extends React.Component {
  state = { num: 0, labelColor: 'black' };

  handleClick = ({ target: { id } }) => {
   
    this.setState((prevState) => {
      const bool = id === 'inc' ? prevState.num < 10 : prevState.num > -10;
      const addNum = id === 'inc' ? 1 : -1;
      return {
        num: bool ? prevState.num + addNum : prevState.num,
        labelColor:
          prevState.num + addNum === 0
            ? 'black'
            : prevState.num + addNum > 0
            ? 'green'
            : 'red',
      };
    });
  };
  //   handleIncrement = () => {
  //     this.setState(
  //       (prevState) => {
  //         return { num: prevState.num < 10 ? prevState.num + 1 : prevState.num };
  //       },
  //       () => {
  //         this.setLabelColor();
  //       }
  //     );
  //   };

  //   handleDecrement = () => {
  //     this.setState(
  //       (prevState) => {
  //         return { num: prevState.num > -10 ? prevState.num - 1 : prevState.num };
  //       },
  //       () => {
  //         this.setLabelColor();
  //       }
  //     );
  //   };

  //   setLabelColor = () => {
  //     return this.state.num === 0
  //       ? this.setState({ labelColor: 'black' })
  //       : this.state.num > 0
  //       ? this.setState({ labelColor: 'green' })
  //       : this.setState({ labelColor: 'red' });
  //   };

  render() {
    return (
      <div>
        <label
          className={`myLabel ${this.state.labelColor}`}
        >
          {this.state.num}
        </label>
        <button id='inc' onClick={this.handleClick}>
          Increment
        </button>
        <button id='dec' onClick={this.handleClick}>
          Decrement
        </button>
      </div>
    );
  }
}
export default Ex7_3;