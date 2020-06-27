import { Component, OnInit } from '@angular/core';
import { towels } from '../data/productData';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  // towelData = towels;
  categoryName: string;
  constructor(private router: Router, private productServie: ProductService) { }
  // towelData = towels;
  goToProductPage(event) {
    this.categoryName = event.name;
    console.log('Events: ', event.name);
    console.log('this.categoryName: ', this.categoryName);
    // console.log('Details: ', this.towelData);
    // this.productServie.isCurtains = true;
    // this.productServie.
    this.router.navigate(['products'], { queryParams: { 'category': this.categoryName} });
    //this.router.navigateByUrl('/products', { queryParams: { 'category': this.categoryName}});
  }
  ngOnInit() {
  }

}
