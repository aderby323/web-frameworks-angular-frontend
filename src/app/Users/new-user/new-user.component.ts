import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUser: User;
  error: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.newUser = new User();
  }

  CreateUser() {
    this.userService.CreateNewUser(this.newUser).subscribe((returnedUser) => {
      this.error = '';
    }, (error) => {
      console.log(error);
      this.error = error.error.messsage; 
    });
  }
}
