import { towels } from './../data/productData';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

// RXJS
import { Observable, throwError, pipe, of, Subject, BehaviorSubject } from 'rxjs';
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

  // Add to Cart Items
  cartItems: any = [];

  // userDataSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  // userData = this.userDataSource.asObservable();

  subject = new BehaviorSubject<any[]>([]);

  uri = 'http://localhost:3000';

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
  // getCount() {
  //   // return of(this.cart.length);
  //   return this.subject.asObservable();
  // }
  getProducts() {
    // return this.subject.asObservable();

    // Getting products from localStorage
    return of(this.cartItems);
  }

  addToCart(product) {
    // this.cart.push(product);
    // console.log('From addToCart', product);
    // const curValue = this.subject.value;
    // const newValue = [...curValue, product];
    // this.subject.next(newValue);

    // Adding product to localStorage Cart
    if (localStorage.getItem('products')) {
      this.cartItems = JSON.parse(localStorage.getItem('products'));
    }
    this.cartItems.push(product);
    localStorage.setItem('products', JSON.stringify(this.cartItems));

    // const currentValue = this.userDataSource.value;
    // const updatedValue = [...currentValue, dataObj];
    // this.userDataSource.next(updatedValue);
  }

  // Remove from Cart
  removeFromCart(productId) {
    // Filter operation
    // this.subject.next(this.cartItems);
    // Parsing and deleting product from localStorage
    const storageItems = JSON.parse(localStorage.getItem('products'));
    console.log('Before storage', storageItems);
    console.log('Before ', this.cartItems);
    this.cartItems = storageItems.filter(product => product['_id'] !== productId);
    localStorage.setItem('products', JSON.stringify(this.cartItems));
    console.log('After ', this.cartItems);
    console.log('After storage', localStorage.getItem('products'));
    return of(this.cartItems);
  }
}
