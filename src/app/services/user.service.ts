import { Injectable } from '@angular/core';
import { User } from '../models/user';

// RXJS
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  uri = 'http://localhost:3000';
  private isAuthenticated = false;
  private user: any;
  private firstName: String;
  // Login Form Service
  loginForm(form): Observable<any> {
    console.log('Form value: ', form);
    return this.http.post(this.uri + '/users/login', form, {
      withCredentials: true
    })
    .pipe(
      map(
        (res) => {
          // Do not use res.json(). It wil give error. Please Don't
          // console.log('Login Request ', res);
          // console.log('Inside Post Service ');

          // Getting user's data
          // this.user = res;
          // console.log('this.user is', this.user);
          // withCredentials: true;
          console.log('Response in service: ', res);
          this.isAuthenticated = true;
          console.log('First name before ', this.user);
          this.user = res.user;
          console.log('user: ', this.user);
          // console.log('First name: ', t);
          return { success: true, result: res };
        }
      ),
      catchError(err => {
        console.error('Unauthorized user ', err.message);
        return throwError(err);
      })
    );
  }

  getUser() {
    return this.user;
  }

  // Sign Up
  postUser(user: User): Observable<any> {
    console.log('User available', user);
    const authData: User = {
      firstName: user.firstName, lastName: user.lastName, email: user.email, username: user.email, gender: user.gender,
      password: user.password, contactNumber: user.contactNumber };
    return this.http.post(this.uri + '/users/signup', authData)
    .pipe(
      map((res: Response) => {
        console.log('Response: ', res);
        return { status: res.status };
      }),
      catchError(error => {
        console.log('Error in catchError: ', error);
        return throwError(error);
      })
    );
  }

  // Logout
  logout(): Observable<any> {
    // console.log('H');
    return this.http.get(this.uri + '/users/logout', { withCredentials: true })
    .pipe(
      map(
        res => {
          this.isAuthenticated = false;
          console.log('Logout ', res);
          return { success: true };
        }
      ),
      catchError(err => {
        console.error('Unable to logout ', err.message);
        return throwError(err);
      })
    );
  }


}
