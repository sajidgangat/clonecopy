import React from "react";
import API from "../api";

export const dataofcomapny = ''
export default class LoginServiceApi extends React.Component {
    constructor(props) {
      super(props);
  //console.log(data);
  this.state = ({CompanyData:[]})
  
}

}
export const LoginApi = (data,history)=>{
  API.post("login", {
    email: data.username,
    password: data.password,
  })
    .then(function (response) {
     // console.log(response.data.success);
      if(response.data.success != false)
      {
        localStorage.setItem("token", response.data.data.token);
        console.log(localStorage.getItem("token"));
        history.push('/dasboard');
      }
      else{
      }
      
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


export function GetCompanyApi(){
  API.post("company")
    .then(function (response) {
     
      console.log(response);
      return response;
      // if(response.data.success != false)
      // {
       
      // }
      // else{
      // }
      
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}



// export const GetCompanyApi = ()=>{
//   API.get("company")
//     .then(res => res.data)
//     .catch(function (error) {
//       console.log(error);
//     });
// }
