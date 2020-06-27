import { AdminService } from './../../services/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.sass']
})
export class UploadfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private adminService: AdminService) { }
  selectedFile: File;
  productForm = this.fb.group({
    name: [''],
    price: [''],
    stock: [''],
    title: [''],
    description: [''],
    category: [''],
    image: ['']
  });

  onSubmit(form) {
    const formData = new FormData();
    console.log('onSubmit Selected File ', );
    console.log
    formData.append('image', this.selectedFile, this.selectedFile.name);
    formData.append('name', this.productForm.get('name').value);
    formData.append('price', this.productForm.get('price').value);
    formData.append('stock', this.productForm.get('stock').value);
    formData.append('title', this.productForm.get('title').value);
    formData.append('description', this.productForm.get('description').value);
    formData.append('category', this.productForm.get('category').value);
    console.log('Form Data ', formData);

    this.adminService.addProduct(formData)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err),
      () => console.log('Completed')
    );
    // console.log(JSON.stringify(this.productForm.get('image')));
    // console.log('Form Data: ', formData.get('image'));
    // const imageFile = formData.get('image');
    // console.log('product form: ', this.productForm['name']);
    // formData.append('data', this.productForm['name']);
    /* console.log(form);
    this.adminService.addProduct(form).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('File successfully uploaded');
      }
    ) */
  }
  onFileChanged(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      console.log('Selecte File ', this.selectedFile);
      // console.log(this.productForm.get('image').setValue(this.selectedFile));
      // console.log(this.productForm.get('image').value);
    }
  }

  ngOnInit() {
  }

}
