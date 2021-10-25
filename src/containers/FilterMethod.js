import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function FilterMethod({ filter, handleFilter }) {
  const [error, setError] = useState(false);
  const [category, setCategory] = useState([]);

    useEffect(() => {
    setError(false);

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(resp => resp.json())
      .then((result) => {
        setCategory(result.categories);
      }
      ).catch((err) => {
        if (err) {
          setError(true);
        }
      })
    }
  , [])
  
  return (
    <div className="category-wrapper my-5 py-5">
    <select
      name="category"
      value={filter}
      onChange={(e) => handleFilter(e.target.value)}
      className="col-4 py-1"
    >
      {category.map((item) => (
        <option value={item} key={item.strCategory}>
          {item.strCategory}
        </option>
      ))}
    </select>
    <div>{error && "Error"}</div>
  </div>
  )
}

FilterMethod.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func,
};

FilterMethod.defaultProps = {
  filter: 'All',
  handleFilter: null,
};




// import { useEffect, useState } from "react";
// import React from "react";

// const filterMethod = () => {
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [launches, setLaunches] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     setError(false);

//     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//       .then(resp => resp.json())
//       .then((result) => {
//         setLoading(false);
//         setLaunches(result);
//       }
//       ).catch((err) => {
//         if (err) {
//           setError(true);
//         }
//       })
//     }
//   , [])

//   return (
//     <div>
//       Hello World
//     </div>
//   )
// }

// export default filterMethod;
