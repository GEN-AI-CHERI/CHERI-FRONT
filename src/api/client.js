import axios from "axios";

const client = axios.create();
client.defaults.baseURL = `${process.env.REACT_APP_CHERI_API}`;
client.defaults.withCredentials = false;

const token = localStorage.getItem("cheritoken");

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;
