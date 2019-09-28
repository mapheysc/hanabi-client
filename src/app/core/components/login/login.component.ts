import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.authService.checkToken().subscribe(res => {
      this.toastr.success('Successfully logged you in.');
      let attemptedPage = JSON.parse(localStorage.getItem('attemptedPage'));
      if (!attemptedPage) {
        attemptedPage = '';
      } else {
        attemptedPage = attemptedPage.url;
      }
      this.router.navigate([attemptedPage]);
    }, err => {
      this.createUser();
    });
  }

  createUser() {
    this.authService.authUser(this.username).subscribe(res => {
      const payload = JSON.parse(window.atob(res.token.split('.')[1]));
      localStorage.setItem('currentUser', payload.identity);
      localStorage.setItem('token', res.token);
      this.toastr.success('Successfully created user.');
      this.router.navigate(['/game']);
    }, err => {
      this.toastr.error(err.error.message);
    });
  }

}
