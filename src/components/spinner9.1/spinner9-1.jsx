import React from "react";
import "./style1.css"
import Spinner from "./Spinner"


class Exercise9_1 extends React.Component {
    state = {isHidden: false, spinnershow: true}
    componentDidMount(){
            setTimeout(() =>{
                this.setState({isHidden: true , spinnershow: false});
            },5000)
        }

    render() {
      return (
        <div>  {this.state.spinnershow && <Spinner />}
            <div>
              {this.state.isHidden && <img className="image"src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt=""/>}
            </div>
           
        </div>  
      
      );
    }
  }
  export default Exercise9_1;
  