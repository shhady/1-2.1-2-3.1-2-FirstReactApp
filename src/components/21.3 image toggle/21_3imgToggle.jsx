import React, { useRef, useState } from "react";

const Exercise21_3 = () => {
  const displayRef = useRef("/images/img1.jpg");
  const display2 = useRef("/images/img2.jpg");

  const colors = () => {};
  return (
    <div style={{ display: "flex", gap: 20, marginLeft: "20%" }}>
      <img
        src={displayRef.current}
        // @ts-ignore
        ref={displayRef}
        alt="#"
        width="200"
        height="300"
        onMouseEnter={() => {
          // @ts-ignore
          displayRef.current.src = "/images/img1-black.jpg";
        }}
        onMouseLeave={() => {
          // @ts-ignore
          displayRef.current.src = "/images/img1.jpg";
        }}
      />
      <img
        // @ts-ignore
        ref={display2}
        src={display2.current}
        onMouseEnter={() => {
          // @ts-ignore
          display2.current.src = "/images/img2-black.jpg";
        }}
        onMouseLeave={() => {
          // @ts-ignore
          display2.current.src = "/images/img2.jpg";
        }}
        alt="#"
        width="200"
        height="300"
      />
    </div>
  );
};
export default Exercise21_3;
