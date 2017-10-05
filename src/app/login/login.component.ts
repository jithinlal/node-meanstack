import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../comment.service';
import { GlobalEventsManagerService } from '../global-events-manager.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user = {};

    constructor(
        private commentService: CommentService,
        private router: Router,
        private globalEventsManagerService: GlobalEventsManagerService
    ) { }

    ngOnInit() {
    }

    loginUser() {
        this.commentService.userLogin(this.user)
            .then((res) => {
                if (res.success) {
                    this.globalEventsManagerService.showNavBar(true);
                    this.router.navigate(['/dashboard']);
                } else {
                    this.router.navigate(['/home']);
                }
            }, (err) => {
                console.log(err);
            });
    }
}
