import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {RouterModule} from '@angular/router';
import { AllusersComponent } from './components/all-users/allusers.component';
import { AllPostComponent } from './components/all-posts/all-post.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';
import { CommentsToThePostComponent } from './components/comments-to-the-post/comments-to-the-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    AllusersComponent,
    AllPostComponent,
    AllCommentsComponent,
    PostsOfUserComponent,
    CommentsToThePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllusersComponent},
      {path: 'posts', component: AllPostComponent},
      {path: 'comments', component: AllCommentsComponent},
      {path: 'users/:id/posts', component: PostsOfUserComponent},
      {path: 'posts/:id/comments', component: CommentsToThePostComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
