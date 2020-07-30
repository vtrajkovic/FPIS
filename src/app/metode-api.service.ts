import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MetodeAPIService {
  izvestaji;
  klijenti;
  racuni;
  private selectedRowIndex;
  constructor(private http: HttpClient) {}

  getIzvestaji() {
    return this.http.get('https://localhost:5001/api/FPIS/Izvestaji');
  }

  updateIzvestaj(izvestaj) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Izmeni izvestaj', izvestaj);
    return this.http.post<any>('https://localhost:5001/api/fpis/updateIzvestaj', izvestaj, { headers: headers }
    );
  }

  createIzvestaj(izvestaj) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Kreiraj izvestaj', izvestaj);
    return this.http.post<any>('https://localhost:5001/api/fpis/createIzvestaj',izvestaj, { headers: headers }
    );
  }
  deleteIzvestaj(izvestajId) {
    return this.http.delete( 'https://localhost:5001/api/FPIS/deleteIzvestaji/' + izvestajId );
  }
  getKlijenti() {
    return this.http.get('https://localhost:5001/api/fpis/getKlijenti');
  }

  getKlijentiFizicko() {
    return this.http.get('https://localhost:5001/api/FPIS/getKlijentiFizicko');
  }

  getRacuni() {
    return this.http.get('assets/json/racuni.json');
  }
  deleteRacun(brojRacuna){
    console.log("Ono sto brises:", brojRacuna)
    return this.http.delete( 'https://localhost:5001/api/FPIS/deleteRacun/' + brojRacuna );
  }
  updateRacun(racun){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Izmeni racun', racun);
    return this.http.post<any>('https://localhost:5001/api/fpis/updateRacun', racun, { headers: headers }
    );
  }
  createRacun(racun) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Kreiraj racun', racun);
    return this.http.post<any>('https://localhost:5001/api/fpis/createRacun',racun, { headers: headers }
    );
  }

  createKlijentFizicko(klijent) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Kreiraj klijenta:', klijent);
    return this.http.post<any>('https://localhost:5001/api/fpis/createKlijentFizicko',klijent, { headers: headers }
    );
  }

  updateKlijentFizicko(klijent){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Izmeni klijenta', klijent);
    return this.http.post<any>('https://localhost:5001/api/fpis/updateKlijentFizicko', klijent, { headers: headers }
    );
  }

  deleteKlijentFizicko(klijentFizickoId){
    return this.http.delete( 'https://localhost:5001/api/FPIS/deleteKlijentFizicko/'+klijentFizickoId)
  }
}
