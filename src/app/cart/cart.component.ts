import { ProductService } from './../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { Subscription } from 'rxjs';
import config from 'src/config';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit, OnDestroy {
  cart = [];
  productSub: Subscription;
  url = config.uri;
  count = 0;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productSub = this.productService.getProducts().subscribe(product => {
      console.log('Product in cart ', product);
      console.log('Cart', this.cart);
      this.cart.push(...product);
    });
  }

  ngOnDestroy() {
    // this.productSub.unsubscribe();
  }

  removeProductFromCart(product) {
    // console.log('Product Id in cart ', product._id);
    // console.log('type ', typeof product._id);
    // this.cart = this.cart.filter(product1 => product1._id !== product._id);
    // console.log('after filter ', this.cart);

    // Calling service and removing product from cart
    this.productService.removeFromCart(product['_id'])
    .subscribe(
      products => {
        console.log('value after removing ', products);
        this.cart = products;
      },
      error => console.error(error),
      () => console.log('Remove operation completed')
    );
  }

}
