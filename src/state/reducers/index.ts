import { combineReducers } from 'redux'
import  productsReducer from './productsReducers'
import basketReducer from "./basketReducers"
import showBasketReducer from "./showBasketReducer"

const reducers = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  showBasket: showBasketReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>