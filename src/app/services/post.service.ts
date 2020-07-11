import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Post } from '../models/Post';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }
  posts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }
  getPostsOfSingleUser(id): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }

}

