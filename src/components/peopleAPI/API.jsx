import axios from "axios";

const playersAPI = axios.create({
  baseURL: "https://628e674e368687f3e71667e9.mockapi.io/team",
});

export default playersAPI;
