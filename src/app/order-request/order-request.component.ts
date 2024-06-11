import { Component } from '@angular/core';
import { Product } from '../Model/products';
import { ProductService } from '../Services/product.service';
import { OrderRequestService } from '../Services/order-request.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-order-request',
  templateUrl: './order-request.component.html',
  styleUrl: './order-request.component.css'
})
export class OrderRequestComponent {

  allProducts: User[] = [];
 

  displayedColumns: string[] = [ 'name', 'email', 'PhoneNo','OrderDetails'];
  ngOnInit() {
    this.getAllProducts();
  }
  constructor( private services:OrderRequestService) {}

  getAllProducts() {
    this.services.getAllOrderReqeusts().subscribe({
      next: (data) => {
        this.allProducts = data;
        console.log(this.allProducts);
      },
      error: () => {
        alert("error occurred");
      }
    });
  }
}
