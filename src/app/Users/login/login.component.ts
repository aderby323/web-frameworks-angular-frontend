import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationGuardService } from 'src/app/authorization/services/authorization-guard.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userID: string = '';
  userPassword: string = '';
  error: string = '';


  constructor(private authService: AuthorizationGuardService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  LoginUser() {
    this.userService.LoginUser(this.userID, this.userPassword).subscribe((token) => {
      console.log(token);
      this.authService.LogInUser(token);
      this.router.navigate(['/']);
      this.error = '';
    }, (error) => {
      console.log(error);
      this.error = error.error.messsage;
    });
  }
}
