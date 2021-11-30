import { Injectable } from "@angular/core";

import { delay, Observable, of, tap } from "rxjs";

import { CartItem } from "../models/cart-item";

import { items } from "./item-service";

// Random Integer Generator
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min)) + min;
}

// Mocked Data
const cartItems: Map<string, CartItem> = new Map(
  items.map(
    item => [item.Id, new CartItem(item.Id, getRandomInt(2, 5), item)]
  )
);

// Mocked Service/Repository
@Injectable({providedIn: 'root'})
export class CartService {

  // Mocked API
  public getCart$(): Observable<Map<string, CartItem>> {
    return of(cartItems).pipe(
      delay(2000),
      tap(() => console.log('Inside Cart Service'))
    );
  }
}