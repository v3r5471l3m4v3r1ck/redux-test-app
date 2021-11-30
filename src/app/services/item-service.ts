import { Injectable } from "@angular/core";

import { delay, Observable, of, tap } from "rxjs";

import { Item } from "../models/item";

// Mocked Data
export const items: Item[] = [
  new Item('0', 'Gabe', 99999999999999),
  new Item('1', 'Zielone', 11.99),
  new Item('2', 'Mountain Dew', 2.99),
  new Item('3', 'Doritos', 3.99),
]

// Mocked Service/Repository
@Injectable({providedIn: 'root'})
export class ItemService {

  // Mocked API
  public getItems$(): Observable<Item[]> {
    return of(items).pipe(
      delay(1000),
      tap(() => console.log('Inside Item Service'))
    );
  }
}