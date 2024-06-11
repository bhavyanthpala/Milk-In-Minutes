import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const orderAuthGuard: CanActivateFn = (route, state) => {
  let login = inject(orderAuthGuard);
  let r = inject(Router)
  if (login.isLoggedIn == true) {
    return true;
  }
  else {
    r.navigateByUrl("orderLogin");
    return false;
  }
};
