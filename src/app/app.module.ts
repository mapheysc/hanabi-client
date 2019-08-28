import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './core/components/nav/nav.module';
import { AppService } from './app.service';
import { GameService } from './core/services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { GameModule } from './core/components/game/game.module';
import { PlayerService } from './core/services/player.service';

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
    NavModule,
    GameModule
  ],
  providers: [
    AppService,
    GameService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
