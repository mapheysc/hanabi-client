import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {

  gameOptions = {
    numPlayers: 3,
    withRainbows: false,
    gameName: null,
    userId: localStorage.getItem('user_id')
  };

  numPlayers = [2, 3, 4, 5, 6, 7];

  constructor(
    public dialogRef: MatDialogRef<GameOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  selectNumPlayers(event) {
    this.gameOptions.numPlayers = event.value;
  }

  selectWithRainbows(event) {
    this.gameOptions.withRainbows = event.value;
  }

  create() {
    console.log(this.gameOptions);
    this.dialogRef.close(this.gameOptions);
  }

}
