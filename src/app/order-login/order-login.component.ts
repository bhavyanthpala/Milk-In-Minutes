import { Component } from '@angular/core';
import { OrderLoginService } from '../Services/order-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-login',
  templateUrl: './order-login.component.html',
  styleUrl: './order-login.component.css'
})
export class OrderLoginComponent {
userName?: string;
userPassword?: string;
constructor(private lin:OrderLoginService,private router:Router){}
loginOrder() {

  if (this.userName === 'MilkInMinutes' && this.userPassword ==='Milk@123') {
    alert("Welcome Log In Successful!");
    this.lin.loginOrder();
    this.router.navigateByUrl('orders');
  }
  else
    alert("Log In Failed!");
}
}
