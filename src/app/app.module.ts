import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Route} from "@angular/router";

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children:[
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path:'users', component: UsersComponent, children: [
          {path: ':id', component:UserDetailsComponent}
        ]},
      {path:'posts', component: PostsComponent, children: []},
      {path:'comments', component: CommentsComponent, children: []},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailComponent,
    HeaderComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
