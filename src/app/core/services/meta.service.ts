import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private appService: AppService
  ) { }

  getGames() {
    return this.appService.get('meta/game');
  }

  getGame(gameId) {
    return this.appService.get('meta/game/' + gameId);
  }
}
