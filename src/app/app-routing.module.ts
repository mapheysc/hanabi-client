import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './core/components/game/game.component';
import { LoginComponent } from './core/components/login/login.component';
import { GamesComponent } from './core/components/game/games/games.component';
import { UserComponent } from './core/components/user/user.component';
import { GuardService } from './core/services/guard.service';


const routes: Routes = [
  { path: 'game', component: GamesComponent, canActivate: [GuardService]  },
  { path: 'user/:id', component: UserComponent, canActivate: [GuardService]  },
  { path: 'game/:id/:playerId', component: GameComponent, canActivate: [GuardService]  },
  { path: 'game/:id', component: GameComponent, canActivate: [GuardService]  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
