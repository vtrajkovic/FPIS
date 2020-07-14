import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IzmenaIzvestajaComponent } from './pages/izmena-izvestaja/izmena-izvestaja.component';
import { UnosKlijentaComponent } from './pages/unos-klijenta/unos-klijenta.component';
import { IzmenaKlijentaComponent } from './pages/izmena-klijenta/izmena-klijenta.component';
import { PretragaKlijentaComponent } from './pages/pretraga-klijenta/pretraga-klijenta.component';
import { UnosIzvestajaComponent } from './pages/unos-izvestaja/unos-izvestaja.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'unos-izvestaja', component: UnosIzvestajaComponent },
  { path: 'izmena-izvestaja', component: IzmenaIzvestajaComponent },
  { path: 'unos-klijenta', component: UnosKlijentaComponent },
  { path: 'izmena-klijenta', component: IzmenaKlijentaComponent },
  { path: 'pretraga-klijenta', component: PretragaKlijentaComponent },
  { path: 'pretraga-klijenta', component: AppComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
