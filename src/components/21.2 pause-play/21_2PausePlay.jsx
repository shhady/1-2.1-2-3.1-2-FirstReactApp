import React, { useRef } from "react";

const Exercise21_2 = () => {
  const play = useRef();

  const playVideo = () => {
    // @ts-ignore
    play.current.play();
  };
  const pauseVideo = () => {
    // @ts-ignore
    play.current.pause();
  };
  return (
    <div>
      <video width="550" height="300" controls ref={play}>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
};
export default Exercise21_2;
