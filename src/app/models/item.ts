export class Item {
  public Id: string;
  public Name: String;
  public Price: number;

  constructor(id: string, name: string, price: number) {
    this.Id = id;
    this.Name = name;
    this.Price = price;
  }
}