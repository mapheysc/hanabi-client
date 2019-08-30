import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  usersGames = [];
  userId = localStorage.getItem('user_id');

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private gameService: GameService,
    private toastr: ToastrService,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.getUser(params.id);
    });
  }

  getUser(userId) {
    this.userService.getUser(userId).subscribe(res => {
      this.user = res;
      this.user.id = userId;
      this.user.games.forEach(game => {
        this.gameService.getGame(game.game).subscribe(r => {
          this.usersGames.push({owns: false, player_id: game.player_id, game: r});
        });
      });
      this.user.owns.forEach(game => {
        this.gameService.getGame(game.game).subscribe(r => {
          this.usersGames.push({owns: true, player_id: game.player_id, game: r});
        });
      });
    }, err => {
      this.toastr.error('Oops, there was an error retrieving the user');
      this.location.back();
    });
  }

  joinGame(game) {
    this.userService.joinGame(localStorage.getItem('user_id'), game._id).subscribe(res => {
      this.toastr.success('You were successfully added to the game.');
      this.router.navigate(['/game/' + game.game_id + '/' + game.players.length]);
    }, err => {
      this.toastr.error(err.error.message);
    });
  }

}
