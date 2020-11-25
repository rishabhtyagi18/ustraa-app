import ProductType from "./productType";
import { getProductListApi } from "../../../_services/api/getProductListApi";

export const getProductListFetch = () => ({
  type: ProductType.SET_PRODUCT_DATA_FETCH
});

export const getProductList = id => {
  return dispatch => {
    getProductListApi(id).then(data => {
      dispatch({
        type: ProductType.SET_PRODUCT_DATA,
        payload: data
      });
      dispatch(getProductListFetch());
    });
  };
}
