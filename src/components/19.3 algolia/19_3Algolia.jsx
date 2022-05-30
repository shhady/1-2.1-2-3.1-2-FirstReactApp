import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Exercise19_3 = () => {
  const [searchItems, setsearchItems] = useState([]);
  const [term, setTerm] = useState("hooks");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setTerm(input);
    setIsLoading(true);
  };

  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://hn.algolia.com/api/v1/search?", {
        params: {
          query: term,
        },
      });
      setsearchItems(data.data.hits);
      setIsLoading(false);
      console.log(data);
    };
    search();
  }, [term]);

  const insertData = () => {
    return searchItems.map((element) => {
      return (
        <li key={element.objectID}>
          <a href={element.url}>{element.title}</a>
        </li>
      );
    });
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <div>{isLoading && <h1>Loading...</h1>}</div>
      <div>{insertData()}</div>
    </div>
  );
};
export default Exercise19_3;
