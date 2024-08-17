export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  cost: number; // Cost of the product in Indian Rupees
  sizeOptions?: string[]; // Available size options for the product (optional)
}
