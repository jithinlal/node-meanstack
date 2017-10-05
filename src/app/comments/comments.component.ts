import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../comment.service';
import { List } from '../list';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    lists: List[];
    constructor(private commentService: CommentService, private router: Router) { }

    ngOnInit() {
        this.commentService.authenticate()
            .then(res => {
                if (!res.success) {
                    this.router.navigate(['/home']);
                } else {
                    this.getMessages();
                }
            });
    }

    getMessages(): void {
        this.commentService.getAllMessages()
            .then(res => {
                this.lists = res;
            }, (err) => {
                console.log(err);
            });
    }
}
