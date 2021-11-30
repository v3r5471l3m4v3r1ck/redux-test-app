import { createAction, props } from "@ngrx/store";

import { Cart } from "src/app/models/cart";
import { Item } from "src/app/models/item";

// List of Actions for Cart Store
export class CartActions {
  public static load = createAction('[Cart] Load');

  public static addRange = createAction('[Cart] AddRange',
    props<{cart: Cart}>());

  public static add = createAction('[Cart] Add',
    props<{item: Item}>());

  public static remove = createAction('[Cart] Remove',
    props<{id: string}>());

  public static increment = createAction('[Cart] Increment',
    props<{id: string}>());

  public static decrement = createAction('[Cart] Decrement',
    props<{id: string}>());
}