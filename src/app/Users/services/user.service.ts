import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserToken } from '../../authorization/models/token';
import { AuthorizationGuardService } from 'src/app/authorization/services/authorization-guard.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'https://unf.josecgomez.dev';
  LOCAL_URL   = 'localhost:3000';
  token: UserToken;
  authHeader: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthorizationGuardService) { }

  CreateNewUser(user: User) {
    return this.http.post<User>(`${this.API_URL}/Users`, user);
  }

  LoginUser(userID: string, password: string) {
    return this.http.get<UserToken>(`${this.API_URL}/Users/${userID}/${password}`);
  }

  GetAllUsers() {
    this.token = JSON.parse(localStorage.getItem('AuthToken'));
    this.authHeader = new HttpHeaders ({'token': this.token.token});
    return this.http.get(`${this.LOCAL_URL}/Users`, { headers: this.authHeader });
  }

  GetSpecificUser(userID: string) {
    return this.http.get(`${this.LOCAL_URL}/Users/${userID}`);
  }

  PatchUser(user: User) {
    return this.http.patch(`${this.LOCAL_URL}/Users/${user.userId}`, user);
  }

  DeleteUser(userID: string) {
    return this.http.delete(`${this.LOCAL_URL}/Users/${userID}`);
  }

  SetLoggedInUser(token: string) {
    localStorage.setItem('AuthToken', token);
    this.authService.UserLoginStateChanged.emit(true);
  }

  GetLoggedInUser() {
    return JSON.parse(localStorage.getItem('AuthToken'));
  }
}
