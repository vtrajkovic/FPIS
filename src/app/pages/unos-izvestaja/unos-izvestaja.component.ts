import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MetodeAPIService } from 'src/app/metode-api.service';
import { mainModule } from 'process';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogRacunComponent } from '../dialog-racun/dialog-racun.component';
import { DialogIzvestajComponent } from '../dialog-izvestaj/dialog-izvestaj.component';

@Component({
  selector: 'app-unos-izvestaja',
  templateUrl: './unos-izvestaja.component.html',
  styleUrls: ['./unos-izvestaja.component.css'],
})
export class UnosIzvestajaComponent implements OnInit {
  public kriterijum: string = '';
  public kriterijumKlijenti: string = '';
  checkoutForm;
  izvestaji;
  klijenti;
  izvestaj = { id: 0, datum: null, klijent: '', nalogid: 0 };
  constructor
  (private http: HttpClient, 
    private metodAPI: MetodeAPIService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogIzvestajComponent>
    ) {}

  uzmiIzvestaje() {
    this.metodAPI.getIzvestaji().subscribe((izvestaji:Array<any>) => {
      console.log("izvestaji", izvestaji);
      this.izvestaji = izvestaji.filter((i)=> i.klijent.toLowerCase().indexOf(this.kriterijum.toLowerCase())>=0);
    });
  }

  uzmiIzvestajeKriterijum(imeKlijenta) {
    this.metodAPI.getIzvestaji().subscribe((izvestaji) => {
      this.izvestaji = izvestaji;
    });
  }
  uzmiKlijente() {
    this.metodAPI.getKlijenti().subscribe((klijenti:Array<any>) => {
      console.log("Klijenti:", klijenti);
      this.klijenti = klijenti.filter((i)=> i.naziv.toLowerCase().indexOf(this.kriterijumKlijenti.toLowerCase())>=0);
    });
  }

  getRow(index) {
    console.log('uzeo sam index:' + index);
    this.izvestaj = this.izvestaji[index];
    console.log('izvestaj: ' + this.izvestaj);
  }
  ngOnInit() {}

  izmeniPolja()
{
   this.dialogRef.close();
}
openDialog(index) {

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = this.izvestaji[index];

  this.dialogRef =  this.dialog.open(DialogIzvestajComponent, dialogConfig);

  this.dialogRef.afterClosed().subscribe(value => {
    console.log('lkjfdsha', value)
    this.izvestaji[index] = value;
  });
}
}
