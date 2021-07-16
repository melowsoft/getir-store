import { ActionType } from "../action-types"
import {Product} from "../interface/product"

interface FetchProductsAction {
  type: ActionType.FETCH_PRODUCTS;
}
interface FetchProductsSuccessAction {
  type: ActionType.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}
interface FetchProductsErrorAction {
  type: ActionType.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type Action =   
| FetchProductsAction 
| FetchProductsSuccessAction 
| FetchProductsErrorAction
