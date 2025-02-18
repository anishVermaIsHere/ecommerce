import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppConfig from "./config/app.config";

document.title = AppConfig.appName;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
