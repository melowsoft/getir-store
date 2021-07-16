import { combineReducers } from 'redux'
import  productsReducer from './productsReducers'

const reducers = combineReducers({
  products: productsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>