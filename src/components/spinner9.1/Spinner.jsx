
import React from "react";
import './style1.css';

const Spinner = (props)=> {
    return (
        <div className ="spinner">
             <div className="loader">
                 <div id="balls_container">
                         <div class="ball"></div>
                         <div class="ball"></div>
                         <div class="ball"></div>
                 </div>
             <span>{props.message}</span>
            </div>
        </div>
    )
}

export default Spinner;