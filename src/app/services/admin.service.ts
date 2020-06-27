import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:3000';

  /* addProduct(form) {
    console.log('Form ', form);
    // console.log('Image: ', form.image);
    return this.http.post(this.uri + '/products', { form: form, 'image': form.image}, { withCredentials: true })
    .pipe(
      map((res: Response) => {
        console.log('Response: ', res);
        return { res };
      }),
      catchError(error => {
        console.log('Error in catch Error admin Service: ', error);
        return throwError(error);
      })
    );
  } */
  addProduct(form: FormData) {
    console.log('Form ', form.get('image'));
    // console.log('FormGroup: ', formgroup);
    console.log('hdd');
    return this.http.post(this.uri + '/products', form)
    .pipe(
      map(res => {
        console.log('Response ', res);
        return { success: true };
      }),
      catchError(error => {
        console.log('Error ', error);
        return throwError(error);
      })
    );
  }
}
