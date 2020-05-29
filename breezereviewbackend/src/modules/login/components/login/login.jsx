import React from "react";
import "./login.css";
import Logo from '../../../../assets/bmw.png'
import {Link} from "react-router-dom";
import {LoginApi} from '../../../login/serviceApi';

const emailReg = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const formValid = formErrors =>{
  let valid = true;
  
  Object.values(formErrors).forEach(val =>{
    val.length > 0 && (valid = false)
  });
  return valid;
}



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'',password:'',formErrors:{username:'',password:''}}
  }

  handleSubmit = (event)=>{
    // debugger
      event.preventDefault();

      if(formValid(this.state.formErrors)){
        console.log(`data is Username : ${this.state}`);
      }
      else{
        console.log('Form is invalid');
      }


      //this.setState({username:event.target.value});
      //console.log(this.state)
  }

  handleChange = (event) =>{
    event.preventDefault();
    const {name,value} = event.target
   // console.log(name,value)
    let newform = this.state.formErrors;

    switch(name){
      case 'username':
        newform.username = emailReg.test(value) && value.length > 0 ? "" : "Email not valid";
      

      case 'password':
        newform.password = value.length < 1 ? "Password cannot be blank": "";
        break;
        default:
          break;
    }
this.setState({newform, [name]:value},() => console.log(this.state))
  };




  render() {
    return (
        <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{maxWidth:'400px',marginTop:'20vh'}}>
  
        <div className="w3-center">
          <img src={Logo} alt="BreezeMaxWeb" style={{width:'60%'}} className="w3-margin-top"/>
        </div>
  
        <form className="w3-container">
          <div className="w3-section">
            <label><b>Username</b></label>
            <input className={this.state.formErrors.username.length > 0 ? 'w3-input w3-border w3-margin-bottom w3-border-red': 'w3-input w3-border w3-margin-bottom'} type="text" placeholder="Enter Username" name="username" onChange={this.handleChange} noValidate/>
            {this.state.formErrors.username.length > 0 &&(
              <span className="" style={{color:'red'}}>{this.state.formErrors.username}<br/></span>
            )}
            <label><b>Password</b></label>
            <input className={this.state.formErrors.password.length > 0 ? 'w3-input w3-border w3-margin-bottom w3-border-red': 'w3-input w3-border w3-margin-bottom'} type="text" placeholder="Enter Password" name="password" onChange={this.handleChange} noValidate/>
            {this.state.formErrors.password.length > 0 &&(
              <span className="" style={{color:'red'}}>{this.state.formErrors.password}<br/></span>
            )}
            <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit"  onClick={this.handleSubmit}>Login</button>
           
          </div>
        </form>
  
        <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
         
          <span className="w3-right w3-padding w3-hide-small"><Link to="craete-client"></Link></span>
        </div>
  
      </div>
    
    );
  }
}
