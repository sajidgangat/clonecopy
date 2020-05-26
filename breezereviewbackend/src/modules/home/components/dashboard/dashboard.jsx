import React from "react";
import "./dashboard.css";
import SideNav from "../side-nav/side-nav";
import { Switch, Route } from "react-router-dom";
import AddCompany from "../add-company/add-company";
import Resusable from "../reusable/reusable";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <AddCompany />
      </>
    );
  }
}
