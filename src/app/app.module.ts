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
    RegistrationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
