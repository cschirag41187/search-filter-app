import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const ResourceList = ({ category, searchTerm }) => {
  const [resources, setResources] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = 'https://ddic.hgsinteractive.com/api/resource-search?page=1&_limit=8';

        if (category) {
          apiUrl += `&category=${category}`;
        }

        if (searchTerm) {
          apiUrl += `&search=${searchTerm}`;
        }

        const response = await axios.get(apiUrl);
        setResources(response.data.data);
        setTotalPages(response.data.totalPages);
        console.log("resource List", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category, searchTerm]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderResourceList = () => {
    if (resources && resources.length > 0) {
      return (
        <>
          {resources.map((resource) => (
            <div key={resource.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{resource.title}</h5>
                <p className="card-text">{resource.description}</p>
              </div>
            </div>
          ))}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      );
    } else {
      return <p className='text-center'>No results found.</p>;
    }
  };

  return <div className="mt-4">{renderResourceList()}</div>;
};

export default ResourceList;
