import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-racun',
  templateUrl: './dialog-racun.component.html',
  styleUrls: ['./dialog-racun.component.css']
})
export class DialogRacunComponent implements OnInit {
racun;
  constructor(
    public dialogRef: MatDialogRef<DialogRacunComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.racun = data;
    console.log("DOSLO", this.racun);
   }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close("Uspesno ste izmenili racun.");
  }
  izmeni( ){
    this.dialogRef.close(this.racun);
  }
}
