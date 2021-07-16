import axios from 'axios';
import { Dispatch } from "redux"
import { ActionType } from '../action-types';
import { Action } from "../actions"

export const fetchProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_PRODUCTS
    })

    try {
      const {data} = await axios.get('http://localhost:5000/products')

     dispatch({
       type: ActionType.FETCH_PRODUCTS_SUCCESS,
       payload: data
     }) 

    } catch (err) {
      dispatch({
        type: ActionType.FETCH_PRODUCTS_ERROR,
        payload: err.message
      })
    }
  }
}