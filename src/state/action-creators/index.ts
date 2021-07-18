import axios from 'axios';
import { Dispatch } from "redux"
import { ActionType } from '../action-types';
import { Action } from "../actions"
import {CartItem, Product} from "../interface"
import { filterData, compileTags, filterBrands, filterTags, compileBrands } from "../../helper"

const itemPerPage = 16;

export const fetchProducts = (
  pageNumber: number,
  productType: string,
  sortType: string,
  sortTerm: any,
  brandTerm: string,
  tagTerm: string
   ) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_PRODUCTS
    })

    try {

      const {data} = await axios.get('http://localhost:5000/products')

      //compile tags for filter
      const tags = compileTags(data)

      //compile brands for filter
      const brands = compileBrands(data)
      
      //Apply Filter here
       const sortResult: any = filterData(data, sortType, sortTerm) 
     
      //Filter brands
      const brandsResult = filterBrands(sortResult, brandTerm)

      //Filter Product Tags
      const tagsResult = filterTags(brandsResult, tagTerm)
   
      //Filter categories => Shirts or Mugs
      const filteredCategory = tagsResult.filter((prod: Product) => prod.itemType === productType)

      const pageVisited = pageNumber * itemPerPage
      const pageCount = Math.ceil(filteredCategory.length / itemPerPage)
      const paginated = filteredCategory.slice(pageVisited, pageVisited + itemPerPage)
      const pagination = {totalPages: pageCount}
      const formattedData = {products : paginated, pagination, tags, brands}
     
      dispatch({
        type: ActionType.FETCH_PRODUCTS_SUCCESS,
        payload: formattedData
      }) 

    } catch (err) {
      dispatch({
        type: ActionType.FETCH_PRODUCTS_ERROR,
        payload: err.message
      })
    }
  }
}

export const addToBasket = (
  product: CartItem ) => {
  return async (dispatch: Dispatch<Action>) => {

    try {
      dispatch({
        type: ActionType.ADD_TO_BASKET,
        payload: product
      }) 

    } catch (err) {
      console.log(err)
    }
  }
}
export const removeFromBasket = (
  product: CartItem ) => {
  return async (dispatch: Dispatch<Action>) => {

    try {
      dispatch({
        type: ActionType.REMOVE_FROM_BASKET,
        payload: product
      }) 

    } catch (err) {
      console.log(err)
    }
  }
}

export const toggleBasket = () => {
  return async (dispatch: Dispatch<Action>) => {  
      dispatch({
        type: ActionType.TOGGLE_BASKET
      }) 
  }
}

