import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import "font-awesome/css/font-awesome.css"
import App from "./App";



var element=<div>Hello World</div>;
var element1=<button className="btn btn-danger">Danger</button>

ReactDOM.render(element,document.getElementById("root"));
ReactDOM.render(element1,document.getElementById("root"));
ReactDOM.render(<App/>,document.getElementById("root"));
// ReactDOM.render(<Stupid/>,document.getElementById("custom"));
