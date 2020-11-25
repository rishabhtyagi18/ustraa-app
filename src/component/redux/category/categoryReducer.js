import CategoryTypes from "./categoryTypes";

const INITIAL_STATE = {
  isFetching: true,
  categoryItems: []
};

const CategoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CategoryTypes.SET_CATEGORY_DATA: {
      return { ...state, categoryItems: payload.category_list };
    }
    case CategoryTypes.SET_CATEGORY_DATA_FETCH: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
};

export default CategoryReducer;
