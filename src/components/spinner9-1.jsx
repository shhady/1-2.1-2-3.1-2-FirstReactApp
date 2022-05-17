import React from "react";
import "./style.css"



class Exercise9_1 extends React.Component {
    state = {isHidden: false, spinnershow: true}
    componentDidMount(){
            setTimeout(() =>{
                this.setState({isHidden: true , spinnershow: false});
            },5000)
        }

    render() {
      return (
        <div>  
            <div>
              {this.state.isHidden && <img className="image"src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt=""/>}
            </div>
            <div>{
                this.state.spinnershow &&  <div className ="spinner">
                                            <div className="loader">
                                             <div id="balls_container">
                                               <div class="ball"></div>
                                               <div class="ball"></div>
                                                  <div class="ball"></div>
                                                 </div>
                                                  <span>Loading...</span>
                                                </div>
                                                </div>
                } 
            </div>
            </div>  
      
      );
    }
  }
  export default Exercise9_1;
  