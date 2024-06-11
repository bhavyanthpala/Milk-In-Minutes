import { CanDeactivateFn } from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';

export const canDeactivateGuard: CanDeactivateFn<OrdersComponent> = (component, currentRoute, currentState, nextState) => {
  return component.confirmcheck();
};
