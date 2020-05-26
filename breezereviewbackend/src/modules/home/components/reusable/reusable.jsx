import React from "react";
import "./reusable.css";
import { Link } from "react-router-dom";

export default class RouterDom extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return {};
  }
}

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
      <p
        onClick={() => myAccFunc(props.id, props.icon)}
        className="w3-padding"
        id={props.icon}
      >
        <i className={props.icon}></i>  {props.name}{" "}
        <i className="fa fa-caret-down"></i>
      </p>
      <div
        id={props.id}
        className="w3-bar-block w3-hide w3-padding-medium w3-medium"
      >
        <Link className="w3-bar-item w3-button" to={`${props.submenulink1}`}>
          Add
        </Link>

        <Link className="w3-bar-item w3-button" to={props.submenulink2}>
          View
        </Link>
      </div>
    </div>
  );
};
