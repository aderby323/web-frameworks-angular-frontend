import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { User } from 'src/app/Users/models/user';
import { UserToken } from '../models/token';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationGuardService implements CanActivate {

  @Output() UserLoginStateChanged = new EventEmitter<boolean>();

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let authToken = localStorage.getItem('AuthToken');
    return ((authToken !== null) ? true : false);
  }

  LogInUser(authToken: UserToken) {
    const decodedToken = jwtDecode<UserToken>(authToken.token);
    localStorage.setItem('AuthToken', JSON.stringify(authToken));
    this.UserLoginStateChanged.emit(true);
  }

  LogoutUser() {
    localStorage.removeItem('AuthToken');
    this.UserLoginStateChanged.emit(false);
  }
}
