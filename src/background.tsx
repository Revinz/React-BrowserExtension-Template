import HelloWorld from "./HelloWorld";
import React from "react";
import ReactDOM from "react-dom";

const app = document.createElement("div");
document.body.appendChild(app);
ReactDOM.render(<HelloWorld />, app);
