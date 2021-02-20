import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Modal from 'bootstrap/js/dist/modal';
import jwtDecode from 'jwt-decode';
import { UserToken } from 'src/app/authorization/models/token';
import { AuthorizationGuardService } from 'src/app/authorization/services/authorization-guard.service';
import { User } from 'src/app/Users/models/user';
import { UserPost } from '../models/posts';
import { PostserviceService } from '../Services/postservice.service';

@Component({
  selector: 'app-postitem',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.css']
})
export class PostitemComponent implements OnInit {

  @Input() post: UserPost;
  @Output() PostDeleted = new EventEmitter<number>();
  

  isLoggedInUser: boolean;
  currentToken: UserToken;
  decodedToken: UserToken;
  formattedDate: string;
  user: User;

  constructor(private postService: PostserviceService, private router: Router) { }

  ngOnInit(): void {
    this.currentToken = JSON.parse(localStorage.getItem("AuthToken"));
    if (this.currentToken == null) {
      return;
    }
    this.user = User.toUser(jwtDecode<UserToken>(this.currentToken.token).UserData);
    if (this.user.userId === this.post.userId) {
      this.isLoggedInUser = true;
    }
  }

  EditPost() {
    localStorage.setItem("EditPost", JSON.stringify(this.post));
    this.router.navigate(['/editpost']);
  }

  DeletePost() {
    if(confirm('Do you want to delete this post?')) {
      this.postService.DeletePost(this.post).subscribe(message => {
        this.PostDeleted.emit(this.post.postId);
      }, (error) => {
        console.log('Message could not be deleted.');
      });
    }
  }
}
