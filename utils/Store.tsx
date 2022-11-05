import { createContext, useReducer } from 'react';
import React from 'react';

type contextValue = {
  state: any,
  dispatch: React.Dispatch<any>,
}

export const Store = createContext({} as contextValue);

const initialState = {
  cart: { cartItems: [] }
}

function reducer(state: any, action: any) {
  switch(action.type) {

    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item: any) => item.pid === newItem.pid
        );

      const cartItems = existItem ? state.cart.cartItems.map(
        (item: any) => item.pid === existItem.pid ? newItem : item) :
        [...state.cart.cartItems, newItem];

      return {...state, cart: {...state.cart, cartItems: cartItems}}
    }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item: any) => item.pid !== action.payload.pid
      );

      return { ...state, cart: { ...state.cart, cartItems }};
    }

    default:
      return state;
  }
}

export function StoreProvider ({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  
  return <Store.Provider value={value}>{children}</ Store.Provider>
}