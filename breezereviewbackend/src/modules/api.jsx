import axios from "axios";

export default axios.create({
  baseURL: `https://apil.breezereview.com/api`,
  responseType: "json",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
