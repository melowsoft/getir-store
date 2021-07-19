import { ActionType } from "../action-types"
import {CartItem, Product} from "../interface"

interface FetchProductsAction {
  type: ActionType.FETCH_PRODUCTS;
}
interface ToggleBasketAction {
  type: ActionType.TOGGLE_BASKET;
}
interface ToggleSideFilterAction {
  type: ActionType.TOGGLE_SIDE_FILTER;
  payload: string;
}
interface FetchProductsSuccessAction {
  type: ActionType.FETCH_PRODUCTS_SUCCESS;
  payload: {products: Product[], pagination: {totalPages: number}, tags: string[], brands: string[]};
}
interface FetchProductsErrorAction {
  type: ActionType.FETCH_PRODUCTS_ERROR;
  payload: string;
}

interface AddProductToBasket {
  type: ActionType.ADD_TO_BASKET;
  payload: CartItem;
}
interface RemoveProductFromBasket {
  type: ActionType.REMOVE_FROM_BASKET;
  payload: CartItem;
}

export type Action =   
| FetchProductsAction 
| FetchProductsSuccessAction 
| FetchProductsErrorAction
| AddProductToBasket
| RemoveProductFromBasket
| ToggleBasketAction
| ToggleSideFilterAction
