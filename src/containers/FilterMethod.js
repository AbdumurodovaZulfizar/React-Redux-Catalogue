import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';
import allActions from '../actions';

const Categories = () => {
  const dispatch = useDispatch();
  const getData = () => (dispatch) => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => dispatch(allActions.categoryActions(res.data.categories)));
  };

  useEffect(() => {
    dispatch(getData());
  });
  return (
    <div className="">
    </div>
  );
};

export default Categories;
