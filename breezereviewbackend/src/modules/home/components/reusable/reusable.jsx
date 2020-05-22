import React from "react";
import "./reusable.css";

const myAccFunc = (data, active) => {
  //debugger
  var x = document.getElementById(data);
  var y = document.getElementById(active);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show ";
    y.className += " w3-blue ";
  } else {
    x.className = x.className.replace(" w3-show", "");
    y.className = y.className.replace(" w3-blue", "");
  }
};

export const Sidemenu = (props) => {
  return (
    <div>
      <a
        onClick={() => myAccFunc(props.id, props.icon)}
        href="#"
        className="w3-padding"
        id={props.icon}
      >
        <i className={props.icon}></i>  {props.name}{" "}
        <i className="fa fa-caret-down"></i>
      </a>
      <div
        id={props.id}
        className="w3-bar-block w3-hide w3-padding-medium w3-medium"
      >
        <a href={props.submenulink1} className="w3-bar-item w3-button">
          View
        </a>
        <a href={props.submenulink2} className="w3-bar-item w3-button">
          Add New
        </a>
      </div>
    </div>
  );
};
