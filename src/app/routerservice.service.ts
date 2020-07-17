import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterserviceService {
 map = {};
  constructor() { }

  getFromMap(id) {
    return this.map[id];
  }

  setFromMap(id, x) {
    this.map[id] = x;
  }
}
