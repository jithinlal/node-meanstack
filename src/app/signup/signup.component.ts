import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../comment.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    user = {};

    constructor(private commentService: CommentService, private router: Router) { }

    ngOnInit() {
    }

    registerUser() {
        this.commentService.userRegister(this.user)
            .then((res) => {
                if (res.success) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.router.navigate(['/home']);
                }
            }, (err) => {
                console.log(err);
            });
    }

}
