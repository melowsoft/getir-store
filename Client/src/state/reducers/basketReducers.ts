import { ActionType } from "../action-types";
import { Action } from "../actions"
import {BasketPick} from "../interface"

interface BasketState {
  basket: BasketPick[];
  total: number;
}

const initialState = {
  basket: [],
  total: 0
}

const reducer = (state: BasketState = initialState, action: Action
  ): BasketState => {
     switch (action.type) {
        case ActionType.ADD_TO_BASKET:
          //check if the product exists in the basket
          let addedItem = null;
         for (let item of state.basket){
           if(item.name === action.payload.name){
             addedItem = item
           }
         }

         if(!addedItem){
           //create new item for basket
          const newItem = {name: action.payload.name,price: action.payload.price,quantity: 1 }
          //calculating the total
          let newTotal = state.total + action.payload.price; 
          
          return{
              ...state,
              basket: [...state.basket, newItem],
              total : newTotal
          }
         } else {
          addedItem.quantity += 1 
          return{
             ...state,
              total: state.total + addedItem.price 
               }
         };
         case ActionType.REMOVE_FROM_BASKET:
          let removedItem: any;
          for (let item of state.basket){
            if(item.name === action.payload.name){
              removedItem = item
            }
          }
          
          if(removedItem.quantity && removedItem.quantity <= 1){
              const newItems = state.basket.filter(item => item.name !== removedItem.name )
              let newTotal = state.total - removedItem.price
              return{
                ...state,
                basket: newItems,
                total: newTotal
              }
          } else {
            removedItem.quantity -= 1;
            let newTotal = state.total - removedItem.price;
            let newList = [...state.basket]
            const newItems = newList.map(el => el.name === removedItem.name ? {...el, quantity: el.quantity--} : el)
            return {
              ...state,
              basket: newItems,
              total: newTotal
            }
          }
         
        default:
          return state;
     } 
}

export default reducer;