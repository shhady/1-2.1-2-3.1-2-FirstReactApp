import React from "react";



class Exercise11_3 extends React.Component {
   state = {FirstName: "", LastName: "", Age: "", freeText: "", display: false, formDisplay: true , submit:"form submitted", submitShow: false}

    onFormSubmit = (event) => {
        event.preventDefault();
    }
    render() {
      return (
        <div>
       <div style={{marginTop: '2rem'}}>
       {this.state.formDisplay && 
            <form onSubmit={this.onFormSubmit} style= {{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems:'center'}}>
                <div><label> First Name: </label> <input type="input" value={this.state.FirstName} onChange={e=>this.setState({FirstName: e.target.value})}></input></div>
                <div><label> Last Name: </label> <input type="input" value={this.state.LastName} onChange={e=>this.setState({LastName: e.target.value})}></input></div> 
                <div>
                <label> Age: </label>
                    <select value={this.state.Age} onChange={e=>this.setState({Age: e.target.value})}>
                        <option value="0-15">0-15</option>
                        <option value="15-25">15-25</option>
                        <option value="25-40">25-40</option>
                        <option value="Over 40">Over 40</option>
                    </select>
                </div> 
                <div><label> Free Text: </label> <input type="text" value={this.state.freeText} onChange={e=>this.setState({freeText: e.target.value})}></input></div> 
                <div >
            <button onClick={e => this.setState({display: !this.state.display, formDisplay: !this.state.formDisplay, submitShow:this.state.submitShow})}>Continue</button>
            </div>
            </form>
    }
           

        <div>{this.state.display &&
            <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', marginTop:'2rem'}}>
                 <h3>FirstName: {this.state.FirstName}</h3>
                 <h3>LastName: {this.state.LastName}</h3>
                 <h3>Age: {this.state.Age}</h3>
                 <h3>freeText: {this.state.freeText}</h3>
                 <div>
                 <button onClick={e => this.setState({display: !this.state.display, formDisplay: !this.state.formDisplay, submitShow:!this.state.submitShow })}>Back</button>
                 <button onClick={e => this.setState({submitShow: true})}>Submit</button>
                 </div>

                 <div>
                    {this.state.submitShow && <h1 style={{color: 'red'}}>{this.state.submit}</h1>}
                 </div>
            </div>
             }
        </div>
        </div>
        </div>
      );
    }
  }
  export default Exercise11_3;
  