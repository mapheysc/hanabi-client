import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetaService } from 'src/app/core/services/meta.service';
import { Subscription } from 'rxjs';
import { GameOptionsComponent } from '../game-options/game-options.component';
import { GameService } from 'src/app/core/services/game.service';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnDestroy {

  games = [];
  gameCreatedSub: Subscription = null;
  gameDeletedSub: Subscription = null;
  userId = localStorage.getItem('user_id');

  constructor(
    private metaService: MetaService,
    private gameService: GameService,
    private appService: AppService,
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.metaService.getGames().subscribe(res => {
      this.games = res;
    });
    this.getGameMessages();
  }

  ngOnDestroy() {
    this.gameCreatedSub.unsubscribe();
    this.gameDeletedSub.unsubscribe();
  }

  getGameMessages() {
    this.gameCreatedSub = this.appService.onMessage('game_created').subscribe(res => {
      this.games.push(res);
    });
    this.gameDeletedSub = this.appService.onMessage('game_deleted').subscribe(gameId => {
      this.games.splice(this.games.indexOf(game => game.game_id === gameId));
    });
  }

  getGames() {
    this.gameService.getAll().subscribe(games => {
      this.games = games;
    });
  }

  playerInGame(game) {
    for (const [i, player] of game.players.entries()) {
      if (player._id === this.userId) {
        return i;
      }
    }
    return false;
  }

  createGame() {
    const dialogRef = this.dialog.open(GameOptionsComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gameService.createGame(result.numPlayers, result.withRainbows, result.gameName).subscribe(gameId => {
          this.router.navigate(['/game/' + gameId + '/0']);
        }, err => {
          this.toastr.error('Must be signed in to create game.');
        });
      }
    });
  }

  navToGame(event) {
    const playerId = 0;
    this.router.navigate(['game/' + event.value + '/' + playerId]);
  }

  joinGame(game) {
    console.log(game);
    this.userService.joinGame(localStorage.getItem('user_id'), game._id).subscribe(res => {
      this.toastr.success('You were successfully added to the game.');
      this.router.navigate(['/game/' + game.game_id + '/' + game.players.length]);
    }, err => {
      this.toastr.error(err.error.message);
    });
  }

}
