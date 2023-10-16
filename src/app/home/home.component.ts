import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../Product.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[]=[];
  constructor(private productService: ProductService, private router:Router){}
  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  
}
