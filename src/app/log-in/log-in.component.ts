import { Component } from '@angular/core';
import { LogInService } from '../Services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  code?: string;
  UserName?: string;

  constructor(private lin: LogInService, private router: Router) { }
  login() {

    if (this.UserName==='MilkInMinutes' && this.code === 'MilkInMinutes') {
      alert("Welcome Log In Successful!");
      this.lin.login();
      this.router.navigateByUrl('OrderRequest');
    }
    else
      alert("Log In Failed!");
  }
  
}
