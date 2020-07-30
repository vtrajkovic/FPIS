import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MetodeAPIService } from 'src/app/metode-api.service';
import { mainModule } from 'process';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogRacunComponent } from '../dialog-racun/dialog-racun.component';
import { DialogIzvestajComponent } from '../dialog-izvestaj/dialog-izvestaj.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DialogVerifikacijaComponent } from '../dialog-verifikacija/dialog-verifikacija.component';
import { error } from 'protractor';
import { IzvestajModel } from 'src/app/models/izvestajModel';

@Component({
  selector: 'app-unos-izvestaja',
  templateUrl: './unos-izvestaja.component.html',
  styleUrls: ['./unos-izvestaja.component.css'],
})
export class UnosIzvestajaComponent implements OnInit {
  public kriterijum: string = '';
  public kriterijumKlijenti: string = '';
  checkoutForm;
  public izvestaji: IzvestajModel[];
  public klijenti = [];
  public izvestaj: IzvestajModel = new IzvestajModel({});
  selectedRowIndex: number;
  selectedRowNaziv: string = '';
  selectRowIndex: number;

  constructor(
    private http: HttpClient,
    private metodAPI: MetodeAPIService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogIzvestajComponent>,
    public dialogRefVer: MatDialogRef<DialogVerifikacijaComponent>,
    private fb: FormBuilder
  ) {
    this.izvestaji = [];
  }

  izvestajForma = this.fb.group({
    datum: new FormControl(this.izvestaj.datum, Validators.required),
    klijentId: new FormControl(this.izvestaj.klijentId, Validators.required),
    nalogId: new FormControl(this.izvestaj.nalogId, Validators.required),
  });

  uzmiIzvestaje() {
    this.metodAPI.getIzvestaji().subscribe((izvestaji: Array<any>) => {
      console.log('izvestaji', izvestaji);
      this.izvestaji = izvestaji.filter(
        (i) =>
          i.klijent.toLowerCase().indexOf(this.kriterijum.toLowerCase()) >= 0
      );
    });
  }

  uzmiIzvestajeKriterijum(imeKlijenta) {
    this.metodAPI.getIzvestaji().subscribe((izvestaji: Array<any>) => {
      this.izvestaji = izvestaji;
    });
  }
  uzmiKlijente() {
    this.metodAPI.getKlijenti().subscribe((klijenti: Array<any>) => {
      console.log('Klijenti:', klijenti);
      this.klijenti = klijenti.filter(
        (i) =>
          i.naziv
            .toLowerCase()
            .indexOf(this.kriterijumKlijenti.toLowerCase()) >= 0
      );
    });
  }
  selectRow(index){
    this.selectRowIndex = index;
  }

  getRow(index) {
    console.log('uzeo sam index:' + index);
    this.izvestaj = this.izvestaji[index];
    console.log('izvestaj: ' + this.izvestaj);
  }
  ngOnInit() {}

  izmeniPolja() {
    this.dialogRef.close();
  }
  openDialog(index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.izvestaji[index];

    this.dialogRef = this.dialog.open(DialogIzvestajComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe((value) => {
      console.log('lkjfdsha', value);
      this.izvestaji[index] = value;
      this.izmeniIzvestaj(this.izvestaji[index]);
    });
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
        this.obrisiIzvestaj(this.izvestaji[index]);
        this.izvestaji.splice(index, 1);
      }
    });
  }
  selectedRow(index) {
    this.selectedRowIndex = index;
    this.izvestajForma.patchValue({
      klijentId: this.klijenti[index].id,
    });
    // console.log("selected row data", this.selectedRowNaziv);
    // console.log("Ime klijenta", this.izvestaj.klijent);
    // console.log("Vrednosti forme:", this.izvestajForma.value);
    // console.log("Izvestaj:", this.izvestaj)
    this.izvestaj.klijentId = this.klijenti[index].id;
  }

  onSubmitIzvestaj() {
    console.log('Upisi izvestaj:', this.izvestajForma.value);
    const newIzvestaj = new IzvestajModel(this.izvestajForma.value);
    //this.izvestaji.push(JSON.parse(JSON.stringify(this.izvestajForma.value)));
    this.napraviIzvestaj(newIzvestaj);
  }

  obrisiIzvestaj(izvestaj) {
    console.log('ID izvestaja za brisanje:', izvestaj.id);
    this.metodAPI.deleteIzvestaj(izvestaj.id).subscribe(
      (data) => {
        console.log('data', data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  izmeniIzvestaj(izvestaj: any) {
    console.log('Izvestaj za izmenu', izvestaj);
    this.metodAPI.updateIzvestaj(izvestaj).subscribe(
      (data) => {
        console.log('data', data);
      },
      (error) => {
        console.log('greska', error);
      }
    );
  }

  napraviIzvestaj(izvestaj: any) {
    console.log('izvestaj', izvestaj);
    this.metodAPI.createIzvestaj(izvestaj).subscribe(
      (data) => {
        console.log('data', data);
      },
      (error) => {
        console.log('greska', error);
      }
    );
  }
}
