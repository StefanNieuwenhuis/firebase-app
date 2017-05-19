import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GuardService } from '../services/guard.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public guardService: GuardService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.guardService.user
      .map(user => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      });

  }
}
