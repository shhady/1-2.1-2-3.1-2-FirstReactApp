import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
function MyApp (props){
    console.log(props)
    return (
        <div style={{border:"1px solid black", width:400, height:400, marginLeft: 100}}>
            <div style = {{width:400}}>
                <img src={props.img} alt="nothing" width="100%" height="300"/>
            </div>
            <div>
                {props.randomTitle}
            </div>
            <div>
                {props.randomDescription}
            </div>
            <div>
                <button>Share</button>
                <button>Explore</button>

            </div>
        </div>

    )
}
class Exercise4_2 extends React.Component {
  render() {
    return (
      <div>
        <MyApp  randomTitle="Tel Aviv" randomDescription="beach Sunset" img="https://live.staticflickr.com/8480/8234915413_206f490d28_b.jpg" /> <br></br>
        <MyApp  randomTitle="Egypt" randomDescription = "mount sunset" img="https://t4.ftcdn.net/jpg/02/20/31/07/360_F_220310717_k5r7VeMVxmHBS6aab7qSzOh44bJBDcDo.jpg"/><br></br>
        <MyApp  randomTitle="Lituania" randomDescription = "Autumn" img="https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg"/>
      </div>
    );
  }
}
export default Exercise4_2;

