import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table";
import "../ContactList.css";
import Select from "react-select";
import { countryOptions, sortOptions, searchOptions } from "../selectOptions";

const apiUrl = import.meta.env.VITE_API_URL;

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [countryCode, setCountryCode] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchIn, setSearchIn] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [toSearch, setToSearch] = useState(false);

  useEffect(() => {
    console.log(page);
    fetchContacts();
  }, [page, countryCode, sortOrder]);

  useEffect(() => {
    if (toSearch) {
      fetchContacts();
      setToSearch(false);
    }
  }, [toSearch]);
  

  const fetchContacts = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          page: page,
          limit: 10,
          countryCode,
          sortOrder,
          searchIn,
          searchValue,
        },
      });

      setContacts(response.data.contacts);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error("Error fetching contacts", err);
    }
  };

  const pageSize = 10;
  function getPageNumbers() {
    const totalBlocks = Math.min(pageSize, totalPages);
    const startPage = Math.max(1, page - Math.floor(totalBlocks / 2));
    const endPage = Math.min(totalPages, startPage + totalBlocks - 1);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="container">
      <h2>
        Contact List : P{page}
        <Select
          className="select"
          options={countryOptions}
          value={countryCode}
          onChange={setCountryCode}
          placeholder="Select Country Code (Filter)"
          isClearable
          isSearchable
        />
        <Select
          className="select-sort"
          options={sortOptions}
          value={sortOrder}
          onChange={setSortOrder}
          placeholder="Sort By"
          isClearable
        />
        <Select
          className="select-sort"
          options={searchOptions}
          value={searchIn}
          onChange={setSearchIn}
          placeholder="Search In"
          isClearable
        />
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        <button
          className="search-button"
          onClick={() => {setToSearch(true), setPage(1)}}
        >
          Search
        </button>
      </h2>

      <Table contacts={contacts} />

      <div className="pagination">
        {/* METHOD 2 BELOW */}
        {/* function renderPageNumbers() {
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
            */}
        {/* {renderPageNumbers()} */}

        {/* METHOD 1 BELOW */}
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

        {/* METHOD 3 BELOW */}
        <button onClick={() => setPage(1)} disabled={page === 1}>{`<<`}</button>

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >{`<`}</button>

        {getPageNumbers().map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >{`>`}</button>

        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        >{`>>`}</button>
      </div>
    </div>
  );
}

export default ContactList;
