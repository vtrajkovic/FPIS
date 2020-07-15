import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pretraga-klijenta',
  templateUrl: './pretraga-klijenta.component.html',
  styleUrls: ['./pretraga-klijenta.component.css']
})
export class PretragaKlijentaComponent implements OnInit {
klijenti;
private selectedRowIndex: number;
  constructor(
    private http: HttpClient,
  ) { }

  getKlijentiFizicko(){
    this.http.get("assets/json/klijentFizicko.json").toPromise().then((data) => {
      this.klijenti = data;
    });
  }

  remove(index:number){
    this.klijenti.splice(this.selectedRowIndex, 1);
  }
  ngOnInit(): void {
  }

  selectRow(index){
    console.log("selected row index",index);
    this.selectedRowIndex = index;
  }
}
