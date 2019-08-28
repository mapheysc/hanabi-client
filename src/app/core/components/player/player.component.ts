import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { MatDialog } from '@angular/material';
import { PieceActionComponent } from './piece-action/piece-action.component';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { PieceService } from '../../services/piece.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnChanges {

  @Input() playerId: number;
  @Input() gameId: string;
  @Input() changed: boolean;

  player: any = {};
  playerUpdatedSub: Subscription = null;

  constructor(
    private playerService: PlayerService,
    private appService: AppService,
    private pieceService: PieceService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnChanges() {
    this.playerService.getPlayer(this.playerId, this.gameId).subscribe(player => {
      this.player = player;
    }, err => {
      this.toastr.error(err.error.message);
    });
    this.getPlayerMessages();
  }

  getPlayerMessages() {
    this.playerUpdatedSub = this.appService.onMessage('player_updated').subscribe(res => {
      if (this.player.id === res.player.id) {
        this.player = res.player;
        this.toastr.info('Player ' + res.acting_player + ' gave you a hint.');
      }
    });
  }

  actionOnPiece(piece) {
    const dialogRef = this.dialog.open(PieceActionComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pieceService.actionOnPiece(this.gameId, piece.id, this.playerId, result).subscribe((res: string) => {
          if (res.toLowerCase().includes('successfully')) {
            this.toastr.success(res);
          } else {
            this.toastr.error(res);
          }
        }, err => {
          console.log(err);
          this.toastr.error(err.error.message);
        });
      }
    });
  }

}
