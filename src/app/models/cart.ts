import { CartItem } from "./cart-item";

export class Cart {
  public Items: Map<string, CartItem>;

  constructor(items: Map<string, CartItem> = new Map()) {
    this.Items = items;
  }
}