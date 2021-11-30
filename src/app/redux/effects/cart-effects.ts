import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";

import { CartService } from "src/app/services/cart-service";

import { CartActions } from "../actions/cart-actions";

import { Cart } from "src/app/models/cart";

// Effects of Cart Store
@Injectable({providedIn: 'root'})
export class CartEffects {

  // Injected Service and Observable of all Acionts in Store
  constructor(private readonly actions$: Actions,
              private readonly cartService: CartService,) {}

  // Loads cart from API
  public load$ = createEffect(() => this.actions$.pipe(
    // Filter all actions to listen for specific one
    ofType(CartActions.load),
    // Retrieve cart from API
    switchMap((action) => this.cartService.getCart$().pipe(
      tap(() => console.log('Inside Cart Effects')),
      // Map response to another action
      map((map) => CartActions.addRange({cart: new Cart(map)}))
    )),
    // Handle errors - you can map this to another action too
    catchError((error) => EMPTY),
  ))
}