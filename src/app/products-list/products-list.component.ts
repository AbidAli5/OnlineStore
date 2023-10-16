import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product.model';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  products: Product[]=[];
  constructor(private productService: ProductService, private router:Router,private cartService : CartService){}
  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  onAdded(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product is added in Cart');
  }

}
