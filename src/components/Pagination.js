import React from 'react';

const Pagination = ({ currentPage, totalPages = 0, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const pageNumbers = Array.from({ length: totalPages || 0 }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
