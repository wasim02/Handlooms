import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductModule } from './product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './services/product.service';
import { ContactModule } from './contact/contact.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

import { FlashMessagesModule } from 'angular2-flash-messages';


const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth/signin', component: SignInComponent},
  {path: 'auth/registration', component: RegistrationComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    RegistrationComponent,
    FooterComponent,
    CartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    ContactModule,
    AdminModule,
    RouterModule.forRoot(ROUTES, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
