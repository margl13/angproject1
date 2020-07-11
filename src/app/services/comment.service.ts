import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }
  comments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('http://jsonplaceholder.typicode.com/comments');
  }
  getCommentsOfThePost(postId): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
