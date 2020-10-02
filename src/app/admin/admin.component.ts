import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../model/services/auth.service';

@Component({
  templateUrl: 'admin.component.html'
})
export class AdminComponent {

  constructor(
              private router: Router) {
  }

  logout() {
    this.router.navigateByUrl('/');
  }
}
