import React, { useEffect, useRef, useState } from "react";

const Exercise21_1 = () => {
  const [input, setInput] = useState(false);
  // const [clicked, setClicked] = useState(true)
  const inputRef = useRef();

  function focusOnInput() {
    setInput((prev) => !prev);
  }
  useEffect(() => {
    if (input) {
      // @ts-ignore
      inputRef.current.focus();
    }
  }, [input]);

  function btnText() {
    if (input === true) {
      return "save";
    } else {
      return "edit";
    }
  }
  return (
    <div>
      {input && <input ref={inputRef} type="text" />}
      <button onClick={focusOnInput}>{btnText()}</button>
    </div>
  );
};
export default Exercise21_1;
