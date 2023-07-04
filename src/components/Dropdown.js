import React, { useState, useEffect } from "react";
import axios from "axios";

const Dropdown = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://ddic.hgsinteractive.com/api/resource_category")
      .then((response) => {
        setCategories(response.data);
        console.log("Dropdown Data", response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <form className="mt-4 mb-4">
      <div className="row">
        <div className="col-md-12">
          <select
            className="form-select"
            onChange={(event) => onSelect(event.target.value)}>
            <option value="">All Categories</option>
            {categories &&
              categories.map((category) => (
                <option
                  key={category.tid[0].value}
                  value={category.tid[0].value}>
                  {category.name[0].value}
                </option>
              ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default Dropdown;
