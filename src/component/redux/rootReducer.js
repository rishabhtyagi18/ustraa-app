import { combineReducers } from 'redux';
import CategoryReducer from './category/categoryReducer';
import ProductReducer from './product/productReducer';
import TabReducer from './tabs/tabsReducer';
import ToggleBarReducer from './toggleBar/toggleBarReducer';

const RootReducer = combineReducers({
    category: CategoryReducer,
    product: ProductReducer,
    toggle: ToggleBarReducer,
    tab: TabReducer,
})

export default RootReducer