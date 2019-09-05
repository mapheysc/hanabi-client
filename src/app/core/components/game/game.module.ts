import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { MaterialModule } from 'src/app/material.module';
import { PlayerModule } from '../player/player.module';
import { GiveHintComponent } from './give-hint/give-hint.component';
import { GameOptionsComponent } from './game-options/game-options.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [GameComponent, GiveHintComponent, GameOptionsComponent, ConfirmDeleteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PlayerModule,
    FormsModule,
    RouterModule
  ],
  exports: [GameComponent],
  entryComponents: [GiveHintComponent, GameOptionsComponent, ConfirmDeleteComponent]
})
export class GameModule { }
