import { towels } from './../data/productData';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isCurtains = false;
  isBath = false;
  isRugs = false;
  isBedsheets = false;
  isDuvets = false;
  isBlankets = false;
  constructor() { }

  //

  showCurtains() {
    this.isBath = this.isRugs = this.isBedsheets = this.isDuvets = this.isBlankets = false;
    this.isCurtains = true;
    return { res: towels };
  }
  showBath() {

  }
  showRugs() {

  }
  showBedsheets() {

  }
  showDuvets() {

  }

  showBlankets() {

  }


}
