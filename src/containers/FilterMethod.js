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
    <div className="intro">
      <div className="logo" />
      <h2>Discover the best food & drinks!</h2>
      <div className="foods" />
    </div>
  );
};

export default Categories;
