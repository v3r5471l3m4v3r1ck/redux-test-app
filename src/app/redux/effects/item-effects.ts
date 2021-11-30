import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";

import { ItemService } from "src/app/services/item-service";

import { ItemActions } from "../actions/item-actions";

// Effects of Item Store
@Injectable({providedIn: 'root'})
export class ItemEffects {

  // Injected Service and Observable of all Acionts in Store
  constructor(private readonly actions$: Actions,
              private readonly itemService: ItemService,) {}

  // Loads items from API
  public load$ = createEffect(() => this.actions$.pipe(
    // Filter all actions to listen for specific one
    ofType(ItemActions.load),
    // Retrieve items from API
    switchMap((action) => this.itemService.getItems$().pipe(
      tap(() => console.log('Inside Item Effects')),
      // Map response to another action
      map(items => ItemActions.addRange({items}))
    )),
    // Handle errors - you can map this to another action too
    catchError((error) => EMPTY),
  ))
}