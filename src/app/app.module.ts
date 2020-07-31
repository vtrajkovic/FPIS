import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnosKlijentaComponent } from './pages/unos-klijenta/unos-klijenta.component';
import { PretragaKlijentaComponent } from './pages/pretraga-klijenta/pretraga-klijenta.component';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnosIzvestajaComponent } from './pages/unos-izvestaja/unos-izvestaja.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogRacunComponent } from './pages/dialog-racun/dialog-racun.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogIzvestajComponent } from './pages/dialog-izvestaj/dialog-izvestaj.component';
import { DialogVerifikacijaComponent } from './pages/dialog-verifikacija/dialog-verifikacija.component';


@NgModule({
  declarations: [
    AppComponent,
    UnosKlijentaComponent,
    UnosIzvestajaComponent,
    PretragaKlijentaComponent,
    HomeComponent,
    DialogRacunComponent,
    DialogIzvestajComponent,
    DialogVerifikacijaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
