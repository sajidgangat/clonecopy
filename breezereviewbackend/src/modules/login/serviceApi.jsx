import React from "react";
import API from "../api";

export function LoginApi(data) {
  console.log(data);
  API.post("https://apil.breezereview.com/api/login", {
    email: data.username,
    password: data.password,
  })
    .then(function (response) {
      //console.log(response.data.data);
      localStorage.setItem("token", response.data.data.token);
      console.log(localStorage.getItem("token"));
      
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
