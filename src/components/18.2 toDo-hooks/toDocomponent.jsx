import React, { useState } from "react";

const ToDo = () => {
  const [data, setData] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  const onTitleClick = (index) => {
    setData(!data.completed[index]);
    // console.log(data[index]);
  };

  const returneditems = data.map((todo, index) => {
    return (
      <div key={todo.name} style={{ display: "flex" }}>
        <h1>{todo.name}</h1>
        <span>
          {" "}
          <button onClick={() => onTitleClick(index)}>X</button>
        </span>
      </div>
    );
  });
  return (
    <div>
      <div>{returneditems}</div>
    </div>
  );
};

export default ToDo;
