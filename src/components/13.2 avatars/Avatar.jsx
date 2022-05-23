import React from "react";

function Avatar({ firstName, lastName, imgUrl }) {
  return (
    <div
      style={{ border: "1px solid black", margin: "1rem", padding: "0.2rem" }}
    >
      <h5>
        {firstName} {lastName}
      </h5>
      <img alt="#" src={imgUrl} />
    </div>
  );
}

export default Avatar;
