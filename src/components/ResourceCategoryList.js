import React from 'react';

const ResourceCategoryList = ({ categories }) => {
  return (
    <div>
      <h2 className='text-center'>Resource Categories:</h2>
      <ul>
        {categories &&
          categories.map((category) => (
            <li key={category.tid[0].value}>{category.name[0].value}</li>
          ))}
      </ul>
    </div>
  );
};

export default ResourceCategoryList;
