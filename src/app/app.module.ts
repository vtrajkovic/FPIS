import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnosKlijentaComponent } from './pages/unos-klijenta/unos-klijenta.component';
import { IzmenaKlijentaComponent } from './pages/izmena-klijenta/izmena-klijenta.component';
import { IzmenaIzvestajaComponent } from './pages/izmena-izvestaja/izmena-izvestaja.component';
import { PretragaKlijentaComponent } from './pages/pretraga-klijenta/pretraga-klijenta.component';
//import { ReactiveFormsModule } from '@angular/forms';
//import { EditorTekstaComponent } from './editor-teksta/editor-teksta.component';

import { FormBuilder } from '@angular/forms';
import { UnosIzvestajaComponent } from './pages/unos-izvestaja/unos-izvestaja.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UnosKlijentaComponent,
    IzmenaKlijentaComponent,
    UnosIzvestajaComponent,
    IzmenaIzvestajaComponent,
    PretragaKlijentaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ReactiveFormsModule,
    
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
