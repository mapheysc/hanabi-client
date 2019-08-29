import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.userService.getUserByName(this.username).subscribe(res => {
      this.toastr.success('Successfully logged you in.');
      this.navigate(res);
    }, err => {
      this.createUser();
    });
  }

  createUser() {
    this.userService.createUser(this.username).subscribe(res => {
      localStorage.setItem('user_id', res);
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
