import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unos-klijenta',
  templateUrl: './unos-klijenta.component.html',
  styleUrls: ['./unos-klijenta.component.css']
})
export class UnosKlijentaComponent implements OnInit {
racuni;
  constructor(
    private http:HttpClient
  ) { }

 getRacuni(){
   this.http.get("assets/json/racuni.json").toPromise().then((data) => {
     this.racuni = data;
   });
 } 


ngOnInit(){
}

}
