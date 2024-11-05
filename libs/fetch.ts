import axios from "axios";

export const fetch = axios.create({
  baseURL: "http://217.15.164.23:4000",
});
