import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Item } from 'src/app/models/item';
import { CartActions } from 'src/app/redux/actions/cart-actions';
import { CartStore } from 'src/app/redux/stores/cart-store';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input()
  public item!: Item;

  constructor(private readonly cartStore: CartStore,
              private readonly store: Store,) { }

  public add() {
    this.store.dispatch(CartActions.add({item: this.item}));

    // this.cartStore.add(this.item);
  }
}
