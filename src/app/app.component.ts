import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Handlooms';
  count: number;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getCount()
    // .subscribe(
    //   data => this.count = data,
    //   err => console.log(err)
    // );
  }
}
