import { ActionType } from "../action-types";
import { Action } from "../actions"
import {Product} from "../interface"



interface ProductsState {
  loading: boolean;
  error: string | null;
  data: {products: Product[], pagination: {totalPages: number}, tags: string[], brands: string[]};
}

const initialState = {
  loading: false,
  error: null,
  data: {products: [], pagination: {totalPages: 0}, tags: [], brands: []}
}

const reducer = (state: ProductsState = initialState, action: Action
  ): ProductsState => {
     switch (action.type) {
        case ActionType.FETCH_PRODUCTS:
          return { loading: true, error: null, data: {products: [], pagination: {totalPages: 0}, tags: [], brands: []} }
        case ActionType.FETCH_PRODUCTS_SUCCESS:
          return { loading: false, error: null, data: action.payload }
        case ActionType.FETCH_PRODUCTS_ERROR:
          return { loading: false, error: action.payload, data: {products: [], pagination: {totalPages: 0}, tags: [], brands: []} }
        default:
          return state;
     } 
}

export default reducer;