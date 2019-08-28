import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { GameOptionsComponent } from '../game/game-options/game-options.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  games = [];
  gameCreatedSub: Subscription = null;

  constructor(
    private gameService: GameService,
    private appService: AppService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getGameMessages();
    this.getGames();
  }

  getGameMessages() {
    this.gameCreatedSub = this.appService.onMessage('game_created').subscribe(res => {
      this.games.push(res);
    });
  }

  getGames() {
    this.gameService.getAll().subscribe(games => {
      this.games = games;
    });
  }

  createGame() {
    const dialogRef = this.dialog.open(GameOptionsComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gameService.createGame(result.numPlayers, result.withRainbows, result.gameName).subscribe(gameId => {
          this.router.navigate(['/game/' + gameId + '/0']);
        });
      }
    });
  }

  navToGame(event) {
    const playerId = 0;
    this.router.navigate(['game/' + event.value + '/' + playerId]);
  }

}
