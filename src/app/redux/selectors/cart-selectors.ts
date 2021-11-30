import { createSelector } from "@ngrx/store";

import { CartState } from "../states/cart-state";

export class CartSelectors {

  // Selects Item[] from Cart Store
  public static items = createSelector(
    (state: any) => state.cart,
    (state: CartState) => [...state.cart.Items.values()],
  )
}