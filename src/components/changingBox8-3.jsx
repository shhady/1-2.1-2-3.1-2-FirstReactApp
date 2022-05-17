import React from "react";
import "./style.css"



class Exercise8_3 extends React.Component {
    state = {backgroundColor: "red", count:1, borderRadius: 0}
    componentDidMount(){
            setTimeout(() =>{
                this.setState({backgroundColor: "green", count: this.state.count + 1})
            },1000)
        }
        componentDidUpdate(){
          setTimeout(() =>{
                this.setState({backgroundColor:this.generateRGBColor(), count: this.state.count + 1})
              if(this.state.count === 5){
                this.setState({borderRadius: "50%"})
              }
            },1000)
        }
        

        generateRGBColor(){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let val = `rgb(${r}, ${g}, ${b})`;
            return val;
        }
    render() {
      return (
        <div>  
            <div id="changingBox" style={{backgroundColor:`${this.state.backgroundColor}`, borderRadius:`${this.state.borderRadius}`}}></div>

        </div>
      );
    }
  }
  export default Exercise8_3;
  