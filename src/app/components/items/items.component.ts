import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Item } from 'src/app/models/item';
import { ItemSelector } from 'src/app/redux/selectors/item-selectors';
import { ItemStore } from 'src/app/redux/stores/item-store';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  public items$: Observable<Item[]>;

  constructor(private readonly itemStore: ItemStore,
              private readonly store: Store,) {
    this.items$ = this.store.select(ItemSelector.items);

    // this.items$ = this.itemStore.items$;
  }
}
