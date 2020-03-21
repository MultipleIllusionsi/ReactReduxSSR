import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

// make option for only CSR
ReactDOM.hydrate(<Home />, document.getElementById("root"));
