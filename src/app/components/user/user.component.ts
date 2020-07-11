import {Component, Input} from '@angular/core';
import {User} from '../../models/User';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [`./user.component.css`]
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private httpClient: HttpClient) {
  }
}
