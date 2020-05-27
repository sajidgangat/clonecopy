import React from "react";
import "./view-company.css";
import MaterialTable from "material-table";



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

      <div style={{ maxWidth: "100%" }}>
      <MaterialTable
      title="Simple Action Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity'
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 'İstanbul' },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 'Şanlıurfa' },
      ]}        
      actions={[
        {
          icon: 'edit',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        rowData => ({
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name),
          disabled: rowData.birthYear < 2000
        })
      ]}
      options={{
        actionsColumnIndex: -1
      }}
    />
      </div>
      </div>

        );
  }
}
