import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-piece-action',
  templateUrl: './piece-action.component.html',
  styleUrls: ['./piece-action.component.scss']
})
export class PieceActionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PieceActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  play() {
    this.dialogRef.close('play');
  }

  remove() {
    this.dialogRef.close('discard');
  }

}
