import { createContext, useReducer } from 'react';
import React from 'react';
import Cookies from 'js-cookie';

type contextValue = {
  state: any,
  dispatch: React.Dispatch<any>,
}

export const Store = createContext({} as contextValue);

const initialState = {
  cart: Cookies.get('cart') !== undefined ? JSON.parse(Cookies.get('cart') as string) : 
    { cartItems: [] }
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

      Cookies.set('cart', JSON.stringify({...state.cart, cartItems: cartItems}))
      return {...state, cart: {...state.cart, cartItems: cartItems}}
    }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item: any) => item.pid !== action.payload.pid
      );
      
      Cookies.set('cart', JSON.stringify({...state.cart, cartItems: cartItems}))
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