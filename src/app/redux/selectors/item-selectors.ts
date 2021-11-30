import { createSelector } from "@ngrx/store";

import { ItemState } from "../states/item-state";

// Selectors for Item Store
export class ItemSelector {

  // Selects Item[] from Item Store
  public static items = createSelector(
    (state: any) => state.items,
    (state: ItemState) => state.items,
  )
}