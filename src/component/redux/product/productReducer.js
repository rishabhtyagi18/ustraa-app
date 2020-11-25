import ProductType from "./productType";

const INITIAL_STATE = {
  isFetching: true,
  product: []
};

const ProductReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ProductType.SET_PRODUCT_DATA: {
      return { ...state, product: payload.products };
    }
    case ProductType.SET_PRODUCT_DATA_FETCH: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
};

export default ProductReducer;
