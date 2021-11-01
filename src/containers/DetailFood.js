import React from "react";
import PropTypes from 'prop-types';

const ThisFood = (props) => {
  const { food } = props.location.state;
  return (
    <div>
      <div className="header-nav"></div>
      <div className="home_2 padding-top">
      {food.strMeal}
        </div>
    </div>
  )
}

export default ThisFood;

ThisFood.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
