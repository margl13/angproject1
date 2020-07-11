import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent  {
  posts: Post[];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostsOfSingleUser(value.id).subscribe(posts => this.posts = posts);
    });
  }

}
