import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationGuardService } from 'src/app/authorization/services/authorization-guard.service';
import { UserPost } from '../models/posts';
import { PostserviceService } from '../Services/postservice.service';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})

export class ViewpostsComponent implements OnInit {

  postArray: UserPost[];
  error: string = '';
  noPosts: boolean = false;

  constructor(private postService: PostserviceService, private router: Router) { }

  ngOnInit(): void {
    this.postService.GetAllPosts().subscribe((arr) => {
      this.postArray = arr;
      if (this.postArray.length < 1) {
        this.noPosts = true;
        return;
      }
      this.postArray.reverse();
    });
  }

  CreatePost() {
    this.router.navigate(['/createpost']);
  }

  DeletePost(postID: number) {
    this.postArray.splice(this.postArray.findIndex(post => post.postId === postID), 1);
  }
}
