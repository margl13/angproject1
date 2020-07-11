import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';
import { Comment } from '../../models/Comment';

@Component({
  selector: 'app-comments-to-the-post',
  templateUrl: './comments-to-the-post.component.html',
  styleUrls: ['./comments-to-the-post.component.css']
})
export class CommentsToThePostComponent  {
  comments: Comment[];
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.getCommentsOfThePost(value.id).subscribe(comments => this.comments = comments);
    });
  }
  }

