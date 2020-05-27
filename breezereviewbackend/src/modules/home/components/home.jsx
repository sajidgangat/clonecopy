import React from "react";
import SideNav from "../components/side-nav/side-nav";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Dashboard from './components/dashboard/dashboard';
import AddCompany from "../components/add-company/add-company";
import ViewCompany from "./view-company/view-company";
import Login from "../../login/components/login/login";
import Dashboard from "./dashboard/dashboard";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
      //debugger
     if(this.state.isLoggedIn == false)
     {

        return (
       
            <>
            
              <Router>
                  
                <Switch>
                  <Route path="/" component={Login} />
                  <Route path="/login" component={Login} />
                </Switch>
              </Router>
            </>
          );
     }
     else
     {
        return (
       
            <>
            
              <Router>
                  
              <SideNav/>
                  
                <Switch>
                  <Route path="/add_company" component={AddCompany} />
                  <Route path="/home" component={Home} />
                  <Route path="/view_company" component={ViewCompany} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </Router>
            </>
          );
     }

    // return (
       
    //   <>
      
    //     <Router>
            
    //     <SideNav/>
            
    //       <Switch>
    //         <Route path="/add_company" component={AddCompany} />
    //         <Route path="/home" component={Home} />
    //         <Route path="/view_company" component={ViewCompany} />
    //         <Route path="/login" component={Login} />
    //       </Switch>
    //     </Router>
    //   </>
    // );
  }
}
