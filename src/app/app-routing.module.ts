import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';
import { CommentsComponent } from './comments/comments.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'comments-details/:id',
    component: CommentsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
