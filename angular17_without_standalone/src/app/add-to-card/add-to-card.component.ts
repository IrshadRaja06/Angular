import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCartComponent {
  @Input() product!: Product;
  selectedSize: string | undefined;
  cardState = 'out';
  constructor(public cartService: CartService) {}

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    this.cartService.updateTotalCost();
  }
}

    
