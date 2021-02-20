import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Users/models/user';
import { UserService } from 'src/app/Users/services/user.service';
import { UserToken } from '../models/token';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit {

  userID: string = '';
  user: User;
  response: string = '';
  error: string = '';
  authToken: UserToken = JSON.parse(localStorage.getItem('AuthToken'));

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  GetAllUsers() {
    this.userService.GetAllUsers().subscribe((x) => {
      console.log(x);
      this.response = JSON.stringify(x);
      this.error = '';
    }, (error) => {
      console.log(error.error.messsage);
      this.error = error.error.messsage;
    });
  }

  GetSpecificUser() {
    this.userService.GetSpecificUser(this.userID).subscribe((recievedUser) => {
      console.log(recievedUser);
      this.response = JSON.stringify(recievedUser);
      this.error = '';
    }, (error) => {
      console.log(error.error.messsage);
      this.error = error.error.messsage;
    });
  }

  PatchUser() {
    this.userService.PatchUser(this.user).subscribe((recievedUser) => {
      console.log(recievedUser);
      this.response = JSON.stringify(recievedUser);
      this.error = '';
    }, (error) => {
      console.log(error.error.messsage);
      this.error = error.error.messsage;
    });
  }

  DeleteUser() {
    this.userService.DeleteUser(this.userID).subscribe((response) => {
      console.log(response);
      this.response = response.toString();
      this.error = '';
    }, (error) => {
      console.log(error.error.messsage);
      this.error = error.error.messsage;
    });
  }
}
