import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../Services/login.service';

export const activateGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLogedIn()) {
    return true;
  } else {
    router.navigateByUrl("/login")
    return false;
  }
};
