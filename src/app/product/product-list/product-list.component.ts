import { Observable } from 'rxjs';
import { towels, curtains, duvets, bedsheets, rugs, blankets } from './../../data/productData';

import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,
    private flashMessage: FlashMessagesService) { }
  displayData: Product[] = [];
  categoryType: string;
  productObservable;
  ngOnInit() {
    // Calling Service
    this.route.queryParams
    .subscribe(params => {
      this.categoryType = params.category;
    });

    if (this.categoryType === 'Pillowcases') {
      this.productService.getPillows()
      .subscribe(
        (res) => {
          this.productObservable = res.res;
          console.log('Res', this.productObservable);
        },
        err => console.log('Error ', err),
        () => console.log('Completed')
      );
    }
    else if (this.categoryType === 'curtain') {
      this.displayData = curtains;
    } else if (this.categoryType === 'rug') {
      this.displayData = rugs;
    } else if (this.categoryType === 'bedsheet') {
      this.displayData = bedsheets;
    } else if (this.categoryType === 'duvet') {
      this.displayData = duvets;
    } else if (this.categoryType === 'blanket') {
      this.displayData = blankets;
    } else {
      console.log('No category match ');
    }

    // End of calling
    this.displayData = towels;
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.categoryType = params.category;
      console.log('Category Type: ', this.categoryType);
    });
    if (this.categoryType === 'bath') {
      this.displayData = towels;
    } else if (this.categoryType === 'curtain') {
      this.displayData = curtains;
    } else if (this.categoryType === 'rug') {
      this.displayData = rugs;
    } else if (this.categoryType === 'bedsheet') {
      this.displayData = bedsheets;
    } else if (this.categoryType === 'duvet') {
      this.displayData = duvets;
    } else if (this.categoryType === 'blanket') {
      this.displayData = blankets;
    } else {
      console.log('No category match ');
    }
    /* if (this.productService.isCurtains) {
      this.productService.showCurtains().subscribe(
        res => console.log(res),
        error => console.log('Error ', error),
        () => console.log('Finished')
      );
    }
  } */ // name, description, price size , image color
  }
  goToDetail(towel) {
    console.log('Product: ', towel);
    this.router.navigate(['products/great'], {queryParams: {name: towel.name}});
  }

  addToCart(product: Product) {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    // Adding the product to cart
    this.productService.addToCart(product);
    // this.flashMessage.show('Product added to your cart', { cssClass: 'alert-success', timeout: 2000 });
    // this.flashMessage.grayOut(true);
  }
}
