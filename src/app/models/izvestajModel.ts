
export class IzvestajModel {
  public id: number;
  public klijentNaziv: string;
  public klijentId: number;
  public nalogId: number;
  public datum: Date =null;
  constructor(json) {
    Object.assign(this, json);
   }
}
