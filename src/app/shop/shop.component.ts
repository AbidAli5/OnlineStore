import { Product } from './../Product.model';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = +params['id']; // Get the product ID from the route parameter
      // Fetch the product details using the ID
      this.productService.getProductDetails(productId).subscribe((product) => {
        this.product = product;
      });
    });
  }
  onAdded(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product is added in Cart');
  }
}
