import React from "react";
import "./view-company.css";

export default class ViewCompany extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="w3-main" style={{marginLeft:'300px',marginTop:'43px'}}>
        <header className="w3-container" style={{paddingTop:'22px'}}>
        <h5><b>View Company</b></h5>
      </header>
      </div>
        );
  }
}