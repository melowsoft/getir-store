import { ActionType } from "../action-types";
import { Action } from "../actions"
import {Product} from "../interface/product"



interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: Product[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state: RepositoriesState = initialState, action: Action
  ): RepositoriesState => {
     switch (action.type) {
        case ActionType.FETCH_PRODUCTS:
          return { loading: true, error: null, data: [] }
        case ActionType.FETCH_PRODUCTS_SUCCESS:
          return { loading: false, error: null, data: action.payload }
        case ActionType.FETCH_PRODUCTS_ERROR:
          return { loading: false, error: action.payload, data: [] }
        default:
          return state;
     } 
}

export default reducer;