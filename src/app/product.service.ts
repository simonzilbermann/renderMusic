import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './mock-products';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productLength: number;

  constructor() { }

  getProducts():Observable<Products[]>{
    this.productLength = PRODUCTS.length;
    return of (PRODUCTS);
  }

  getProduct(id: number): Observable<Products>{
    this.productLength = PRODUCTS.length;
    return of (PRODUCTS.find(product => product.id === id));
  }
  
}
