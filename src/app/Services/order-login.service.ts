import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderLoginService {

  isLoggedIn = false;
  constructor() { }

  loginOrder(){
    this.isLoggedIn=true;
  }

}
