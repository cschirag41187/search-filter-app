import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResourceCategoryList from './components/ResourceCategoryList';
import Dropdown from './components/Dropdown';
import ResourceList from './components/ResourceList';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://ddic.hgsinteractive.com/api/resource_category');
        setCategories(response.data.data);
        console.log("api data", response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center">Search App</h1>
      <div className="d-flex justify-content-center">
        <Dropdown onSelect={handleCategorySelect} />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <SearchFilter onSearch={handleSearch} />
      </div>
      <ResourceCategoryList categories={categories} />
      <ResourceList category={selectedCategory} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
