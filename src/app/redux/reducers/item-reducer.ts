import { createReducer, on } from "@ngrx/store";

import { ItemActions } from "../actions/item-actions";
import { ItemState } from "../states/item-state";

// Reducer aka Business Logic Handler
export class ItemReducer {
  public static initialState: ItemState = {items: []};

  public static reducer = createReducer(
    this.initialState,
    // Handle Action ItemActions.add
    // Takes current state and ItemActions.add action data
    on(ItemActions.add, (state: ItemState, action) => {
      if (state.items.some(i => i.Id === action.item.Id)) {
        // U can return current state without modification
        return state;
      } else {
        // Or you can update state adding new item
        return {...state, items: [...state.items, action.item]};
      }
    }),
    // Another action
    on(ItemActions.addRange, (state, action) => ({items: action.items})),
  )
}