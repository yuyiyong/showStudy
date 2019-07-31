/*
import css from './css/index.css';
import less from './css/black.less';
import sass from './css/bb.scss';
import jsdui from './jsdui';
// import json from "../config.json";
//import $ from 'jquery';
//jsdui();
{
    var jsDuiString = "Hello JSDui";
    document.getElementById("title").innerHTML = jsDuiString;
}
$('#title').html("hello jsDui success");

    // var json = require("../config.json");
   // console.log("config",json.name);
// document.getElementById("json").innerHTML = json.name+" webSite:"+json.webSite;
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
ReactDOM.render(<App />,document.getElementById("root"));