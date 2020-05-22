import React from 'react';
import './header.css';


function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    document.getElementsByClassName("w3-overlay")[0].style.display = "block";
}
 
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
    document.getElementsByClassName("w3-overlay")[0].style.display = "none";
}


class Header extends React.Component{

constructor(props){
    super(props)
}



render(){
    return(

<div class="w3-container w3-top w3-black w3-large w3-padding" style={{zIndex:'4'}}>
  <button class="w3-btn w3-hide-large w3-padding-0 w3-hover-text-grey" onClick="w3_open()"><i class="fa fa-bars"></i>  Menu</button>
  <span class="w3-right">Logo</span>
</div>

    );
}


}