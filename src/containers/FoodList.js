import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { changeFilter } from "../actions";
import useFoods from "./foods";
import FilteredPage from "../components/FilteredPage";

const FoodList = ({
  foods, filter, changeFilter
}) => (
  <div>
    <FilteredPage filter={filter} handleFilter={changeFilter} />
    <table className="table col-9 mx-auto">
      <tbody>
        {
        foods.map((book) => (
          <div>
            {foods.strName}
          </div>
        ))
        }
      </tbody>
    </table>
  </div>
)

FoodList.propTypes = {
  foodss: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

FoodList.defaultProps = {
  foods: [],
  handleRemoveBook: null,
  filter: 'All',
  changeFilter: null,
};

const GetBooks = (filter) => {
  useFoods(filter);
};