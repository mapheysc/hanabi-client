import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private appService: AppService
  ) { }

  getPlayer(playerId, gameId) {
    return this.appService.get('player/' + playerId + '?game_id=' + gameId);
  }

  notify(hint, gameId) {
    return this.appService.post(
      'player/' + hint.playerId + '?hint=' + hint.hint + '&game_id=' + gameId + '&affected_player=' + hint.affected_player, {}
      );
  }
}
