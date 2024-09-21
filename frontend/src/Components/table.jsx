import React from "react";
import Contact from "./Contact";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Country Code</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Job Title</th>
          <th>Year Added</th>
          {/* Add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact) => (
          <Contact
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            countryCode={contact.countryCode}
            email={contact.email}
            phone={contact.phone}
            jobTitle={contact.jobTitle}
            year={contact.year}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
