
export class RacunModel {
  public brojRacuna: string;
  public klijentId: number;
  public tip: string;
  public zaPlatu: string;
  constructor(json) {
    Object.assign(this, json);
   }
}

export enum ZaPlatuEnum {
  NE = 0,
  DA = 1,
}


