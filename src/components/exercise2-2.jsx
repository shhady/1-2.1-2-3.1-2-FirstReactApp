import { render } from "@testing-library/react";
import React from "react"
import ReactDOM from "react-dom"
// class Exercise2_2 extends React.Component {
//   render() {
//     return (
//         return (
//             <App />
//         )
//   );
// }

// }
const data = ["Hello", "World"]
function arrJoin (){
    return data.join(" ")
}

const number1 = 5;
const number2 =6;
function sum (){
    return  number1 + number2
}

const string = "I love React!";
function stringLength(){
    return string.length;
}

class Exercise2 extends React.Component {
    render() {
        return( 
            <div>
                {/* {arrJoin()} */}
                {/* {number1} + {number2} = {sum()} */}
                The string's length is {stringLength()} 
             </div>
        )
    }
}
export default Exercise2;

ReactDOM.render(<exercise2-2/>, document.querySelector("#root"));

