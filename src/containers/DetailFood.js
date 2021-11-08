import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const ThisFood = (props) => {
  const { food } = props.location.state;
  const [myFood, setMyFood] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + food.idMeal)
      .then(resp => resp.json())
      .then((result) => {
        setMyFood(result.meals);
      }
      ).catch((err) => {
        if (err) {
          setError(true);
        }
      })
    }
  , [food.idMeal])

  return (
    <>
      <div className="header-nav"></div>
      <div className="home_2 padding-top">
        <div className="container-fluid p-0 p-md-3">
          <div>{myFood.map((meal) => (
            <div key={meal.strMeal}>
            <h4 className="text-center card_link">{meal.strMeal} - {meal.strArea} food</h4>
            <div className="row m-0 p-0">
              <div className="col-12 col-md-6">
              <ReactPlayer url={meal.strYoutube} width="100%">
              </ReactPlayer>
              </div>
              <div className="col-12 col-md-6 text">
              <h5 className="text-center">Ingredients</h5>
              <small>{
                meal.strIngredient1
                } - {meal.strMeasure1}, {
                  meal.strIngredient2
                  } - {meal.strMeasure2}, {
                    meal.strIngredient3
                    } - {meal.strMeasure3}, {
                      meal.strIngredient4
                      } - {meal.strMeasure4}, {
                        meal.strIngredient5
                        } - {meal.strMeasure5}, {
                          meal.strIngredient6
                          } - {meal.strMeasure6}, {
                            meal.strIngredient7
                            } - {meal.strMeasure7}, {
                              meal.strIngredient8
                              } - {meal.strMeasure8}, {
                                meal.strIngredient9
                                } - {meal.strMeasure9}, {
                                  meal.strIngredient10
                                  } - {meal.strMeasure10}, {
                                    meal.strIngredient11
                                    } - {meal.strMeasure11}, {
                                      meal.strIngredient12
                                      } - {meal.strMeasure12}, {
                                        meal.strIngredient13
                                        } - {meal.strMeasure13}, {
                                          meal.strIngredient14
                                          } - {meal.strMeasure14}, {
                                            meal.strIngredient15
                                            } - {meal.strMeasure15}, {
                                              meal.strIngredient16
                                              } - {meal.strMeasure16}, {
                                                meal.strIngredient17
                                                } - {meal.strMeasure17}, {
                                                  meal.strIngredient18
                                                  } - {meal.strMeasure18}, {
                                                    meal.strIngredient19
                                                    } - {meal.strMeasure19}, {
                                                      meal.strIngredient20
                                                      } - {meal.strMeasure20}.</small>
                  <h5 className="text-center">Instructions</h5>
                  <small className="pt-4">{meal.strInstructions}</small>
              </div>
            </div>
            </div>
          ))}</div>
        </div>
        {error && "Error"}
        </div>
    </>
  )
}

export default ThisFood;

ThisFood.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

ThisFood.defaultProps = {
  food: {},
  location: {},
};
