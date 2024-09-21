import React from "react";

function Contact({ firstName, lastName, email, phone, jobTitle }) {
    return (
        <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{jobTitle}</td>
        </tr>
    );
}

export default Contact;