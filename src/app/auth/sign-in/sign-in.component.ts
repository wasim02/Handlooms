import { UserService } from './../../services/user.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  login = this.fb.group({
    username: [''],
    password: ['']
  });
  tokenExist: String;

  // Submit Form
  onSubmit(form) {
    // this.user.firstName = form.value.
    console.log('Form ', form);
    this.userService.loginForm(form).subscribe(
      (res) => {
        // this.showSucessMessage = true;
        // setTimeout(() => this.showSucessMessage = false, 4000);
        // this.resetForm(form);
        // console.log('User Object Id: ', res.result.response._id);
        localStorage.setItem('token', res.result.token.toString());
        this.tokenExist = localStorage.getItem('token');
        console.log(this.tokenExist);
        console.log('Response in sign in ', res);
        console.log('First name: ', res.result.user.firstName);
        // console.log('Response in Front end: ', res.result.token);
        // this.username = res.result.response._id;
        // console.log('Username is: ', this.username);
        this.router.navigate(['home']);
      },
      err => {
        console.log('Login unsuccessful', err);
        if (err.status === 422) {
          // this.serverErrorMessages = err.error.join('<br/>');
          console.log('Error ', err);
        }
        else if (err.status === 401) {
          console.log('Invalid username or password ');
        }
        else {
          // this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          console.log(err);
      }
    },
    () => {
      console.log('Login successfull completed ');
    }
    );
  }

  goToRegister() {
    this.router.navigate(['auth/registration']);
  }

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

}
