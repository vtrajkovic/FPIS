import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetodeAPIService } from 'src/app/metode-api.service';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogRacunComponent } from '../dialog-racun/dialog-racun.component';

@Component({
  selector: 'app-unos-klijenta',
  templateUrl: './unos-klijenta.component.html',
  styleUrls: ['./unos-klijenta.component.css'],
})
export class UnosKlijentaComponent implements OnInit {
  racuni;
  racun = {
    "brojRacuna": null,
        "zaPlatu": null,
        "tip": null
  };
  id: number;
  klijenti;
  klijent;
  editableIndex;
  selectedRow: number;

  constructor(
    private http: HttpClient,
    private metodeAPI: MetodeAPIService,
    private route: ActivatedRoute,
    // private routerService: RouterService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogRacunComponent>
  ) {}

  obrisiRacun(index) {
    this.racuni.splice(index, 1);
  }
  makeEdiatble(index) {
    this.editableIndex = index;
  }
  isEditable(index) {
    console.log('is editable');
    return true;
    return index === this.editableIndex;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('klijentId'));
      if (this.id) {
        console.log(this.id);
        this.metodeAPI.getKlijentiFizicko().subscribe((data: Array<any>) => {
          console.log(data);
          this.klijent = data.find((x) => x.id == this.id);
          console.log(this.klijent);
        });

        this.metodeAPI.getRacuni().subscribe((data: Array<any>) => {
          this.racuni = data;
        });
      } else {
        this.klijent = {
          id: null,
          jmbg: null,
          imePrezime: null,
          datumRodj: null,
          drzavljanstvo: null,
          brlk: null,
          email: null,
          adresa: null,
        };
      }
    });
  }

  dodajRacun() {
    this.racuni.push(this.racun);

  }
  selectRow(index) {
    console.log(index);
    this.racun = this.racuni[index];
    console.log(this.racun);
    if (this.racun) {
    }
  }
  izmeniPolja() {
    this.dialogRef.close();
  }
  openDialog(index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.racuni[index];

    this.dialogRef = this.dialog.open(DialogRacunComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe((value) => {
      console.log('lkjfdsha', value);
      this.racuni[index] = value;
    });
  }

  sacuvaj(){
    
  }
}
