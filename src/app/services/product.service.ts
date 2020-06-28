import { towels } from './../data/productData';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

// RXJS
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
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

  uri = 'http://localhost:3000';


  count = 0;

  constructor(private http: HttpClient) { }
  getPillows() {
    return this.http.get(this.uri + '/products')
    .pipe(
      map(res => {
        console.log('Response ', res);
        return { res: res };
      }),
      catchError(error => {
        console.log('Error ', error);
        return throwError(error);
      })
    );
  }

  getPillowById(id) {
    console.log(id);
    const productId = id;
    return this.http.get(this.uri + '/products/' + productId, { withCredentials: true })
    .pipe(
      map(res => {
        console.log('Response from pillowbyid ', res);
        return { product: res};
      }),
      catchError(error => throwError(error))
    );
  }

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

  // Add to cart Count
  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count += 1;
  }


}
