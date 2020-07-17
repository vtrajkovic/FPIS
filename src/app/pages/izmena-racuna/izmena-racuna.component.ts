import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetodeAPIService } from 'src/app/metode-api.service';
import { NgSelectOption } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogRacunComponent } from '../dialog-racun/dialog-racun.component';

@Component({
  selector: 'app-izmena-racuna',
  templateUrl: './izmena-racuna.component.html',
  styleUrls: ['./izmena-racuna.component.css']
})
export class IzmenaRacunaComponent implements OnInit {
  brojRacuna;
  racun;
  constructor(
    private route: ActivatedRoute,
    private metodeAPI: MetodeAPIService,
   // private routerService: RouterService,
    private dialog: MatDialog,
  ) { }

//   openDialog() {

//     const dialogConfig = new MatDialogConfig();

//     dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;

//     this.dialog.open(DialogRacunComponent, dialogConfig);
// }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.brojRacuna = params.get('brojRacuna');
      if(this.brojRacuna){
        //console.log('Broj Racuna:'+this.brojRacuna)
        this.metodeAPI.getRacuni().subscribe((data: Array<any>) => {
          console.log(data)
          this.racun = data.find(x => x.brojRacuna == this.brojRacuna);
          console.log(this.racun);
        });
        
      }
      else{
        console.log('greska')
      }
    });
  }

  izmeni(){
   // this.routerService.setFromMap(this.racun, this.brojRacuna );
  }
}
