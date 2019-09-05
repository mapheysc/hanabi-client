import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  /**
   * checks to see if the user can activate the page by seeing if the user is logged in
   * @needs [functions] loginService.isLoggedIn, router.navigate, localStorage.setItem
   * @returns boolean, Observable<boolean>, Promise<boolean>
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.url.length) {
      if (next.url[0].path) {
        let path = next.url[0].path;
        if (next.params) {
          Object.keys(next.params).forEach(key => {
            path += '/' + next.params[key];
          });
        }

        localStorage.setItem('attemptedPage', JSON.stringify({
          url: path,
          queryParams: next.queryParams
        }));
      }
    }
    return this.authService.checkToken();
  }
}
