import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = [
    {
      id: 1,
      name: 'Premium Rexine Material',
      description: 'High-quality rexine material perfect for furniture upholstery',
      price: 299.99,
      imageUrl: 'assets/images/rexine-1.jpg',
      category: 'Rexine'
    },
    {
      id: 2,
      name: 'Luxury King Size Bed',
      description: 'Elegant king size bed with premium finish',
      price: 899.99,
      imageUrl: 'assets/images/bed-1.jpg',
      category: 'Beds'
    },
    {
      id: 3,
      name: 'Dunlop Foam Mattress',
      description: 'Premium quality foam mattress for ultimate comfort',
      price: 499.99,
      imageUrl: 'assets/images/dunlop-1.jpg',
      category: 'Dunlop'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.products.slice(0, 3));
  }
}
