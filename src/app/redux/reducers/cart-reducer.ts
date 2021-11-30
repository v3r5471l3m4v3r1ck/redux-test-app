import { createReducer, on } from "@ngrx/store";

import { Cart } from "src/app/models/cart";
import { CartItem } from "src/app/models/cart-item";
import { CartActions } from "../actions/cart-actions";
import { CartState } from "../states/cart-state";

// Reducer aka Business Logic Handler
export class CartReducer {
  public static initialState: CartState = {cart: new Cart()};

  public static reducer = createReducer(
    this.initialState,
    // Handle Action CartActions.add
    // Takes current state and CartActions.add action data
    on(CartActions.add,
        (state: CartState, action) => {
      // It is considered good practice to treat data as immutable
      const map = new Map<string, CartItem>(state.cart.Items);

      // Retrieve existing item from cart
      const cartItem = map.get(action.item.Id)
        ??
        new CartItem(action.item.Id, 0, action.item);

      // Increset item amount in cart
      cartItem.Amount++;
      // And recalculate total cost
      cartItem.TotalAmount = cartItem.Amount * cartItem.Item.Price;

      // Update Map with new cart item - overwriting existing one
      map.set(action.item.Id, cartItem);

      // Reterun updated Cart State
      return {cart: new Cart(map)};
    }),
    // Another action
    on(CartActions.addRange,
        (state: CartState, action) => ({cart: new Cart(action.cart.Items)})),
    // Another action
    on(CartActions.remove,
        (state: CartState, action) => {
      const map = new Map<string, CartItem>(state.cart.Items);

      if (map.has(action.id)) {
        map.delete(action.id);
      }

      return {cart: new Cart(map)};
    }),
    // Another action
    on(CartActions.increment,
        (state: CartState, action) => {
      const map = new Map<string, CartItem>(state.cart.Items);

      if (!map.has(action.id)) {
        return state;
      }

      const cartItem = map.get(action.id)!;

      cartItem.Amount++;
      cartItem.TotalAmount = cartItem.Amount * cartItem.Item.Price;

      map.set(action.id, cartItem);

      return {cart: new Cart(map)};
    }),
    // Another action
    on(CartActions.decrement,
        (state: CartState, action) => {
      const map = new Map<string, CartItem>(state.cart.Items);

      if (!map.has(action.id)) {
        return state;
      }

      const cartItem = map.get(action.id)!;

      cartItem.Amount--;
      cartItem.TotalAmount = cartItem.Amount * cartItem.Item.Price;

      if (cartItem.Amount <= 0) {
        map.delete(action.id);
      } else {
        map.set(action.id, cartItem);
      }

      return {cart: new Cart(map)};
    }),
  )
}