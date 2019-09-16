import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterProductComponent } from './filter-product/filter-product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent
  ],
  declarations: [ProductDetailComponent, ProductListComponent, FilterProductComponent]
})
export class ProductModule { }
