import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    mobile: [''],
    password: [''],
    confirmPassword: [''],
    gender: ['']
  });

  onSubmit(form) {
    console.log('form', form);
    this.userService.postUser(form)
    .subscribe(
      res => {
        console.log('Registration Response: ', res);
        if(res.status === true) {
          this.router.navigate(['auth/signin']);
        }
      },
      err => {
        if (err.status === 422) {
          console.log('Error 422 ', err);
        } else {
          console.log('Error ', err);
        }
      },
      () => {
        console.log('Registration Completed');
      }
    );
  }
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}
