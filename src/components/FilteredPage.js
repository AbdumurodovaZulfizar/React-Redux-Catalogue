import React from "react";
import PropTypes from 'prop-types';
import useCategories from "../containers/FilterMethod";

const FilteredPage = ({ filter, handleFilter }) => {
  const { categories } = useCategories();
  return (
    <div className="category-wrapper pt-5 mt-5">
    <select
      name="category"
      value={filter}
      onChange={(e) => handleFilter(e.target.value)}
      className="col-4 py-1"
    >
      {categories.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
  )
}

FilteredPage.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func,
};

FilteredPage.defaultProps = {
  filter: 'All',
  handleFilter: null,
};


export default FilteredPage;
