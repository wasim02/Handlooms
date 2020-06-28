import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import config from '../../../config';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  product: any;
  ngOnInit() {
    console.log('Config ', config);
    this.route.params
    .subscribe(product => {
      console.log(product);
      const id = product.id;
      console.log(typeof id);
      this.productService.getPillowById(id)
      .subscribe(
        data => this.product = data.product,
        err => console.error('Error ', err),
        () => console.log('Fetched the product')
      );
      // this.categoryType = params.category;
      console.log('Product: ', product);
    });
  }

}
