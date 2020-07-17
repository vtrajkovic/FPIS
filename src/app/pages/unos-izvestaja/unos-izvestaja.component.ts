import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MetodeAPIService } from 'src/app/metode-api.service';




@Component({
  selector: 'app-unos-izvestaja',
  templateUrl: './unos-izvestaja.component.html',
  styleUrls: ['./unos-izvestaja.component.css']
})
export class UnosIzvestajaComponent implements OnInit {
  checkoutForm;
  izvestaji;
  klijenti;
    constructor(
    private http:HttpClient,
    private metodAPI: MetodeAPIService,
     ) { }

  uzmiIzvestaje(){
    this.metodAPI.getIzvestaji().subscribe((izvestaji) => 
    {
      this.izvestaji = izvestaji;
    });
  }
  uzmiKlijente(){
    this.metodAPI.getKlijenti().subscribe((data) => 
    {
      this.klijenti = data; 
      console.log(data);
    });
  }

  ngOnInit(){
    
  }

  popuniTabelu(){
    
  }

}
