import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  product:Product | undefined;
  constructor(private productService: ProductService, private route:ActivatedRoute){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Get the product ID from the route parameter
      // Fetch the product details using the ID
      this.productService.getProductDetails(productId).subscribe(product => {
        this.product=product;
      });
    });
  }

}
