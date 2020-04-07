import { EventEmitter } from "protractor";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";

export class OrderService {
  product1 = new Product("1", "Cheese", 3);
  product2 = new Product("2", "Fanta", 4);
  private productsList: Product[] = [this.product1];

  private orders: Order[] = [
    new Order("1", this.productsList, 1, new Date(Date.now())),
    new Order("2", this.productsList, 2, new Date(Date.now())),
  ];

  getOrders(): Order[] {
    return this.orders.slice();
  }

  orderss = [
    {
      name: "Tafel 1",
      products: [new Product("1", "Cheese", 3), new Product("54", "Bread", 3)],
    },
    {
      name: "Tafel 2",
      products: [
        new Product("6", "Chocolate cake", 3),
        new Product("22", "Banana", 3),
      ],
    },
  ];
}
