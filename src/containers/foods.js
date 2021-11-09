import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import allActions from '../actions';
import FoodItem from './Food';

const Foods = () => {
  const [category, setCategory] = useState('Beef');
  const categories = useSelector((state) => state.categoryReducer.categories);
  const categoryList = categories;
  const foods = useSelector((state) => state.foodReducer.foods);
  const foodList = foods;
  const dispatch = useDispatch();

  const categoryHandle = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const fetchFoods = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => dispatch(allActions.foodActions(res.data.meals)));
  };

  useEffect(() => {
    fetchFoods();
  });

  return (
    <div>
      <div className="col-12 col-md-6 mx-auto mb-4">
        <select className="form-select" onChange={(e) => { categoryHandle(e); }}>
          {categoryList.map((item) => (
            <option value={item.strCategory} key={item.strCategory}>{item.strCategory}</option>
          ))}
        </select>
      </div>
      <div className="row">
        {foodList.map((obj) => (
          <FoodItem key={obj.idMeal} food={obj} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
