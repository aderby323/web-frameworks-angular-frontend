import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationGuardService } from 'src/app/authorization/services/authorization-guard.service';
import { UserPost } from '../models/posts';
import { PostserviceService } from '../Services/postservice.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  editPost: UserPost = JSON.parse(localStorage.getItem("EditPost"));
  error: string = '';
  editedPostTitle: string = '';
  editedPostContent: string = '';
  editedPostHeaderImage: string = '';

  @Input() post: UserPost;

  constructor(private authService: AuthorizationGuardService, private postService: PostserviceService, private router: Router) { }

  ngOnInit(): void {
    this.editedPostTitle = this.editPost.title;
    this.editedPostContent = this.editPost.content;
    this.editedPostHeaderImage = this.editPost.headerImage;
  }

  UpdatePost() {
    this.editPost.title = this.editedPostTitle;
    this.editPost.content = this.editedPostContent;
    this.editPost.headerImage = this.editedPostHeaderImage;
    
    this.postService.UpdatePost(this.editPost).subscribe((post) => {
      console.log(post);
      this.router.navigate(['/']);
      this.error = '';
    }, (error) => {
      console.log(error);
      this.error = error.error.messsage;
    });
  }

  ReturnPost() {
    return this.post;
  }

}
