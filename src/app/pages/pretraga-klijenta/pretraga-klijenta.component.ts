import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MetodeAPIService } from 'src/app/metode-api.service';

@Component({
  selector: 'app-pretraga-klijenta',
  templateUrl: './pretraga-klijenta.component.html',
  styleUrls: ['./pretraga-klijenta.component.css']
})
export class PretragaKlijentaComponent implements OnInit {
klijenti;
private selectedRowIndex: number;
private selectedRow;
  constructor(
    private http: HttpClient,
    private metodaAPI: MetodeAPIService,
  ) { }

  uzmiKlijenteFizicko(){
    this.metodaAPI.getKlijentiFizicko().subscribe((data) => 
    {
      this.klijenti = data;
    });
  }
  ngOnInit(){
  }

  selectRow(index){
    this.selectedRowIndex = index;
  }

  obrisiKlijenta(index) {
    this.klijenti.splice(index,1);
  }

}
