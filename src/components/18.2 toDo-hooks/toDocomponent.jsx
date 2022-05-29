import React, { useState } from "react";

const Exercise18_2 = () => {
  const [data, setData] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  const handleTodo = (index) => {
    setData((prev) =>
      prev.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const insertData = () => {
    return data.map((todo, index) => {
      return (
        <div key={todo.name}>
          {todo.name}
          <span onClick={() => handleTodo(index)}>
            {todo.completed ? <>&#10003; </> : <>&#10060;</>}
          </span>
        </div>
      );
    });
  };
  return <div>{insertData()}</div>;
};

export default Exercise18_2;
