import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

const routes: Routes = [
  { path: 'uploadfile', component: UploadfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
