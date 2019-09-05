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
  }

  login() {
    this.authService.checkToken().subscribe(res => {
      this.toastr.success('Successfully logged you in.');
      this.navigate(res);
    }, err => {
      console.log(err);
      this.createUser();
    });
  }

  createUser() {
    this.authService.authUser(this.username).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.toastr.success('Successfully created user.');
      this.router.navigate(['/game']);
    }, err => {
      this.toastr.error(err.error.message);
    });
  }

  navigate(user) {
    if (user.owns.length > 0) {
      const gameId = user.owns[user.owns.length - 1].game;
      const playerId = user.owns[user.owns.length - 1].player_id;
      this.router.navigate(['/game/' + gameId + '/' + playerId]);
    } else if (user.games.length > 0) {
      const gameId = user.games[user.games.length - 1].game;
      const playerId = user.games[user.games.length - 1].player_id;
      this.router.navigate(['/game/' + gameId + '/' + playerId]);
    } else {
      this.router.navigate(['/game']);
    }
  }

}
