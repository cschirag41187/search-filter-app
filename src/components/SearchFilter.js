import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <form className="mt-0 mb-4">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
          />
        </div>
        <div className="col-md-6 text-center">
          <button className="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchFilter;
