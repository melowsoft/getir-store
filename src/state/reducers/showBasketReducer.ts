import { ActionType } from "../action-types";
import { Action } from "../actions"


interface ShowBasketState {
  show: boolean;
}

const initialState = {
 show: false
}

const reducer = (state: ShowBasketState = initialState, action: Action
  ): ShowBasketState => {
     switch (action.type) {
        case ActionType.TOGGLE_BASKET:
        return {
          ...state,
          show: (!state.show)
        }
        default:
          return state;
     } 
}

export default reducer;