import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MetodeAPIService } from 'src/app/metode-api.service';
import { mainModule } from 'process';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogRacunComponent } from '../dialog-racun/dialog-racun.component';
import { DialogIzvestajComponent } from '../dialog-izvestaj/dialog-izvestaj.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DialogVerifikacijaComponent } from '../dialog-verifikacija/dialog-verifikacija.component';
import { error } from 'protractor';

@Component({
  selector: 'app-unos-izvestaja',
  templateUrl: './unos-izvestaja.component.html',
  styleUrls: ['./unos-izvestaja.component.css'],
})
export class UnosIzvestajaComponent implements OnInit {
  public kriterijum: string = '';
  public kriterijumKlijenti: string = '';
  checkoutForm;
  izvestaji = [];
  klijenti = [];
  izvestaj = { id: null, datum: null, klijent: null, klijentid: null, nalogid: null };
  selectedRowIndex: number;
  selectedRowNaziv:string= '';
  
  constructor
  (private http: HttpClient, 
    private metodAPI: MetodeAPIService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogIzvestajComponent>, 
    public dialogRefVer: MatDialogRef<DialogVerifikacijaComponent>,
    private fb:FormBuilder,
    ) {}

    izvestajForma = this.fb.group({
      datum: new FormControl(this.izvestaj.datum, Validators.required),
      klijent: new FormControl(this.izvestaj.klijent, Validators.required),
      nalogid: new FormControl(this.izvestaj.nalogid, Validators.required),
    });

  uzmiIzvestaje() {
    this.metodAPI.getIzvestaji().subscribe((izvestaji:Array<any>) => {
      console.log("izvestaji", izvestaji);
      this.izvestaji = izvestaji.filter((i)=> i.klijent.toLowerCase().indexOf(this.kriterijum.toLowerCase())>=0);
    });
  }

  uzmiIzvestajeKriterijum(imeKlijenta) {
    this.metodAPI.getIzvestaji().subscribe((izvestaji: Array<any>) => {
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
    console.log('lkjfdsha', value);  
    this.izvestaji[index] = value;
    this.izmeniIzvestaj(this.izvestaji[index]);
  });
}

openDialogVerification(index) {

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialogRefVer =  this.dialog.open(DialogVerifikacijaComponent, dialogConfig);

  this.dialogRefVer.afterClosed().subscribe(value => {
    if(value == "da"){
      console.log("Vratilo se:",value)
      this.obrisiIzvestaj(this.izvestaji[index]);
    }
  });
}
selectedRow(index){
  this.selectedRowIndex = index;
  this.izvestajForma.patchValue({
    klijent: this.klijenti[index].naziv,
  })
  console.log("selected row data", this.selectedRowNaziv);
  console.log("Ime klijenta", this.izvestaj.klijent);
  console.log("Vrednosti forme:", this.izvestajForma.value);
  console.log("Izvestaj:", this.izvestaj)
  
}

onSubmitIzvestaj(){
  console.log(this.izvestajForma.value);
  this.izvestaji.push(JSON.parse(JSON.stringify(this.izvestajForma.value)));
}

obrisiIzvestaj(izvestaj){
  console.log("ID izvestaja za brisanje:",izvestaj.id)
  this.metodAPI.deleteIzvestaj(izvestaj.id).subscribe((data) => {
    console.log("data", data);
  }, (error) => {
    console.log("error", error);
  }
  );
}

izmeniIzvestaj(izvestaj){
  console.log("Izvestaj za izmenu", izvestaj)
  this.metodAPI.updateIzvestaj(izvestaj).subscribe((data) =>{
    console.log("data", data);
  },(error) =>{
    console.log("greska", error)
  }
  );
}
}
