import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  goToRegister() {
    this.router.navigate(['auth/registration']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
