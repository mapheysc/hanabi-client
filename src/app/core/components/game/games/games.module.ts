import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class GamesModule { }
