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
        (item: any) => item.id === newItem.id
        );

      const cartItems = existItem ? state.cart.cartItems.map(
        (item: any) => item.name === existItem.name ? newItem : item) :
        [...state.cart.cartItems, newItem]

      return {...state, cart: {...state.cart, cartItems}}
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