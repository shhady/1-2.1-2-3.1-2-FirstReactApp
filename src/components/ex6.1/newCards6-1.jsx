import { render } from "@testing-library/react";
import React, { createFactory } from "react";
import ReactDOM from "react-dom";
import Exercise6 from "./myApp";


class Exercise6_1 extends React.Component {
  render() {
    return (
      <div>
        <Exercise6  randomTitle="Tel Aviv" randomDescription="beach Sunset" img="https://live.staticflickr.com/8480/8234915413_206f490d28_b.jpg" /> <br></br>
        <Exercise6  randomTitle="Egypt" randomDescription = "mount sunset" img="https://t4.ftcdn.net/jpg/02/20/31/07/360_F_220310717_k5r7VeMVxmHBS6aab7qSzOh44bJBDcDo.jpg"/><br></br>
        <Exercise6  randomTitle="Lituania" randomDescription = "Autumn" img="https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg"/>
      </div>
    );
  }
}
export default Exercise6_1;

