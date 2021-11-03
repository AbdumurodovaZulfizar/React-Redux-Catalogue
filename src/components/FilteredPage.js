import React from "react";
import Categories from "../containers/FilterMethod";
import Foods from "../containers/foods";
import FoodItem from "../containers/Food";

const FilteredPage = () => {
  return (
    <div className="">
        <div className="header-nav"></div>
        <div className="pt-5 home_2">
          <div className="container-fluid row">
          <Categories />
          <Foods />
          <FoodItem />
          </div>
        </div>
    </div>
  )
}

export default FilteredPage;
