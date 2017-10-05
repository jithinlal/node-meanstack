import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../comment.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    list = '';

    constructor(private commentService: CommentService, private router: Router) { }

    ngOnInit() {
        this.commentService.authenticate()
            .then(res => {
                if (!res.success) {
                    this.router.navigate(['/home']);
                }
            });
    }

    submitMessage() {
        this.commentService.messageSubmit(this.list)
            .then((res) => {
                if (res.success) {
                    this.list = '';
                } else {
                    this.router.navigate(['/home']);
                }
            }, (err) => {
                console.log(err);
            });
    }
}
