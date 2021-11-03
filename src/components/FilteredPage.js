import React from "react";
import Categories from "../containers/FilterMethod";
import Foods from "../containers/foods";

const FilteredPage = () => {
  return (
    <div className="">
        <div className="header-nav"></div>
        <div className="home_2">
          <div className="container-fluid row m-0 px-0 p-md-3">
          <Categories />
          <Foods />
          </div>
        </div>
    </div>
  )
}

export default FilteredPage;
