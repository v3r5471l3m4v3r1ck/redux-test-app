import { Item } from "./item";

export class CartItem {
  public Id: string;
  public Amount: number;
  public TotalAmount: number;
  public Item: Item;

  constructor(id: string, amount: number, item: Item) {
    this.Id = id;
    this.Amount = amount;
    this.TotalAmount = amount * item.Price;
    this.Item = item;
  }
}