import React from 'react';
import axios from 'axios'

export default class ServiceApi extends React.Component{

    constructor(props){
        
        super(props);
    }
    // ApiEndPoint = "https://apil.breezereview.com/api";
    componentDidMount(){
        axios.post('https://apil.breezereview.com/api/login', {
            email: 'admin@breezereview.com',
            password: 'admin'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    render(){

        return(

          <>
          </>
        );
    }

}
