import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { OrdersComponent } from './orders/orders.component';
import { canDeactivateGuard } from './Services/can-deactivate.guard';
import { LogInComponent } from './log-in/log-in.component';
import { OrderRequestComponent } from './order-request/order-request.component';
import { authGuard } from './Services/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { orderAuthGuard } from './Services/order-auth.guard';
import { OrderLoginComponent } from './order-login/order-login.component';

const routes: Routes = [

  {
    path: '',
    component: LandingViewComponent
  },
  {
    path: "home",
    component: LandingViewComponent
  },
  {
    path: "orders/:myId",
    component: OrdersComponent,
    canDeactivate: [canDeactivateGuard],
    //canActivate:[orderAuthGuard]
  },
  {
    path: "logIn",
    component: LogInComponent,
  },
  {
    path: "OrderRequest",
    component: OrderRequestComponent,
    canActivate:[authGuard]
  },
  {
    path:"orderLogin",
    component: OrderLoginComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
