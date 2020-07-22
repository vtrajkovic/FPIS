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
import {
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-unos-klijenta',
  templateUrl: './unos-klijenta.component.html',
  styleUrls: ['./unos-klijenta.component.css'],
})
export class UnosKlijentaComponent implements OnInit {
  racuni = [];
  racun = {
    brojRacuna: null,
    zaPlatu: null,
    tip: null,
  };
  id: number;
  klijenti = [];
  klijent = {
    id: null,
    jmbg: null,
    imePrezime: null,
    datumRodj: null,
    drzavljanstvo: null,
    brlk: null,
    email: null,
    adresa: null
  };
  editableIndex;
  selectedRow: number;
  klijentForma = this.fb.group({
    jmbg: new FormControl(this.klijent.jmbg, Validators.required),
    imePrezime: new FormControl(this.klijent.imePrezime, Validators.required),
    datumRodj: new FormControl(this.klijent.datumRodj, Validators.required),
    drzavljanstvo: new FormControl(this.klijent.drzavljanstvo),
    brlk: new FormControl(this.klijent.brlk, Validators.required),
    email: new FormControl(this.klijent.email),
    adresa: new FormControl(this.klijent.adresa, Validators.required),
  });

  racunForma = this.fb.group({
    brojRacuna: new FormControl(this.racun.brojRacuna, Validators.required),
    zaPlatu: new FormControl(this.racun.zaPlatu, Validators.required),
    tip: new FormControl(this.racun.zaPlatu, Validators.required),
  });
  constructor(
    private http: HttpClient,
    private metodeAPI: MetodeAPIService,
    private route: ActivatedRoute,
    // private routerService: RouterService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogRacunComponent>,
    private fb: FormBuilder
  ) {}

  obrisiRacun(index) {
    this.racuni.splice(index, 1);
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
    this.onSubmitRacun();
  }

  onSubmitRacun(){
    console.log(this.racunForma.value)
    this.racuni.push(JSON.parse(JSON.stringify(this.racunForma.value)));
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
  dodajKlijenta() {
    this.onSubmitKlijent();
  }

  onSubmitKlijent(){
    console.log(this.klijentForma.value);
    this.klijenti.push(JSON.parse(JSON.stringify(this.klijentForma.value)));
  }
  validacijaForme(){

  }
}
