import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MetodeAPIService } from 'src/app/metode-api.service';
import { KlijentFizickoModel } from 'src/app/models/KlijentiFizickoModel';
import { map } from 'rxjs/operators';
import {
  MatDialogConfig,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogVerifikacijaComponent } from '../dialog-verifikacija/dialog-verifikacija.component';

@Component({
  selector: 'app-pretraga-klijenta',
  templateUrl: './pretraga-klijenta.component.html',
  styleUrls: ['./pretraga-klijenta.component.css'],
})
export class PretragaKlijentaComponent implements OnInit {
  klijenti: KlijentFizickoModel[];
  kriterijum: string = '';
  private selectedRowIndex: number;
  private selectedRow;
  constructor(
    private http: HttpClient,
    private metodaAPI: MetodeAPIService,
    private dialogRefVer: MatDialogRef<DialogVerifikacijaComponent>,
    private dialog: MatDialog,
  ) {}

  async uzmiKlijenteFizicko() {
    this.metodaAPI
      .getKlijentiFizicko()
      .subscribe((klijenti: Array<KlijentFizickoModel>) => {
        console.log('Klijenti:', klijenti);
        this.klijenti = klijenti.filter(
          (i) =>
            i.imePrezime.toLowerCase().indexOf(this.kriterijum.toLowerCase()) >=
            0
        );
      });
  }

  ngOnInit() {}

  selectRow(index) {
    this.selectedRowIndex = index;
  }

  openDialogVerification(index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialogRefVer = this.dialog.open(
      DialogVerifikacijaComponent,
      dialogConfig
    );

    this.dialogRefVer.afterClosed().subscribe((value) => {
      if (value == 'da') {
        console.log('Vratilo se:', value);
        //this.obrisiIzvestaj(this.izvestaji[index]);
        this.metodaAPI.deleteKlijentFizicko(this.klijenti[index].id).subscribe((data) => {
          console.log("Data", data);
        }, (error) => {
          console.log("Error:", error)
        });
        this.klijenti.splice(index, 1);
      }
    });
  }
  obrisiKlijenta(index) {
    this.klijenti.splice(index, 1);
  }
}
