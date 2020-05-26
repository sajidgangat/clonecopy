import React from "react";
import SideNav from "../components/side-nav/side-nav";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Dashboard from './components/dashboard/dashboard';
import AddCompany from "../components/add-company/add-company";
import ViewCompany from "./view-company/view-company";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <SideNav />

          <Switch>
            <Route path="/add_company" component={AddCompany} />
            <Route path="/view_company" component={ViewCompany} />
          </Switch>
        </Router>
      </>
    );
  }
}
