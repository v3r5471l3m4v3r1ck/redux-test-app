import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

import { catchError, EMPTY, map, Observable, switchMap, tap } from "rxjs";

import { Cart } from "src/app/models/cart";
import { CartItem } from "../../models/cart-item";
import { Item } from "../../models/item";
import { CartService } from "../../services/cart-service";
import { CartState } from "../states/cart-state";

@Injectable({providedIn: 'root'})
export class CartStore extends ComponentStore<CartState> {
  constructor(private readonly cartService: CartService) {
    super({cart: new Cart()});
  }

  public readonly cart$: Observable<Map<string, CartItem>> =
    this.select(state => state.cart.Items);

  public readonly items$: Observable<CartItem[]> =
    this.select(state => [...state.cart.Items.values()]);

  public load = this.effect(() => this.cartService.getCart$().pipe(
    tap(() => console.log('Inside Cart Effect')),
    switchMap((map) => {
      this.setState({cart: new Cart(map)});

      return EMPTY;
    }),
    catchError(() => EMPTY),
  ));

  public add = this.updater((state, item: Item) => {
    console.log('Add CartItem', item);

    const map = new Map<string, CartItem>(state.cart.Items);
    const cartItem = map.get(item.Id) ?? new CartItem(item.Id, 0, item);

    cartItem.Amount++;
    cartItem.TotalAmount = cartItem.Amount * cartItem.Item.Price;

    map.set(item.Id, cartItem);

    return {cart: new Cart(map)};
  });

  public remove = this.updater((state, id: string) => {
    console.log('Remove CartItem', id);

    const map = new Map<string, CartItem>(state.cart.Items);

    if (map.has(id)) {
      map.delete(id);
    }

    return {cart: new Cart(map)};
  });

  public increment = this.updater((state, id: string) => {
    console.log('Increment CartItem', id);

    const map = new Map<string, CartItem>(state.cart.Items);

    if (!map.has(id)) {
      return state;
    }

    const cartItem = map.get(id)!;

    cartItem.Amount++;
    cartItem.TotalAmount = cartItem.Amount * cartItem.Item.Price;

    map.set(id, cartItem);

    return {cart: new Cart(map)};
  });

  public decrement = this.updater((state, id: string) => {
    console.log('Decrement CartItem', id);

    const map = new Map<string, CartItem>(state.cart.Items);

    if (!map.has(id)) {
      return state;
    }

    const cartItem = map.get(id)!;

    cartItem.Amount--;
    cartItem.TotalAmount = cartItem.Amount * cartItem.Item.Price;

    if (cartItem.Amount <= 0) {
      map.delete(id);
    } else {
      map.set(id, cartItem);
    }

    return {cart: new Cart(map)};
  });
}