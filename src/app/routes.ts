import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { CommentsComponent } from './comments/comments.component';
import { MyPostsComponent } from './my-posts/my-posts.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'comments',
        component: CommentsComponent
    },
    {
        path: 'mycomments',
        component: MyPostsComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
