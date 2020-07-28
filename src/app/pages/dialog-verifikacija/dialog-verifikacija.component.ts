import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-verifikacija',
  templateUrl: './dialog-verifikacija.component.html',
  styleUrls: ['./dialog-verifikacija.component.css']
})
export class DialogVerifikacijaComponent implements OnInit {
  odgovor:string = "ne";
  constructor(
    public dialogRef: MatDialogRef<DialogVerifikacijaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  obrisi(){
    this.odgovor = "da";
    this.dialogRef.close(this.odgovor);
  }
  neBrisi(){
    this.odgovor = "ne";
    this.dialogRef.close(this.odgovor);
  }
}
