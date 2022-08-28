import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './MoviesPagination.scss';

const MoviesPagination = ({ page, setPage, handlePageChange }) => {
  return (
    <div className="MoviesPagination">
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default MoviesPagination;
