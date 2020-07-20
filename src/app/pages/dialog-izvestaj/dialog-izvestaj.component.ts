import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-izvestaj',
  templateUrl: './dialog-izvestaj.component.html',
  styleUrls: ['./dialog-izvestaj.component.css']
})
export class DialogIzvestajComponent implements OnInit {

  izvestaj;
  constructor(
    public dialogRef: MatDialogRef<DialogIzvestajComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.izvestaj = data;
    console.log('DOSLO', this.izvestaj);
  }

  ngOnInit(): void {}

  izmeni() {
    this.dialogRef.close(this.izvestaj);
  }

}
