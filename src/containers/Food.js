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
    <div className="col-12 col-md-4 p-0">
      <Link
      to={{
        pathname: '/DetailPage/{item.idMeal}',
        state: { food: item },
      }}

      className="m-2 nav-link p-0 my_card"
    >
      <div onClick={handleExpandClick} className="m-2">
        <img alt="food" src={item.strMealThumb} className="landing-page-img"/>
        <div>
          <h5 className="text-center card_link">{item.strMeal}</h5>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default FoodItem;

FoodItem.defaultProps = {
  food: {},
};

FoodItem.propTypes = {
  food: PropTypes.shape({}),
};

