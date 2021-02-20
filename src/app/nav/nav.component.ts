import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationGuardService } from '../authorization/services/authorization-guard.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthorizationGuardService) { }

  userLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.UserLoginStateChanged.subscribe((userState) => {
      this.userLoggedIn = userState;
    });
  }

  LogOut() {
    this.authService.LogoutUser();
    this.router.navigate(['/']);
  }
}
