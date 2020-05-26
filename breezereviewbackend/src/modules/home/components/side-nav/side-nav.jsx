import React from "react";
import "./side-nav.css";
import { Sidemenu } from "../reusable/reusable";
function w3_open() {
  document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
  document.getElementsByClassName("w3-overlay")[0].style.display = "block";
}

function w3_close() {
  document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
  document.getElementsByClassName("w3-overlay")[0].style.display = "none";
}

// Accordion

// Click on the "Jeans" link on page load to open the accordion for demo purposes
//   document.getElementById("myBtn").click();

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  myAccFunc = (data) => {
    //debugger
    var x = document.getElementById(data);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  };

  render() {
    return (
      <div>
        <div
          className="w3-container w3-top w3-black w3-large w3-padding"
          style={{ zIndex: "4" }}
        >
          <button
            className="w3-btn w3-hide-large w3-padding-0 w3-hover-text-grey"
            onClick={w3_open}
          >
            <i className="fa fa-bars"></i>  Menu
          </button>
          <span className="w3-right">Logo</span>
        </div>
        <nav
          className="w3-sidenav w3-collapse w3-white w3-animate-left"
          style={{ zIndex: "3", width: "300px" }}
        >
          <br />
          <div className="w3-container">
            <h5 className="paddtop">Welcome</h5>
          </div>
          <a
            href="#"
            className="w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            onClick={w3_close}
            title="close menu"
          >
            <i className="fa fa-remove"></i>  Close Menu
          </a>
          <a href="#" className="w3-padding">
            <i className="fa fa-bullseye"></i>  Dashboard
          </a>
          <Sidemenu
            name="  Company "
            icon="fa fa-building"
            submenulink1="add_company"
            submenulink2="view_company"
            id="company"
          />
          <Sidemenu
            name="  Location "
            icon="fa fa-location-arrow"
            submenulink1="create_location"
            submenulink2="view_location"
            id="location"
          />
          <Sidemenu
            name="  Users "
            icon="fa fa-users"
            submenulink1="create_user"
            submenulink2="view_user"
            id="user"
          />
          <Sidemenu
            name="  Twilio "
            icon="fa fa-phone"
            submenulink1="create_twilio"
            submenulink2="view_twilio"
            id="twilio"
          />
          <Sidemenu
            name="  Links "
            icon="fa fa-chain"
            submenulink1="create_links"
            submenulink2="view_links"
            id="links"
          />
          <Sidemenu
            name="  Template "
            icon="fa fa-files-o"
            submenulink1="create_template"
            submenulink2="view_template"
            id="template"
          />
        </nav>
        <div
          className="w3-overlay w3-hide-large w3-animate-opacity"
          onClick={w3_close}
          style={{ cursor: "pointer" }}
          title="close side menu"
        ></div>
      </div>
    );
  }
}
