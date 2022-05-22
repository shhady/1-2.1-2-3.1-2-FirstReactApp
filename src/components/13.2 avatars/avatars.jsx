import React from "react";
 import axios from "axios";
 import "./style.css"
class Exercise13_2 extends React.Component {
    state = {profiles: [], isSpinning: true, inputVal: undefined}

    async componentDidMount(){
        
        const people = await axios.get('https://randomuser.me/api/?results=50');
        this.setState({profiles: people.data.results})
        }
     getInputValue(value) {
         this.setState({inputVal: value})
         console.log(this.state.inputVal)
     }

    render() {
      return (
         <div>
           <label>Search</label><Input handleInput={this.getInputValue}/>
           {/* <Cards people={this.state.profiles}/> */}
           <Filter inputSearch={this.state.inputVal} people={this.state.profiles} />
        </div>
      
      );
    }
  }

   
  function Input(props){
    return (
        <input type="text" onChange={(e)=>{
            props.handleInput(e.target.value);
        }}></input>
    )
  }

  function Filter(props){
return(
    <div className="main">
        {props.people.map((person, idx)=>{
            if ((person.name.first + person.name.last).toLowerCase().includes(props.inputSearch))
            return (
                <div key={idx} className="card">
                    <div>{`${person.name.first} ${person.name.last}`}</div>
                    <img src={person.picture.large} alt="nothing"></img>
                </div>
            )
        } )
        }
    </div>
)
  }
  export default Exercise13_2;
  