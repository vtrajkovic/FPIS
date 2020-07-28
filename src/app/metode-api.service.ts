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
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    console.log("Izmeni izvestaj", izvestaj);
    return this.http.post<any>('https://localhost:5001/api/fpis/updateIzvestaj', izvestaj, {headers: headers});
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

  deleteIzvestaj(izvestajId){
    return this.http.delete('https://localhost:5001/api/FPIS/deleteIzvestaji/'+izvestajId);
  }
}
