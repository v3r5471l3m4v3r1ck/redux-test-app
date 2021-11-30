import { createAction, props } from "@ngrx/store";
import { Item } from "src/app/models/item";

// List of Actions for Item Store
export class ItemActions {
  public static load = createAction('[Item] Load');

  public static add = createAction('[Item] Add',
    props<{item: Item}>());

  public static addRange = createAction('[Item] AddRange',
    props<{items: Item[]}>());
}