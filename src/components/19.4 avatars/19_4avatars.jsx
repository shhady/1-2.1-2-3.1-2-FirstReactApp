import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
const Exercise19_4 = () => {
  const [people, setPeople] = useState([]);
  const [term, setTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://randomuser.me/api/?results=20");
      setPeople(data.data.results);
      setFilteredPeople(data.data.results);
    };
    search();
  }, []);
  useEffect(() => {
    const filtered = people.filter((person) =>
      person.name.first.toLowerCase().includes(term)
    );
    setFilteredPeople(filtered);
    console.log(filtered);
  }, [term]);

  const paintData = () => {
    return filteredPeople.map((e) => {
      return (
        <div key={e.login.uuid}>
          <div style={{ border: "1px solid black", width: 150 }}>
            <div>
              <h5>
                {e.name.first} {e.name.last}
              </h5>
            </div>
            <img src={e.picture.medium} />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        placeholder="search"
      />
      <div className="container">{paintData()}</div>
    </div>
  );
};
export default Exercise19_4;
