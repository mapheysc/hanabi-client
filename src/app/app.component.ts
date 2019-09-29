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
  onLogin = false;
  currentUser = localStorage.getItem('currentUser');

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((res: any) => {
      this.onLogin = false;
      if (res.url === '/login') {
        this.onLogin = true;
      }
    });
  }
}
