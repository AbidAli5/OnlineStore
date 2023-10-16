import { Injectable } from '@angular/core';
import { Product } from './Product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
product : Product[]=[]
  constructor(private http : HttpClient) { }
  getItem(){
    return this.product;
  }
  addToCart(product: Product){
    this.product.push(product);
  }
  clearCart(){
    this.product=[]
    return this.product
  }
}
