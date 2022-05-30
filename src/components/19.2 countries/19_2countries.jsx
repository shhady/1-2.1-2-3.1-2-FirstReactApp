import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Exercise19_2 = () => {
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState("all");
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    const search = async () => {
      const data = await axios.get(`https://restcountries.com/v3.1/all`);
      setCountries(data.data);
      setFilteredCountries(data.data);
    };
    search();
  }, []);
  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term)
    );
    setFilteredCountries(filtered);
    console.log(filtered);
  }, [term]);
  const renderedCountries = () => {
    return filteredCountries.map((country) => {
      return <li key={country.name.common}>{country.name.common}</li>;
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setTerm(e.target.value)} />
      <div>{renderedCountries()}</div>
    </div>
  );
};
export default Exercise19_2;
