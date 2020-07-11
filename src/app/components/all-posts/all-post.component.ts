import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import {PostService} from '../../services/post.service';
@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent  {
  posts: Post[];
  constructor(private postService: PostService) {
    this.postService.posts().subscribe(value => this.posts = value);
  }
}
