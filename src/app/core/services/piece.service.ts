import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  constructor(
    private appService: AppService
  ) { }

  getPiece(gameId, pieceId) {
    return this.appService.get('piece/' + pieceId + '?game_id=' + gameId);
  }

  actionOnPiece(gameId, pieceId, playerId, action: 'play' | 'discard') {
    return this.appService.post('piece/' + pieceId + '?game_id=' + gameId + '&player_id=' + playerId + '&action=' + action, {});
  }
}
