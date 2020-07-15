import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



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
    private http:HttpClient
     ) { }

  async getIzvestaji() {
      // this.izvestaji = await this.http.get("assets/json/Izvestaji.json").toPromise();
      // console.log("Izvestaji",this.izvestaji);

      this.http.get("assets/json/Izvestaji.json").toPromise().then((data)=>{
        this.izvestaji=data;
        console.log("Izvestaji",this.izvestaji);
      }); 
  }
  async getKlijenti() {
    this.http.get("assets/json/klijentiIzvestaja.json").toPromise().then((data)=>{
      this.klijenti=data;
      console.log("Klijenti",this.klijenti);
    }); 
}
 

  ngOnInit(){
    
  }

  popuniTabelu(){
    
  }

}
