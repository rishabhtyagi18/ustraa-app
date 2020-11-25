import CategoryTypes from "./categoryTypes";
import { getCategoryListApi } from '../../../_services/api/getCategoryListApi';

export const getCategoriesFetch = () => ({
  type: CategoryTypes.SET_CATEGORY_DATA_FETCH
});

export function getCategories() {
  return dispatch => {
    getCategoryListApi().then(data => {
      dispatch({
        type: CategoryTypes.SET_CATEGORY_DATA,
        payload: data
      });
      dispatch(getCategoriesFetch());
    });
  };
}
