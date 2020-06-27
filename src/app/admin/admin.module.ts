import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UploadfileComponent]
})
export class AdminModule { }
