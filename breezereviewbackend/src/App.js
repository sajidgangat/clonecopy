import React from 'react';
import './App.css';
import { Switch,Route} from "react-router-dom";
import Login from '../src/modules/login/components/login/login';
import Dashboard from './modules/home/components/dashboard/dashboard';
import Home  from './modules/home/components/home'
import SideNav from './modules/home/components/side-nav/side-nav';

function App() {
  return (
<div>
  <Home/>
    {/* <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/home" component={Home} />
  </Switch> */}
  </div>
  
  );
}

export default App;
