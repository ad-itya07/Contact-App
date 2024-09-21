import React from "react";
import Contact from "./Contact";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Job Title</th>
          {/* Add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact) => (
          <Contact
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            email={contact.email}
            phone={contact.phone}
            jobTitle={contact.jobTitle}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
