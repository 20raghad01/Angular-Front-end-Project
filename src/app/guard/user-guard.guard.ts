import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const permission=localStorage.getItem('Usertoken');
  if(permission !=null){
    return true;
  }
  else{
    router.navigate(['/UserLogin']);
    return false;
  }
};
