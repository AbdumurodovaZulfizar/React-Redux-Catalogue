import React from "react";
import PropTypes from 'prop-types';

const ThisFood = (props) => {
  const { food } = props.location.state;
  return (
    <div>
      {food.strMeal}
    </div>
  )
}

export default ThisFood;

ThisFood.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
