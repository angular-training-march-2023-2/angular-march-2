import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // here we will tell the route guard to return true if a user has loggedin
      // here we will tell the route guard to return flase if a user has not loggedin
      // to check if a user has loggedin or not, we need AuthService
      let returnStatus: boolean = false;
      if(this.authService.isLoggedIn){
        returnStatus = true;
      }else{
        this.router.navigate(['login']);
      }
    return returnStatus;
  }
  
}
