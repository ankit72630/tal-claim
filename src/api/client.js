// src/api/client.js
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",    // <— point to FastAPI
  timeout: 10000,
});

export default client;