import axios from "axios";

const client = axios.create();
client.defaults.baseURL = `${process.env.REACT_APP_CHERI_API}`;
client.defaults.withCredentials = false;

const token = localStorage.getItem("cheritoken");
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;
