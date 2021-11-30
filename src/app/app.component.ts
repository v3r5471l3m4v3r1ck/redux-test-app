import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { CartStore } from './redux/stores/cart-store';
import { ItemStore } from './redux/stores/item-store';

import { CartActions } from './redux/actions/cart-actions';
import { ItemActions } from './redux/actions/item-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux-test-app';

  constructor(private readonly itemStore: ItemStore,
              private readonly cartStore: CartStore,
              private readonly store: Store) { }

  public ngOnInit(): void {
    // Dispatch action to load items
    this.store.dispatch(ItemActions.load());
    // this.itemStore.load();

    // Dispatch action to load cart
    this.store.dispatch(CartActions.load());
    // this.cartStore.load();
  }
}
