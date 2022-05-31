import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Exercise20_1 = () => {
  const [countries, setCountries] = useState([]);
  const [showData, setShowData] = useState(true);

  useEffect(() => {
    // const controller = new AbortController();
    const source = axios.CancelToken.source();
    (async () => {
      const data = await axios.get("https://restcountries.com/v3.1/all", {
        // signal: controller.signal,
        cancelToken: source.token,
      });
      setCountries(data.data);
      return countries;
    })();
    return () => {
      console.log("cleanUp");
      //   controller.abort();
      source.cancel();
    };
  }, []);
  const insertData = () => {
    return countries.map((country) => {
      return <span key={country.name.common}>{country.name.common}</span>;
    });
  };

  return (
    <div>
      <button onClick={() => setShowData(!showData)}>Show/Hide</button>
      <div>{showData && insertData()}</div>
    </div>
  );
};
export default Exercise20_1;
