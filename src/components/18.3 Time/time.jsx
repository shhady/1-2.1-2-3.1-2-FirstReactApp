import { useState } from "react";

function Exercise18_3() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSeconds = ({ target: { value } }) => {
    setSeconds(value);
    setMinutes(value / 60);
    setHours(value / 3600);
  };
  const handleMinutes = ({ target: { value } }) => {
    setSeconds(value * 60);
    setMinutes(value);
    setHours(value / 60);
  };
  const handleHours = ({ target: { value } }) => {
    setHours(value);
    setSeconds(value * 3600);
    setMinutes(value * 60);
  };
  return (
    <>
      <div>
        <span>Seconds</span>
        <input type="number" onChange={handleSeconds} value={seconds} />
      </div>
      <div>
        <span>Minutes</span>
        <input type="number" onChange={handleMinutes} value={minutes} />
      </div>
      <div>
        <span>Hours</span>
        <input type="number" onChange={handleHours} value={hours} />
      </div>
    </>
  );
}

export default Exercise18_3;
