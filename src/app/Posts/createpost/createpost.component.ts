import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationGuardService } from 'src/app/authorization/services/authorization-guard.service';
import { PostserviceService } from 'src/app/Posts/Services/postservice.service';
import { UserPost } from '../models/posts';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  postTitle: string = '';
  postContent: string = '';
  postHeaderImage: string = '';
  error: string = '';

  constructor(private authService: AuthorizationGuardService, private postService: PostserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  CreatePost() {
    const newPost: UserPost = new UserPost();
    newPost.title = this.postTitle;
    newPost.content = this.postContent;
    newPost.headerImage = this.postHeaderImage;
    
    this.postService.CreateNewPost(newPost).subscribe((post) => {
      console.log(post);
      this.router.navigate(['/']);
      this.error = '';

    }, (error) => {
      console.log(error);
      this.error = error.error.messsage;
    });
  }
}
