import React from "react";
import "./style.css"



class Exercise8_2 extends React.Component {
    state = {isHidden: false}
    componentDidMount(){
            setTimeout(() =>{
                this.setState({isHidden: true})
            },1000)
        }
        componentWillUnmount(){
            setTimeout(() =>{
                this.setState({isHidden: false})
            },5000)
        }

    render() {
      return (
        <div>  
            {this.state.isHidden &&  <div id="box"></div>}<br></br>
            {this.state.isHidden &&  <div id="box1"></div>}<br></br>
            {this.state.isHidden &&  <div id="box2"></div>}

        </div>
      );
    }
  }
  export default Exercise8_2;
  