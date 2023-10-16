import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products : Product[]=[]
  private apiUrl =
    'https://fakestoreapi.com/products';

  constructor(private http : HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductDetails(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }
  addToCart(product: Product){
    this.products.push(product);
  }
}
