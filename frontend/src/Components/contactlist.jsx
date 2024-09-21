import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";
import "../ContactList.css";

const apiUrl = import.meta.env.VITE_API_URL;

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    console.log(page);
    fetchContacts();
  }, [page]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: { page: page, limit: 10 },
      });

      setContacts(response.data.contacts);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error("Error fetching contacts", err);
    }
  };

  function renderPageNumbers() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button key={i} onClick={() => setPage(i)}>
          {i}
        </button>
      );
    }
    return pages;
  }

  return (
    <div className="container">
      <h2>Contact List</h2>
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
          {contacts.map((contact) => (
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

      {/* Pagination Controls */}
      <div className="pagination">
        {renderPageNumbers()}
        {/* <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button> */}
      </div>
    </div>
  );
}

export default ContactList;
