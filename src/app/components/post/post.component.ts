import {Component, Input} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: Post;
  constructor(private httpClient: HttpClient) { }
}

