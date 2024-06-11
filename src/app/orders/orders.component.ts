import { Component } from '@angular/core';
import { Product } from '../Model/products';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/user';
import { OrderRequestService } from '../Services/order-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  order: Product = {};
  userDetails: User = {};
  editStatus: boolean = false;
  //orderDetails?:Product;

  constructor(private ar: ActivatedRoute,
    private service: ProductService,
    private r: Router,
     private ro: OrderRequestService,
     private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.ar.paramMap.subscribe((a) => {
      let order = a.get("myId") ?? '0';
      console.log(order);
      this.service.getOneOrder(+order).subscribe((data) => {
        this.order = data;
        console.log(this.order);
      });
    });
  }

  confirmcheck() {
    if (!this.editStatus) {
      let response = confirm('Are you sure, you want to leave');
      return response;
    }
    else {
      return true;
    }
  }

  makeRequest() {
    if (this.userDetails.name && this.userDetails.email && this.userDetails.phone && this.userDetails.address) {
      this.userDetails.orderName = this.order?.name;
      this.ro.saveOrderRequest(this.userDetails).subscribe({
      next: data => {
          this.snackBar.open("Request Submitted", "", {
          duration: 3000
          });
          this.r.navigateByUrl("home");
          this.editStatus = true;
      },
      error: err => {
          alert(err);
      }
      
      });
  }
  }
}
