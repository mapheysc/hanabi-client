import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hanabi-client';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.authService.checkToken().subscribe(() => {
      let attemptedPage = JSON.parse(localStorage.getItem('attemptedPage'));
      if (!attemptedPage) {
        attemptedPage = '';
      } else {
        attemptedPage = attemptedPage.url;
      }
      this.router.navigate([attemptedPage]);
    }, () => {
      this.router.navigate(['/login']);
    });
  }
}
