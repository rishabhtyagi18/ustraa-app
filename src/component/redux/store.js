import { createStore, applyMiddleware} from 'redux';
import RootReducer from './rootReducer';
import thunk from 'redux-thunk';

const middleWare = [thunk];

export const store = createStore(RootReducer, applyMiddleware(...middleWare));