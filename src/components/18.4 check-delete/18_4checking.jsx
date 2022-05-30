import { useState } from "react";

const arr = ["one", "two", "three", "four"];

const Exercise18_4 = () => {
  const [checked, setChecked] = useState(new Array(arr.length).fill(false));
  const [labels, setLabels] = useState(arr);
  const handleCheck = (idx) => {
    const newChecked = [...checked];
    newChecked[idx] = !newChecked[idx];
    setChecked(newChecked);
  };

  const handleDelete = () => {
    const newLabels = labels.filter((label, idx) => {
      return !checked[idx];
    });
    setLabels(newLabels);
    setChecked(new Array(newLabels.length).fill(false));
  };

  const handleReset = () => {
    setLabels(arr);
    setChecked(new Array(arr.length).fill(false));
  };
  // const handleChange = (event) => {
  //   if (event.target.checked) {
  //     console.log("Checkbox is checked");
  //   } else {
  //     console.log("Checkbox is NOT checked");
  //   }
  //   setIsChecked((current) => !current);
  // };

  // const DeleteItems = () => {
  //   console.log(IsChecked);
  // };
  // const newArr = arr.map((number) => {
  //   return (
  //     <div key={number}>
  //       <input type="checkbox" onChange={handleCheck} />
  //       {number}
  //     </div>
  //   );
  // });
  const createCheckboxes = () => {
    return labels.map((element, idx) => {
      return (
        <li key={element + idx}>
          <input
            onChange={() => handleCheck(idx)}
            id={element}
            type="checkbox"
            checked={checked[idx]}
          />
          <label htmlFor={element}>{element}</label>
        </li>
      );
    });
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {createCheckboxes()}
    </div>
  );
};

export default Exercise18_4;
