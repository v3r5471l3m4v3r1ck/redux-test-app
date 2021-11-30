import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";

import { Item } from "../../models/item";
import { ItemService } from "../../services/item-service";
import { ItemState } from "../states/item-state";

@Injectable({providedIn: 'root'})
export class ItemStore extends ComponentStore<ItemState> {
  constructor(private readonly itemService: ItemService) {
    super({items: []});
  }

  public readonly items$: Observable<Item[]> =
    this.select(state => state.items);

  public load = this.effect(() => this.itemService.getItems$().pipe(
    tap(() => console.log('Inside Item Effect')),
    switchMap(items => {
      this.setState({items: items});

      return EMPTY;
    }),
    catchError(() => EMPTY),
  ));

  public add = this.updater((state, item: Item) => {
    console.log('Add Item', item);

    if (state.items.some(i => i.Id === item.Id)) {
      return state;
    } else {
      return {...state, items: [...state.items, item]};
    }
  });
}