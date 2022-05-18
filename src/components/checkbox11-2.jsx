import React from "react";

const Checkbox= (props)=>{
    return (
        <div>
            <form style= {{display: 'flex', flexDirection: 'column'}}>
                <div> <input type="checkbox"></input><label> I read the term of the app</label></div>
                <div><input type="checkbox"></input><span>I accept the term of the app</span></div> 
                <div><input type="checkbox" defaultChecked={'checked'}></input><span>I want to get the weekly news letter</span></div> 
                <div> <input type="checkbox" defaultChecked={'checked'}></input> <span>I want to get sales and offers</span></div>
            </form>
        </div>
    )
}

class Exercise11_2 extends React.Component {
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
  export default Exercise11_2;
  