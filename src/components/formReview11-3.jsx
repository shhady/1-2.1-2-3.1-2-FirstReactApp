import React from "react";

const Checkbox= (props)=>{
    return (
        <div>
            <form style= {{display: 'flex', flexDirection: 'column'}}>
                <div><label> First Name: </label> <input type="input"></input></div>
                <div><label> Last Name: </label> <input type="input"></input></div> 
                <div><input type="checkbox" defaultChecked={'checked'}></input><span>I want to get the weekly news letter</span></div> 
                <div><label> Free Text: </label> <input type="text"></input></div> 
            </form>
        </div>
    )
}

class Exercise11_3 extends React.Component {
    // state = {checked : true}
   
    //   handleClick = (event) => {
    //     this.setState({favoriteColor: event.target.innerText})
    // }
    
        
    render() {
      return (
        <div>
        <Checkbox />
        </div>
      );
    }
  }
  export default Exercise11_3;
  