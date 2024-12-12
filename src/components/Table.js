import React from 'react';
import '../styles/Table.css'; // Import your CSS file

const Table = () => {
  const tableData = [
    { code: 26, name: 'Unish Kumar', designation: 'Front End Developer', contactDetails: 9099201233, workProfile: 'Total responsibility to handle Front End Work' },
    { code: 36, name: 'Hari Parmar', designation: '.Net Developer', contactDetails: 9898512345, workProfile: 'Handle all .net development' },
    { code: 36, name: 'Hari Parmar', designation: '.Net Developer', contactDetails: 9898512345, workProfile: 'Handle all .net development' },
    { code: 36, name: 'Hari Parmar', designation: '.Net Developer', contactDetails: 9898512345, workProfile: 'Handle all .net development' },
    { code: 36, name: 'Hari Parmar', designation: '.Net Developer', contactDetails: 9898512345, workProfile: 'Handle all .net development' },
    { code: 36, name: 'Hari Parmar', designation: '.Net Developer', contactDetails: 9898512345, workProfile: 'Handle all .net development' },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Contact Details</th>
          <th>Work Profile</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.code}>
            <td>{row.code}</td>
            <td>{row.name}</td>
            <td>{row.designation}</td>
            <td>{row.contactDetails}</td>
            <td>{row.workProfile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;





