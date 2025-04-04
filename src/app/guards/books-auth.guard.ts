import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const booksAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if(!authService.isAuthenticatedUser()){
    alert('access denied. please login')
    router.navigate(['./login'])
    return false;
  }
  return true;
};
