import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Correct TMDb API URL
});

export default instance;
