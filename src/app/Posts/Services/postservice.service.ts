import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserToken } from 'src/app/authorization/models/token';
import { UserService } from 'src/app/Users/services/user.service';
import { UserPost } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  API_URL = 'https://unf.josecgomez.dev';
  LOCAL_URL   = 'localhost:3000';
  
  constructor(private http: HttpClient, private userService: UserService) { }

  GetAllPosts(): Observable<any> {
    return this.http.get(`${this.API_URL}/Posts`);
  }

  CreateNewPost(post: UserPost) {
    const currentUser = this.userService.GetLoggedInUser();

    return this.http.post<UserPost>(`${this.API_URL}/Posts`, post, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`) } );
    
  }

  DeletePost(post: UserPost) {
    const currentUser = this.userService.GetLoggedInUser();

    return this.http.delete(`${this.API_URL}/Posts/${post.postId}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`) } );
    
  }

  GetPost(postId: number) {
    const currentUser = this.userService.GetLoggedInUser();

    return this.http.get<UserPost>(`${this.API_URL}/Posts/${postId}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`) } );
  }

  UpdatePost(post: UserPost) {
    const currentUser = this.userService.GetLoggedInUser();

    return this.http.patch<UserPost>(`${this.API_URL}/Posts/${post.postId}`, post, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`) } );
  }
}
