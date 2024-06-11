import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LogInService } from './log-in.service';

export const authGuard: CanActivateFn = (route, state) => {

 
  let login = inject(LogInService);
  let r = inject(Router)
  if (login.isLoggedIn == true) {
    return true;
  }
  else {
    r.navigateByUrl("logIn");
    return false;
  }
};
