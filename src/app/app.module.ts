import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnosKlijentaComponent } from './pages/unos-klijenta/unos-klijenta.component';
import { IzmenaKlijentaComponent } from './pages/izmena-klijenta/izmena-klijenta.component';
import { IzmenaIzvestajaComponent } from './pages/izmena-izvestaja/izmena-izvestaja.component';
import { PretragaKlijentaComponent } from './pages/pretraga-klijenta/pretraga-klijenta.component';

import { FormBuilder, FormsModule } from '@angular/forms';
import { UnosIzvestajaComponent } from './pages/unos-izvestaja/unos-izvestaja.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IzmenaRacunaComponent } from './pages/izmena-racuna/izmena-racuna.component';
import { DialogRacunComponent } from './pages/dialog-racun/dialog-racun.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    UnosKlijentaComponent,
    IzmenaKlijentaComponent,
    UnosIzvestajaComponent,
    IzmenaIzvestajaComponent,
    PretragaKlijentaComponent,
    HomeComponent,
    IzmenaRacunaComponent,
    DialogRacunComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [
    FormBuilder,
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
