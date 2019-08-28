import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-give-hint',
  templateUrl: './give-hint.component.html',
  styleUrls: ['./give-hint.component.scss']
})
export class GiveHintComponent implements OnInit {

  tellingColor = false;
  tellingNumber = false;

  constructor(
    public dialogRef: MatDialogRef<GiveHintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  getUniqueNonRainbows(pieces) {
    const ps = [];
    pieces.forEach(p => {
      if (p.color !== 'rainbow') {
        if (ps.indexOf(p.color) === -1) {
          ps.push(p.color);
        }
      }
    });
    return ps;
  }

  getUniqueNumbers(pieces) {
    const ps = [];
    pieces.forEach(p => {
      if (ps.indexOf(p.num_fireworks) === -1) {
        ps.push(p.num_fireworks);
      }
    });
    return ps;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  tellColor() {
    this.tellingColor = true;
    this.tellingNumber = false;
  }

  tellNumber() {
    this.tellingColor = false;
    this.tellingNumber = true;
  }

  select(event) {
    this.dialogRef.close(event.value);
  }

}
