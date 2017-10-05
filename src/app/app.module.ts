import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { CommentService } from './comment.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { CommentsComponent } from './comments/comments.component';
import { GlobalEventsManagerService } from './global-events-manager.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AfterNavbarComponent } from './after-navbar/after-navbar.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { MessageSearchComponent } from './message-search/message-search.component';
import { MessageSearchService } from './message-search.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        SignupComponent,
        CommentsComponent,
        NavbarComponent,
        AfterNavbarComponent,
        MyPostsComponent,
        MessageSearchComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        CommentService,
        MessageSearchService,
        GlobalEventsManagerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
