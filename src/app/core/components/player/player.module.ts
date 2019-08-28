import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { MaterialModule } from 'src/app/material.module';
import { PieceActionComponent } from './piece-action/piece-action.component';



@NgModule({
  declarations: [PlayerComponent, PieceActionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [PlayerComponent],
  entryComponents: [PieceActionComponent]
})
export class PlayerModule { }
