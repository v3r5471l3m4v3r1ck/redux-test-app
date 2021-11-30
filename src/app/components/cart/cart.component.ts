import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Item } from 'src/app/models/item';
import { CartItem } from 'src/app/models/cart-item';
import { CartStore } from 'src/app/redux/stores/cart-store';
import { CartActions } from 'src/app/redux/actions/cart-actions';
import { CartSelectors } from 'src/app/redux/selectors/cart-selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public items$: Observable<CartItem[]>;

  constructor(private readonly cartStore: CartStore,
              private readonly store: Store) {
    this.items$ = this.store.select(CartSelectors.items);
  }

   public remove(item: Item) {
    this.store.dispatch(CartActions.remove({id: item.Id}));

    // this.cartStore.remove(item.Id);
  }

  public increment(item: Item) {
    this.store.dispatch(CartActions.increment({id: item.Id}));

    // this.cartStore.increment(item.Id);
  }

  public decrement(item: Item) {
    this.store.dispatch(CartActions.decrement({id: item.Id}));

    // this.cartStore.decrement(item.Id);
  }
}
