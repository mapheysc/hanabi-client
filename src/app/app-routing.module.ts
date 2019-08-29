import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './core/components/game/game.component';
import { LoginComponent } from './core/components/login/login.component';
import { GamesComponent } from './core/components/game/games/games.component';
import { UserComponent } from './core/components/user/user.component';


const routes: Routes = [
  { path: 'game', component: GamesComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'game/:id/:playerId', component: GameComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
