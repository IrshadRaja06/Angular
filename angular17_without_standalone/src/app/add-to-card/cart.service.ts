import { Injectable } from '@angular/core';
import { Product } from '../product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  cartItems: Product[] = [];
  totalCost: number = 0;

  addToCart(item: Product, username: string, size: string, cost: number): void {
    this.cartItems.push(item);
    this.totalCost += item.cost;

    // Send HTTP POST request to add the item to the cart
    this.http.post<any>('http://localhost:3000/cart/add', { username, productName: item.name, size, cost }).subscribe({
      next: (response) => {
        console.log('Item added to cart:', response);
        // Optionally, you can handle success actions here
      },
      error: (error) =>  {
        console.error('Error adding item to cart:', error);
        // Optionally, you can handle error actions here
      }
    });
  }

  removeFromCart(item: Product): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateTotalCost();
    }
  }

  updateTotalCost(): void {
    this.totalCost = this.cartItems.reduce((total, item) => total + item.cost, 0);
  }
}
