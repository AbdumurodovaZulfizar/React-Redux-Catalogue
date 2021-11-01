import React from "react";
import useCategories from "../containers/FilterMethod";
import Foods from "../containers/foods";
import FoodItem from "../containers/Food";

const FilteredPage = () => {
  return (
    <div className="pt-5 mt-5">
      <useCategories />
      <Foods />
      <FoodItem />
    </div>
  )
}

export default FilteredPage;
