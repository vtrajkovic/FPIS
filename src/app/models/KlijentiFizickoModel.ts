import { RacunModel } from './RacunModel';

export class KlijentFizickoModel {
  public id: number;
  public jmbg: string;
  public imePrezime: string;
  public datumRodj: Date;
  public drzavljanstvo: string;
  public brlk: number; 
  public email:string;
  public adresa: string;
  public listaRacuna: RacunModel[];
  
  constructor(json) {
    Object.assign(this, json);
    if(!this.listaRacuna){
      this.listaRacuna=[];
    }
   }
}
