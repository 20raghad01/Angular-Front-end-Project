import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const permission=localStorage.getItem('token');
  if(permission !=null){
    return true;
  }
  else{
    router.navigate(['/']);
    return false;
  }
  
};
