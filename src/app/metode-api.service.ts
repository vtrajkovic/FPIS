import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetodeAPIService {
  izvestaji;
  klijenti;
  racuni;
  private selectedRowIndex;
  constructor(
    private http: HttpClient,
  ) { }

getIzvestaji(){
  return this.http.get("assets/json/Izvestaji.json");
}
getKlijenti(){
  return this.http.get("assets/json/klijentiIzvestaja.json");
}

getKlijentiFizicko( ){
  return this.http.get("assets/json/klijentFizicko.json");
}

getRacuni(){
  return this.http.get("assets/json/racuni.json");
}


}
