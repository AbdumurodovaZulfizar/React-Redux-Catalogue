import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import ReactPlayer from "react-player";
// import axios from "axios";

const ThisFood = (props) => {
  const { food } = props.location.state;
  console.log(food.idMeal);

  const [myFood, setMyFood] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + food.idMeal)
      .then(resp => resp.json())
      .then((result) => {
        setMyFood(result.meals)
        console.log(result.meals)
      }
      ).catch((err) => {
        if (err) {
          setError(true);
        }
      })
    }
  , [food.idMeal])

  return (
    <div key={food.idMeal}>
      <div className="header-nav"></div>
      <div className="home_2 padding-top">
        <div className="container-fluid p-0 p-md-3">
          <h4>{myFood.map((meal) => (
            <>
            <h4 className="text-center card_link">{meal.strMeal}</h4>
            <div className="row m-0 p-0">
              <div className="col-12 col-md-6">
              <ReactPlayer url={meal.strYoutube} width="100%">
              </ReactPlayer>
              </div>
              <div className="col-12 col-md-6 text">
              <h5 className="text-center">Ingredients</h5>
              <small>{
                meal.strIngredient1
                }</small>
              </div>
            </div>
            </>
          ))}</h4>
        </div>

        </div>
    </div>
  )
}

export default ThisFood;

ThisFood.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

ThisFood.defaultProps = {
  food: {},
};
