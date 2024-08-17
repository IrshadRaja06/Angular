import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../add-to-card/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe({
        next: (data: any[]) => {
          this.products = data.map(item => ({
            id: item.id,
            name: item.title,
            description: item.description,
            imageUrl: item.image,
            cost: item.price,
            sizeOptions: [] // You might need to adjust this depending on your data
          }));
        },
        error: error => {
          console.error('Error fetching products: ', error);
        }
      });
  }


  selectedSizes: { [id: number]: string } = {}; 
  sizeSelected: { [id: number]: boolean } = {};


  selectSize(size: string, product: Product) {
    this.selectedSizes[product.id] = size;
    this.sizeSelected[product.id] = true; // Set size selected flag
  }
  addToCart(product: Product) {
    // Assuming you have access to username, size, and cost information
    const username = 'example_username'; // Replace with actual username
    const size = this.selectedSizes[product.id]; // Assuming selectedSizes is correctly populated
    const cost = product.cost; // Assuming cost is directly available in the product object
  
    // Pass all required parameters to addToCart method of CartService
    this.cartService.addToCart(product, username, size, cost);
  }
}

