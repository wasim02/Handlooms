import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth/signin', component: SignInComponent},
  {path: 'auth/registration', component: RegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
