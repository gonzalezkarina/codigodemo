import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 

@Injectable()
export class EnsureAuthenticated implements CanActivate {
  constructor(  private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('email')) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
