import React from "react";
import "./add-company.css";

export default class AddCompany extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="w3-main" style={{marginLeft:'300px',marginTop:'43px'}}>
        <header className="w3-container" style={{paddingTop:'22px'}}>
        <h5><b>Add Company</b></h5>
      </header>
      
      <div className="w3-cell-row">
  <div className="w3-container w3-cell w3-mobile">
  <p>
  <label>First Name</label>
  <input className="w3-input" type="text"/></p>
  </div>
  <div className="w3-container w3-cell w3-mobile">
  <p>
  <label>Last Name</label>
  <input className="w3-input" type="text"/></p>
  </div>
 
</div>


</div>
</>
        );
  }
}
