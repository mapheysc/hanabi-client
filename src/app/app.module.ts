import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { GameService } from './core/services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { GameModule } from './core/components/game/game.module';
import { PlayerService } from './core/services/player.service';
import { LoginModule } from './core/components/login/login.module';
import { GamesModule } from './core/components/game/games/games.module';
import { UserModule } from './core/components/user/user.module';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    ToastrModule.forRoot(), // ToastrModule added
    GameModule,
    GamesModule,
    UserModule,
    LoginModule
  ],
  providers: [
    AppService,
    GameService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
