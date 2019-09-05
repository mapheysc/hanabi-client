import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor(
    private appService: AppService
  ) { }

  createGame(numPlayers: number, withRainbow: boolean = false, gameName: string = null) {
    return this.appService.post(
      'game', {
        num_players: numPlayers,
        with_rainbow: withRainbow,
        game_name: gameName
      });
  }

  getGame(gameId: number) {
    return this.appService.get('game/' + gameId);
  }

  deleteGame(gameId) {
    return this.appService.delete('game/' + gameId);
  }

  getAll() {
    return this.appService.get('game');
  }
}
