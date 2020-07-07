import {Component, Input} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post: Post;
  constructor(private postService: PostService) { }
  ShowDetails(id: number): void {
    this.postService.commentofSinglePost(id).subscribe(value => console.log(value));
  }
}
