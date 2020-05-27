import React from "react";
import "./login.css";
import Logo from '../../../../assets/bmw.png'
import {Link} from "react-router-dom";
import ServiceApi from '../../../login/serviceApi';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'',password:''}
  }

   handleChange = (event)=>{
    // debugger
      this.setState({username:event.target.value});
      //console.log(this.state)
  }

  handlePassword = (event)=>
  {
    this.setState({password:event.target.value});
  }

  handleClick = (event) =>{
    event.preventDefault();
    console.log(this.state);
    }


  render() {
    return (
        <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{maxWidth:'400px',marginTop:'20vh'}}>
  
        <div className="w3-center">
          <img src={Logo} alt="BreezeMaxWeb" style={{width:'60%'}} className="w3-margin-top"/>
        </div>
  
        <form className="w3-container">
          <div className="w3-section">
            <label><b>Username</b></label>
            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="username" onChange={this.handleChange} required/>
            <label><b>Password</b></label>
            <input className="w3-input w3-border" type="text" placeholder="Enter Password" name="password" onChange={this.handlePassword} required/>
            <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit"  onClick={this.handleClick}>Login</button>
           
          </div>
        </form>
  
        <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
         
          <span className="w3-right w3-padding w3-hide-small"><Link to="craete-client"></Link></span>
        </div>
  
      </div>
    
    );
  }
}
