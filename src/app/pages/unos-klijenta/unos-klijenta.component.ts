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
  AbstractControl,
} from '@angular/forms';
import { DialogVerifikacijaComponent } from '../dialog-verifikacija/dialog-verifikacija.component';
import { RacunModel } from 'src/app/models/RacunModel';
import { KlijentFizickoModel } from 'src/app/models/KlijentiFizickoModel';
import { error } from 'protractor';

@Component({
  selector: 'app-unos-klijenta',
  templateUrl: './unos-klijenta.component.html',
  styleUrls: ['./unos-klijenta.component.css'],
})
export class UnosKlijentaComponent implements OnInit {
  // racuni: RacunModel[]=[];
  
  dateValidator(c: AbstractControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === "string") {
      let match = value.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
      if (!match) {
        return { 'dateInvalid': true };
      } else if (match && match[0] !== value) {
        return { 'dateInvalid': true };
      }
    }
    return null;
  }


  
  racun: RacunModel = new RacunModel({});
  id: number;
  klijenti: KlijentFizickoModel[];
  klijent: KlijentFizickoModel = new KlijentFizickoModel({});
  editableIndex;
  selectedRow: number;
  isEdit: boolean;
  klijentForma = this.fb.group({
    jmbg: new FormControl(this.klijent.jmbg, Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern("^[0-9]*$")])),
    imePrezime: new FormControl(this.klijent.imePrezime, Validators.required),
    datumRodj: new FormControl(this.klijent.datumRodj,Validators.compose([Validators.required, this.dateValidator])),
    drzavljanstvo: new FormControl(this.klijent.drzavljanstvo),
    brlk: new FormControl(this.klijent.brlk, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])),
    email: new FormControl(this.klijent.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
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
    public dialogRefVer: MatDialogRef<DialogVerifikacijaComponent>,
    private fb: FormBuilder
  ) {}

  obrisiRacun(index) {
    // console.log('brojRacuna za brisanje:', this.racuni[index].brojRacuna);
    this.metodeAPI
      .deleteRacun(this.klijent.listaRacuna[index].brojRacuna)
      .toPromise()
      .then((data) => {
        console.log('Delete racun promise', data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('klijentId'));
      if (this.id) {
        this.isEdit = true;
        console.log(this.id);
        this.metodeAPI.getKlijentiFizicko().subscribe((data: Array<any>) => {
          console.log(data);
          this.klijent = data.find((x) => x.id == this.id);
          // this.racuni = this.klijent.listaRacuna;
          console.log(this.klijent);
          this.klijentForma.patchValue({
            jmbg: this.klijent.jmbg,
            imePrezime: this.klijent.imePrezime,
            datumRodj: this.klijent.datumRodj,
            drzavljanstvo: this.klijent.drzavljanstvo,
            brlk: this.klijent.brlk,
            email: this.klijent.email,
            adresa: this.klijent.adresa,
          });
        });
      } else {
        this.isEdit = false;
      }
    });
  }

  dodajRacun() {
    if (this.isEdit) {
      this.onSubmitRacun();
      this.klijent.listaRacuna.push(
        JSON.parse(JSON.stringify(this.racunForma.value))
      );
      
    } else {
      this.klijent.listaRacuna.push(
        JSON.parse(JSON.stringify(this.racunForma.value))
      );
      console.log('klijent', this.klijent);
    }
  }

  onSubmitRacun() {
    // console.log(this.racunForma.value);
    // this.racuni.push(JSON.parse(JSON.stringify(this.racunForma.value)));
    const newRacun = new RacunModel(this.racunForma.value);
    newRacun.klijentId = this.klijent.id;
    this.metodeAPI.createRacun(newRacun).subscribe(
      (data) => {
        console.log('Racun za upis(data):', data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  selectRow(index) {
    this.selectedRow=index;
  }
  izmeniPolja() {
    this.dialogRef.close();
  }
  openDialog(index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.klijent.listaRacuna[index];

    this.dialogRef = this.dialog.open(DialogRacunComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe((value) => {
      console.log('lkjfdsha', value);
      this.klijent.listaRacuna[index] = value;
      if (this.isEdit) {
        this.metodeAPI.updateRacun(this.klijent.listaRacuna[index]).subscribe(
          (data) => {
            console.log('Racun za update:', data);
          },
          (error) => {
            console.log('Greska pri update racuna', error);
          }
        );
      } else {
      }
    });
  }
  brisanjeRacuna(index) {
    if (this.isEdit) {
      this.openDialogVerification(index);
    } else {
      this.klijent.listaRacuna.splice(index, 1);
    }
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
        this.obrisiRacun(index);
        this.klijent.listaRacuna.splice(index, 1);
      }
    });
  }
  dodajKlijenta() {
    this.onSubmitKlijent();
  }

  onSubmitKlijent() {
    // console.log(this.klijentForma.value);
    // this.klijenti.push(JSON.parse(JSON.stringify(this.klijentForma.value)));
    const pomocniKlijent = this.klijentForma.value;
    this.klijent.jmbg = pomocniKlijent.jmbg;
    this.klijent.imePrezime = pomocniKlijent.imePrezime;
    this.klijent.brlk = pomocniKlijent.brlk;
    this.klijent.datumRodj = pomocniKlijent.datumRodj;
    this.klijent.email = pomocniKlijent.email;
    this.klijent.drzavljanstvo = pomocniKlijent.drzavljanstvo;
    this.klijent.adresa = pomocniKlijent.adresa;

    if (this.isEdit) {
      this.metodeAPI.updateKlijentFizicko(this.klijent).subscribe(
        (data) => {
          console.log('Data', data);
        },
        (error) => {
          console.log('error:', error);
        }
      );
    } else {
      console.log(this.klijent);
      this.metodeAPI.createKlijentFizicko(this.klijent).subscribe(
        (data) => {
          console.log('Data:', data);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }
}
