import React from "react";




class Exercise8_1 extends React.Component {
    state = {favoriteColor : "blue"}
    componentDidMount(){
            // this.setState({ favoriteColor: "red" })
            setTimeout(() =>{
                this.setState({newfavoriteColor: "red"},()=>{
                    document.getElementById("newText").textContent = `The updated favorite color is  ${this.state.newfavoriteColor}`
                })
               
            },3000)
        }
    
   
  
    render() {
      return (
        <div>   
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <div id="newText"></div>
            {/* <div id="newText">My favorite color is {this.state.favoriteColor}</div> */}
        </div>
      );
    }
  }
  export default Exercise8_1;
  