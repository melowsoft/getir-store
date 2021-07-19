import { ActionType } from "../action-types";
import { Action } from "../actions"


interface ShowSideFilterState {
  menuStatus: string;
  style: string;
}

const initialState = {
  menuStatus: "close",
  style: "menu"
}

const reducer = (state: ShowSideFilterState = initialState, action: Action
  ): ShowSideFilterState => {
     switch (action.type) {
        case ActionType.TOGGLE_SIDE_FILTER:
          if(action.payload === "open"){
            return {
              ...state,
              menuStatus: 'open',
              style: 'menu active'
            }
          } else {
            return {
              ...state,
              menuStatus: 'close',
              style: 'menu'
            }
          }  
        default:
          return state;
     } 
}

export default reducer;