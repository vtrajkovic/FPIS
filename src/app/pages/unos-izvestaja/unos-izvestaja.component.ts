import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-unos-izvestaja',
  templateUrl: './unos-izvestaja.component.html',
  styleUrls: ['./unos-izvestaja.component.css']
})
export class UnosIzvestajaComponent implements OnInit {
  checkoutForm;
  constructor(
     ) { }

  ngOnInit(): void {
    console.log("nesto")
  }

}
