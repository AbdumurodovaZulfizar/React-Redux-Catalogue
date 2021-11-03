import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FoodItem = ({ food }) => {
  const [expanded, setExpanded] = useState(false);
  
  const item = { ...food };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Link
      to={{
        pathname: '/DetailPage/{item.idMeal}',
        state: { food: item },
      }}
    >
      <div onClick={handleExpandClick}>
        <img alt="food" src={item.strMealThumb} />
        {item.strMeal}
      </div>
    </Link>
  );
};

export default FoodItem;

FoodItem.defaultProps = {
  food: {},
};

FoodItem.propTypes = {
  food: PropTypes.shape({}),
};

