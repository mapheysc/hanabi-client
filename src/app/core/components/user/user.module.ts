import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgbModule
  ]
})
export class UserModule { }
