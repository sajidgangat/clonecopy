import React from "react";
import "./login.css";
import Logo from '../../../../assets/bmw.png'
import {Link} from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="w3-modal-content w3-card-4 w3-animate-zoom" style={{maxWidth:'400px',marginTop:'20vh'}}>
  
        <div class="w3-center">
          <img src={Logo} alt="BreezeMaxWeb" style={{width:'60%'}} class="w3-margin-top"/>
        </div>
  
        <form class="w3-container" action="/action_page.php">
          <div class="w3-section">
            <label><b>Username</b></label>
            <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required/>
            <label><b>Password</b></label>
            <input class="w3-input w3-border" type="text" placeholder="Enter Password" name="psw" required/>
            <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit"><Link to="craete-client">Login</Link></button>
           
          </div>
        </form>
  
        <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
         
          <span class="w3-right w3-padding w3-hide-small"><Link to="craete-client"></Link></span>
        </div>
  
      </div>
    
    );
  }
}
