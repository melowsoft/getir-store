import { combineReducers } from 'redux'
import  productsReducer from './productsReducers'
import basketReducer from "./basketReducers"
import showBasketReducer from "./showBasketReducer"
import showSideFilterReducer from "./showSideFilterReducer"

const reducers = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  showBasket: showBasketReducer,
  showSideFilter: showSideFilterReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>