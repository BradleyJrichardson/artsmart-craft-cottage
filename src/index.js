import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import dotenv from 'dotenv';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

dotenv.config()

ReactDOM.render(<App />, document.getElementById("root"));
