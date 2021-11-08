const initialState = {
  foods: [],
};
const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FOODS':
      return {
        ...state,
        foods: action.foods,
      };
    default:
      return state;
  }
};

export default foodReducer;
