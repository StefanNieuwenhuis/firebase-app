import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GuardService } from '../services/guard.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isAllowed: boolean = false;
  constructor(public guardService: GuardService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    this.guardService.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        this.isAllowed = false;
      } else {
        this.router.navigate(['/home']);
        this.isAllowed = true;
      }
    });
    return this.isAllowed;

  }
}
