import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const axios = require("axios").default;
axios.defaults.baseURL = "https://myapi.holycareschool.com/api";
// const userToken = localStorage.getItem("token");
// if (userToken) {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
