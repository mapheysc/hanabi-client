import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private appService: AppService
  ) { }

  getUser(userId) {
    return this.appService.get('user/' + userId);
  }

  getUserByName(username) {
    return this.appService.get('user?player_name=' + username);
  }

  createUser(username = '') {
    return this.appService.post('user?player_name=' + username, {});
  }

  joinGame(userId, gameId) {
    return this.appService.put('user/' + userId + '?meta_game_id=' + gameId);
  }

  updateUser(userId, own = null, gameId = null) {
    let url = 'user/' + userId;
    if (own !== null) {
      url += '?own=' + own;
    } else if (gameId !== null) {
      url += '?game_id=' + own;
    } else {
      throw Error('own or gameId must be supplied to update a user');
    }
    return this.appService.put(url, {});
  }
}
