import { towels, curtains, duvets, bedsheets, rugs, blankets } from './../../data/productData';

import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  displayData: Product[] = [];
  categoryType: string;
  ngOnInit() {
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
  } */
  }
}
