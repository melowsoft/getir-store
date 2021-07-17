import axios from 'axios';
import { Dispatch } from "redux"
import { ActionType } from '../action-types';
import { Action } from "../actions"
import {Product} from "../interface/product"
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

  
     console.log(filteredCategory, "for checks")

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