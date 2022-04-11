import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9090/api/mechanics/",
  headers: {
    "Content-Type": "application/json",
  },
});
