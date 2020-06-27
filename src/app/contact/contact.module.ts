import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports: [
    ContactUsComponent
  ],
  declarations: [ContactUsComponent]
})
export class ContactModule { }
