import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
isLoggedIn = false;
  constructor() { }

  login(){
    this.isLoggedIn=true;
  }
}
