import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItem();
  selectedQuantity: number = 1; // Initialize with a default quantity
  unitPrice: number = 0; // Set the unit price of the item
  totalPrice = 0;
  constructor(private cartService: CartService) {}

  onAdded(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product is added in Cart');
  }
  updatePrice(e: any, item: Product) {
    console.log(e);
    this.items.map((product: Product) => {
      if (item.id === product.id) {
        product.quantity = e.targert.value;
      }
    });
    // Calculate the total price based on the selected quantity and unit price
    this.totalPrice = this.selectedQuantity * this.unitPrice;
  }
}
