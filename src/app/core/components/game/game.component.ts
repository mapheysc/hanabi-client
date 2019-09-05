import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { MatDialog } from '@angular/material';
import { GiveHintComponent } from './give-hint/give-hint.component';
import { PlayerService } from '../../services/player.service';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  bgs = ['lightblue', 'lightgreen', 'lightpink', '#DDBDF1'];
  game: any = {};
  playerId: number;
  gameId: number;
  gameUpdatedSub: Subscription = null;
  changed = false;
  userId = localStorage.getItem('user_id');

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private playerService: PlayerService,
    private appService: AppService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.getGame(params.id);
      this.playerId = params.playerId;
      this.gameId = params.id;
    });
    this.gameUpdated();
  }

  getGame(gameId) {
    this.game.id = gameId;
    this.gameService.getGame(gameId).subscribe(gameState => {
      this.removePlayerFromGameState(gameState);
      this.game = gameState;
      this.game.id = this.gameId;
    }, err => {
      this.router.navigate(['']);
    });
  }

  gameUpdated() {
    this.gameUpdatedSub = this.appService.onMessage('game_updated').subscribe(res => {
      if (res.id === this.game.id) {
        this.removePlayerFromGameState(res.game);
        this.game = res.game;
        this.game.id = this.gameId;
        this.changed = !this.changed;
      }
    });
  }

  removePlayerFromGameState(gameState) {
    gameState.players.forEach((pl, i) => {
      if (pl.id === Number(this.playerId)) {
        gameState.players.splice(i, 1);
      }
    });
  }

  giveHint(player) {
    const dialogRef = this.dialog.open(GiveHintComponent, {
      width: '250px',
      data: {player}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.playerService.notify({playerId: this.playerId, affected_player: player.id, hint: result}, this.game.id).subscribe(res => {
          this.getGame(this.game.id);
        }, err => {
          this.toastr.error(err.error.message);
        });
      }
    });
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gameService.deleteGame(this.game.id).subscribe(res => {
          this.router.navigate(['/']);
        }, err => {
          this.toastr.error(err.error.message);
        });
      }
    });
  }

}
