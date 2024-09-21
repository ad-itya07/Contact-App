import React from "react";

function Contact({ firstName, lastName, countryCode, email, phone, jobTitle, year }) {
    return (
        <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{countryCode}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{jobTitle}</td>
        <td>{year}</td>
        </tr>
    );
}

export default Contact;