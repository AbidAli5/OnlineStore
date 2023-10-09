import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  products: Product[]=[];
  constructor(private productService: ProductService, private router:Router){}
  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  navigateToProductDetails(productId: number) {
    this.router.navigate([`/Shop/:${productId}`]);
  }

}
